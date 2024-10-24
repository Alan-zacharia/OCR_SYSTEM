"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AadharImageFIleParser = void 0;
const tesseract_js_1 = __importDefault(require("tesseract.js"));
const errorHandler_1 = __importDefault(require("../middlewares/errorHandler"));
const AadharImageFIleParser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const files = req.files;
        if (!files || files.length === 0) {
            res.status(400).send("No files uploaded.");
            return;
        }
        const results = yield Promise.all(files.map((file) => tesseract_js_1.default.recognize(file.path, "eng")));
        const extractedTexts = results.map((result) => result.data.text).join("\n");
        const extractedData = parseOCRData(extractedTexts);
        res
            .status(200)
            .json({
            status: true,
            data: extractedData,
            message: "Parsing Successfulll",
        });
    }
    catch (error) {
        console.log(error.message);
        next(errorHandler_1.default);
    }
});
exports.AadharImageFIleParser = AadharImageFIleParser;
const parseOCRData = (extractedTexts) => {
    const nameMatch = extractedTexts.match(/- (.+?) &/);
    const dobMatch = extractedTexts.match(/DOB\s*:\s*(\d{2}\/\d{2}\/\d{4})/);
    const genderMatch = extractedTexts.match(/(Male|Female)/i);
    const uidMatch = extractedTexts.match(/(\d{4}\s*\d{4}\s*\d{4})/);
    const addressMatch = extractedTexts.match(/Address:\s*([^0-9]*?)(?=\d{6})/);
    const pincodeMatch = extractedTexts.match(/(\d{6})/);
    const ageBandMatch = extractedTexts.match(/age\s*:\s*(\d+)\s*-\s*(\d+)/i);
    let cleanAddress = "N/A";
    if (addressMatch) {
        const rawAddress = addressMatch[1];
        const places = rawAddress
            .replace(/S\/O:\s*|=|[£©]|(?:AER|SE pe Re SPARE|Ba EE Niel|ZachariaMathai|STR TREE|S)\s*/gi, "")
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
    };
};
