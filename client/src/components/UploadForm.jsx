import React, { useRef, useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { uploadImageApi } from "../services/Service";
import toast from "react-hot-toast";
import { useParsedData } from "../context/parsedDataContext";

const UploadForm = () => {
  const backFileInputRef = useRef(null);
  const frontFileInputRef = useRef(null);
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useParsedData();

  const handleFrontFileClick = () => {
    frontFileInputRef.current.click();
  };
  const handleBackFileClick = () => {
    backFileInputRef.current.click();
  };

  const handleFrontFileChange = (e) => {
    const file = e.target.files[0];
    setFrontFile(file);
  };

  const handleBackFileChange = (e) => {
    const file = e.target.files[0];
    setBackFile(file);
  };
  const handleUpload = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!frontFile || !backFile) {
      toast.error("Please select both front and back images");
      setLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append("uploads", frontFile);
    formData.append("uploads", backFile);
    try {
      const res = await uploadImageApi(formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data.extractedData);
      dispatch({ type: "SET_DATA", payload: res.data.data });
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="m-2 lg:m-12 pt-10 bg-gray-100   lg:w-full">
      <form className="text-black flex flex-col gap-10">
        <div>
          <label htmlFor="file" className="font-bold text-base">
            Aadhaar Front
          </label>
          <div className="flex pt-3">
            <div
              onClick={handleFrontFileClick}
              className={`${
                frontFile ? "bg-gray-800" : "hover:bg-gray-800"
              } flex flex-col items-center justify-center w-full h-64 border-2 bg-white shadow-lg rounded-xl cursor-pointer  transition text-blue-600`}
            >
              {frontFile ? (
                <img
                  src={URL.createObjectURL(frontFile)}
                  alt="Front Preview"
                  className="h-60"
                />
              ) : (
                <>
                  <IoMdCloudUpload size={30} />
                  <p className="text-blue-600 font-semibold">
                    Click here to Upload/Capture
                  </p>
                </>
              )}
              <input
                type="file"
                ref={frontFileInputRef}
                onChange={handleFrontFileChange}
                accept="image/*"
                className="hidden"
                capture="environment"
              />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="file" className="font-bold text-base">
            Aadhaar Back
          </label>
          <div className="flex pt-3">
            <div
              onClick={handleBackFileClick}
              className={`${
                backFile ? "bg-gray-800" : "hover:bg-gray-800"
              } flex flex-col items-center justify-center w-full h-64 border-2 bg-white shadow-lg rounded-xl cursor-pointer  transition text-blue-600`}
            >
              {backFile ? (
                <img
                  src={URL.createObjectURL(backFile)}
                  alt="Back Preview"
                  className="h-60"
                />
              ) : (
                <>
                  <IoMdCloudUpload size={30} />
                  <p className="text-blue-600 font-semibold">
                    Click here to Upload/Capture
                  </p>
                </>
              )}
              <input
                type="file"
                ref={backFileInputRef}
                onChange={handleBackFileChange}
                accept="image/*"
                className="hidden"
                capture="environment"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            className="relative flex items-center justify-center pz-20 lg:px-48 w-full p-4 font-bold rounded-lg text-sm bg-blue-500 text-white hover:bg-blue-600 "
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                <span>parsing......</span>
              </>
            ) : (
              "PARSE AADHAAR"
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default UploadForm;
