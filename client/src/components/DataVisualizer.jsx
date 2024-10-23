import React from "react";
import { useParsedData } from "../context/parsedDataContext";

const DataVisualizer = () => {
  const { state } = useParsedData();

  return (
    <main className="p-4 lg:p-20 text-black w-full pt-20 bg-white">
      {state.parsedData ? (
        <article className="flex flex-col items-start lg:ml-10 pt-10 pb-8">
          <h1 className="font-bold">Parsed Data</h1>
          <section className="flex flex-col lg:flex-row mt-4 w-full">
            <div className="flex flex-col mr-4 w-full lg:w-1/2">
              <label htmlFor="parsed-input-number" className="text-sm font-semibold mb-2">
                Aadhaar Number
              </label>
              <input
                id="parsed-input-number"
                className="border-b border-black mb-8 w-full lg:w-auto outline-none"
                value={state.parsedData.UID}
                type="text"
                readOnly
              />
              <label htmlFor="parsed-input-DOB" className="text-sm font-semibold ">
                Date of Birth
              </label>
              <input
                id="parsed-input-DOB"
                className="border-b border-black mt-3 w-full lg:w-auto outline-none"
                value={state.parsedData.DOB}
                type="text"
                readOnly
              />
            </div>

            <div className="flex flex-col w-full lg:w-1/2 mt-5 lg:mt-0">
              <label htmlFor="parsed-input-name" className="text-sm font-semibold mb-2">
                Name on Aadhaar
              </label>
              <input
                id="parsed-input-name"
                className="border-b border-black mb-5  lg:mb-8 w-full lg:w-auto outline-none"
                value={state.parsedData.Name}
                type="text"
                readOnly
              />
              <label htmlFor="parsed-input-gender" className="text-sm font-semibold">
                Gender
              </label>
              <input
                id="parsed-input-gender"
                className="border-b border-black mt-3 w-full lg:w-auto outline-none"
                value={state.parsedData.Gender}
                type="text"
                readOnly
              />
            </div>
          </section>

          <section className="mt-4 w-full flex flex-col">
            <label htmlFor="parsed-input-address" className="text-sm font-semibold">
              Address
            </label>
            <input
              id="parsed-input-address"
              className="border-b border-black w-full lg:w-full outline-none h-8 mb-4"
              value={state.parsedData.address}
              type="text"
              readOnly
            />
          </section>

          <section className="flex flex-col">
            <label htmlFor="parsed-input-pincode" className="text-sm font-semibold mb-2">
              Pincode
            </label>
            <input
              id="parsed-input-pincode"
              className="border-b border-black mt-3 w-full lg:w-auto outline-none"
              value={state.parsedData.pincode}
              type="text"
              readOnly
            />
          </section>
        </article>
      ) : (
        <aside className="flex flex-col gap-7">
          <h2 className="font-semibold">API Response</h2>
          <div className="bg-gray-200 w-full h-28 rounded-lg p-5 text-black ">
            <p>Start Performing OCR Inputting Your Aadhaar front and back</p>
          </div>
        </aside>
      )}
    </main>
  );
};

export default DataVisualizer;
