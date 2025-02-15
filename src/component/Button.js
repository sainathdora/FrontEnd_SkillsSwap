import { useEffect, useState } from "react";

export default function Button({ children, className, onClick }) {
  return (
    <>
      <button
        className={
          `bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 
            transition-all duration-300` + ` ${className}`
        }
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
