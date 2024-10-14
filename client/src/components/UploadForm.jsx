import React, { useRef, useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { uploadImageApi } from "../services/Service";

const UploadForm = () => {
  const backFileInputRef = useRef(null);
  const frontFileInputRef = useRef(null);
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);

  const handleFrontFileClick = () => {
    frontFileInputRef.current.click();
  };
  const handleBackFileClick = () => {
    backFileInputRef.current.click();
  };

  const handleFrontFileChange = (e) => {
    if (e.target.files) {
      setFrontFile(e.target.files[0]);
    }
  };

  const handleBackFileChange = (e) => {
    if (e.target.files) {
      setBackFile(e.target.files[0]);
    }
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    alert("hello");
    console.log(frontFile);
    console.log(backFile);
    if (!frontFile || !backFile) {
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
    } catch (error) {
      alert(error);
    }
  };
  return (
    <section className="p-20 ">
      <form className="text-black flex flex-col gap-10">
        <div>
          <label htmlFor="file" className="font-semibold text-base">
            Aadhaar Front
          </label>
          <div className="flex pt-3">
            <div
              onClick={handleFrontFileClick}
              className="flex flex-col items-center justify-center w-[500px] h-[200px] border-2 bg-white shadow-lg rounded-lg cursor-pointer hover:bg-gray-100 transition text-violet-500"
            >
              <IoMdCloudUpload size={30} />
              <p className="text-violet-600 font-semibold">
                Click here to Upload/Capture
              </p>
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
          <label htmlFor="file" className="font-semibold text-base">
            Aadhaar Back
          </label>
          <div className="flex pt-3">
            <div
              onClick={handleBackFileClick}
              className="flex flex-col items-center justify-center w-[500px] h-[200px] border-2 bg-white   shadow-lg rounded-lg cursor-pointer hover:bg-gray-100 transition text-violet-500"
            >
              <IoMdCloudUpload size={30} />
              <p className="text-violet-600 font-semibold">
                Click here to Upload/Capture
              </p>
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
            className="px-48 p-4 font-bold rounded-lg text-sm bg-blue-500 text-white hover:bg-blue-600"
            onClick={handleUpload}
          >
            PARSE AADHAAR
          </button>
        </div>
      </form>
    </section>
  );
};

export default UploadForm;
