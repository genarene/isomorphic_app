import React from "react";
import Button from "./Button";

const CheckBox = ({ type, inputTitle }) => {
  return (
    <div className="items-center">
      <input
        type={type}
        className="w-3.5 h-3.5 text-accentBlue border-2 border-gray-300 focus:ring-0"
      />
      <label className="ml-1.5 text-xs text-center text-slate-800">
        {inputTitle}
      </label>
    </div>
  );
};

export default CheckBox;
