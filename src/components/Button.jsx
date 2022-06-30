import React from "react";

const Button = ({
  name,
  action,
  backgroundColor,
  type,
  width,
  height,
  marginBottom,
}) => {
  return (
    <button
      className={`rounded ${backgroundColor} text-white text-sm ${width} ${height} ${marginBottom}`}
      type={type}
      onClick={action}
    >
      {name}
    </button>
  );
};

export default Button;
