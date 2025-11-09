import React from "react";
import btnIcon from "../assets/button-icon.png";
const InfoButton = ({ text }) => {
  return (
    <>
      <button className="text-sm text-orange-300 flex items-center gap-1 cursor-pointer hover:text-orange-400">
        {text}
        <img src={btnIcon} alt="button-icon" className="w-8 mt-[5px]" />
      </button>
    </>
  );
};

export default InfoButton;
