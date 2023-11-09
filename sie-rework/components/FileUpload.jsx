import { IconFileInfo, IconFileUpload } from "@tabler/icons-react";
import React from "react";

const FileUpload = ({ title, children }) => {
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
        <button className="flex items-center space-x-1 px-4 py-2 bg-secondary rounded-md text-white">
          <IconFileUpload />
          <p>Subir archivo</p>
        </button>
      </div>
    </section>
  );
};

export default FileUpload;
