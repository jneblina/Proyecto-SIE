"use client"
import { IconFileInfo, IconFileUpload } from "@tabler/icons-react";
import React from "react";
import { useState } from "react";

const FileUpload = ({ title, type, children }) => {
  const [file, setFile] = useState();

  const isValidPDF = (fileName) => {
    return fileName.toLowerCase().endsWith(".pdf");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file || !isValidPDF(file.name)) {
      console.error("Please select a valid PDF file.");
      return;
    }
    try {
      const data = new FormData();
      data.set("file", file);
      data.set("type", type);
      const res = await fetch("/api/file", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error(await res.text());
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="flex flex-col w-[90%] bg-white rounded-md overflow-hidden shadow-md mx-auto">
      <div className="bg-primary text-white text-lg font-semibold text-center py-2">
        {title}
      </div>
      <div className="flex flex-col space-y-4 p-4 text-center items-center justify-center">
        <div className="flex relative px-6 pt-4 pb-3 items-center justify-center w-[90%] bg-yellow-100 text-[#755118] font-medium rounded-md shadow-sm shadow-yellow-200">
          <IconFileInfo className="absolute inset-0 translate-x-1 translate-y-1" />
          <p>{children}</p>
        </div>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={onSubmit}
        >
          <input
            type="file"
            accept=".pdf"
            name="file"
            onChange={(e) => setFile(e.target.files?.[0])}
            className="flex items-center space-x-1 px-4 py-2 bg-secondary rounded-md text-white"
          />

          <button
            disabled={!file}
            type="submit"
            className="flex flex-row justify-center items-center gap-1 w-fit mt-4 bg-blue-500 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded"
          >
            <IconFileUpload />
            <p>Subir archivo</p>
          </button>
        </form>
      </div>
    </section>
  );
};

export default FileUpload;
