import React from "react";

const MaintenanceNotice = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-48">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-barrier-block"
        width="150"
        height="150"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#adb5bd"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 7m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"></path>
        <path d="M7 16v4"></path>
        <path d="M7.5 16l9 -9"></path>
        <path d="M13.5 16l6.5 -6.5"></path>
        <path d="M4 13.5l6.5 -6.5"></path>
        <path d="M17 16v4"></path>
        <path d="M5 20h4"></path>
        <path d="M15 20h4"></path>
        <path d="M17 7v-2"></path>
        <path d="M7 7v-2"></path>
      </svg>

      <p className="text-5xl font-bold text-[#adb5bd] text-center">
        Esta página está en construcción
      </p>
    </section>
  );
};

export default MaintenanceNotice;
