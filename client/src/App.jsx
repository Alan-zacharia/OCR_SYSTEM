import React from "react";
import UploadForm from "./components/UploadForm";
import DataVisualizer from "./components/DataVisualizer";
import {  Toaster } from "react-hot-toast";

const App = () => {
  return (
    <main className=" text-green-500  h-screen bg-gray-100 flex justify-around ">
      <Toaster/>
      <UploadForm />
      <DataVisualizer />
    </main>
  );
};

export default App;
