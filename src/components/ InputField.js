import React from "react";

const InputField = ({ name, placeholder, type, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full border-2 border-inputGray placeholder:text-zinc-400 h-11 mb-5 pl-4 text-xs 
      focus:outline-none focus:ring-1 focus:ring-sky-500  rounded  "
    />
  );
};

export default InputField;
