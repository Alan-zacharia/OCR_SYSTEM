import React from "react";
import UploadForm from "../components/UploadForm";
import DataVisualizer from "../components/DataVisualizer";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  return (
    <main className=" text-green-500  h-screen bg-gray-100 flex justify-around flex-col lg:flex-row">
      <Toaster />
      <UploadForm />
      <DataVisualizer />
    </main>
  );
};

export default HomePage;
