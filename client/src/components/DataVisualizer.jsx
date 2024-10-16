import React from "react";
import { useParsedData } from "../context/parsedDataContext";

const DataVisualizer = () => {
  const { state } = useParsedData();

  return (
    <section className="p-20 text-black w-full pt-20 bg-white">
      {state.parsedData ? (
        <div className="flex flex-col items-start ml-10 pt-10 pb-8">
          <h1 className="font-bold">Parsed Data</h1>
          <div className="flex mt-4">
            <div className="flex flex-col mr-4">
              <div className="mb-2">
                <label
                  htmlFor="parsed-input-number"
                  className="text-sm font-semibold"
                >
                  Aadhaar Number
                </label>
              </div>
              <input
                id="parsed-input-number"
                className="border-b border-black pointer-events-none   mb-8 w-72"
                value={state.parsedData.UID}
                type="text"
              />
              <div>
                <label
                  htmlFor="parsed-input-DOB"
                  className="text-sm font-semibold "
                >
                  Date of birth
                </label>
              </div>
              <input
                id="parsed-input-DOB"
                className="border-b border-black mt-3 w-72  pointer-events-none"
                value={state.parsedData.DOB}
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <div className="mb-2">
                <label
                  htmlFor="parsed-input-name"
                  className="text-sm font-semibold"
                >
                  Name on Aadhaar
                </label>
              </div>
              <input
                id="parsed-input-name"
                className="border-b border-black text-black pointer-events-none  mb-8 w-72"
                value={state.parsedData.Name}
                type="text"
              />
              <div>
                <label
                  htmlFor="parsed-input-gender"
                  className="text-sm font-semibold"
                >
                  Gender
                </label>
              </div>
              <input
                id="parsed-input-gender"
                className="border-b border-black mt-3 w-72 pointer-events-none"
                type="text"
                value={state.parsedData.Gender}
              />
            </div>
          </div>
          <div className="mt-4 w-full">
            <div>
              <label
                htmlFor="parsed-input-address"
                className="text-sm font-semibold"
              >
                Address
              </label>
            </div>
            <div>
              <input
                id="parsed-input-address"
                className="border-b border-black w-[37rem] pointer-events-none h-8 mb-4"
                value={state.parsedData.address}
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-2">
              <label
                htmlFor="parsed-input-pincode"
                className="text-sm font-semibold"
              >
                Pincode
              </label>
            </div>
            <input
              id="parsed-input-pincode"
              className="border-b border-black mt-3 w-72 pointer-events-none "
              value={state.parsedData.pincode}
              type="text"
            />
          </div> 
        </div>
      ) : (
        <div className="flex flex-col gap-7">
          <label htmlFor="heading" className="font-semibold">
            API Response
          </label>
          <div className="bg-gray-200 w-full h-28 rounded-lg p-5 text-black ">
            <p>Start Performing OCR Inputting Your Aadhaar front and back</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default DataVisualizer;
