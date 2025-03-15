import React from "react";

const Button = ({ content }) => {
  return (
    <div className="relative  self-start inline-block">
      {/* Gradient shadow using ::before */}
      <div
        style={{
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
        className="bg-gradient-to-r p-[2px] from-indigo-700 to-purple-700 "
      >
        <button className="px-5 my-btn w-full uppercase outline-0 bg-white text-[#01AFFF] font-semibold py-3 ">
          <p className="relative z-50">{content}</p>
        </button>
      </div>

      {/* Gradient shadow overlay */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-700 to-purple-700 blur-lg opacity-50 "
        style={{
          top: "10px",
          left: "10px",
          right: "10px",
          bottom: "10px",
        }}
      ></div>
    </div>
  );
};

export default Button;
