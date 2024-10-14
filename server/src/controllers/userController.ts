import { NextFunction, Request, Response } from "express";
import Tesseract from "tesseract.js";

export const AadharImageFIleParser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const files = req.files as Express.Multer.File[];
    if (!files || files.length === 0) {
      res.status(400).send("No files uploaded.");
      return;
    }
    const results = await Promise.all(
      files.map((file) => Tesseract.recognize(file.path, "eng"))
    );
    const extractedTexts = results.map((result) => result.data.text).join("\n");
    console.log(extractedTexts);
    const extractedData = parseOCRData(extractedTexts);
    console.log(extractedData);
    res.send("hello");
  } catch (error) {
    console.log((error as Error).message);
    console.log(error);
    // next(error);
  }
};
const parseOCRData = (extractedTexts: String): any => {
  const nameMatch = extractedTexts.match(
    /(?:Government of India.*?\n)([A-Za-z\s]+)(?:\n)/
  );
  const dobMatch = extractedTexts.match(/DOB\s*:\s*(\d{2}\/\d{2}\/\d{4})/);
  const genderMatch = extractedTexts.match(/(Male|Female)/i);
  const uidMatch = extractedTexts.match(/(\d{4}\s*\d{4}\s*\d{4})/);
  const addressMatch = extractedTexts.match(/Address:\s*([^0-9]*?)(?=\d{6})/);
  const pincodeMatch = extractedTexts.match(/(\d{6})/);
  const ageBandMatch = extractedTexts.match(/age\s*:\s*(\d+)\s*-\s*(\d+)/i);
  const mobileMatch = extractedTexts.match(/(?:\+?\d{1,3})?\s*(\d{10})/);

  const maskMobileNumber = (number: string) => {
    return number.replace(/(\d{2})\d{6}(\d{2})/, "$1******$2");
  };
  let cleanAddress = "N/A";
  if (addressMatch) {
    const rawAddress = addressMatch[1];
    const places = rawAddress
      .replace(
        /S\/O:\s*|=|[£©]|(?:AER|SE pe Re SPARE|Ba EE Niel|ZachariaMathai|STR TREE|S)\s*/gi,
        ""
      )
      .split(/,\s*|\s+-\s+|\s*\n\s*/)
      .map((part) => part.trim())
      .filter((part) => part && !/^\d/.test(part));

    cleanAddress = [...new Set(places)].join(", ");
  }
  return {
    Name: nameMatch ? nameMatch[1].trim() : "N/A",
    DOB: dobMatch ? dobMatch[1].trim() : "N/A", 
    Gender: genderMatch ? genderMatch[0].trim().toUpperCase() : "N/A",
    UID: uidMatch ? uidMatch[0].replace(/\s/g, "").trim() : "N/A",
    address: cleanAddress,
    pincode: pincodeMatch ? pincodeMatch[0].trim() : "N/A",
    age_band: ageBandMatch ? `${ageBandMatch[1]}-${ageBandMatch[2]}` : "N/A",
    maskedMobile: mobileMatch ? maskMobileNumber(mobileMatch[1]) : "N/A",
  };
};
