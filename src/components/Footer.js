import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bottom-0 absolute my-2 rounded-lg  border shadow-lg w-full flex justify-between items-center px-4 ">
      <div>
        <h1 className="cursor-pointer text-[40px] font-extrabold">
          myCrypto<span className="text-blue-700">Tracker</span>
        </h1>
      </div>
      <div className="flex gap-2 text-[25px]">
        <FaWhatsapp className="text-green-700" />
        <FaFacebook className="text-blue-800" />
        <FaYoutube className="text-red-700" />
        <FaGithub />
      </div>
    </div>
  );
};

export default Footer;
