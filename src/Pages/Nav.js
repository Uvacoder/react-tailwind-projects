import React from "react";
import "./TodoProject/body.css";
export default function Nav() {

  

  return (
    <>
      <a
        href="/."
        className="fixed bottom-0 right-0 mb-4 mr-2 sm:mr-6 sm:mb-6 bg-slate-700 w-16 h-16 pt-[12px] pl-[16px] rounded-full shadow-lg text-slate-200 hover:bg-slate-600 hover:shadow-xl hover:shadow-slate-700 duration-200 ease-in hover:scale-105 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </a>

    
    </>
  );
}
