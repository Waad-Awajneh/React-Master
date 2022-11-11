import React from "react";
import { MdFace } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import { AiTwotoneMail } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
function InputFiled(props) {
  return (
    <div className="relative w-full mb-3">
      <span className=" w-full p-1 rounded-lg bg-white hover:bg-lnav flex items-center justify-center  duration-200 group">
        {props.icon == "RiLockPasswordFill" ? (
          <RiLockPasswordFill className="text-2xl group-hover:text-white m-2" />
        ) : props.icon == "AiTwotoneMail" ? (
          <AiTwotoneMail className="text-2xl group-hover:text-white m-2" />
        ) : props.icon == "MdFace" ? (
          <MdFace className="text-2xl group-hover:text-white m-2" />
        ) : (
          ""
        )}
        <input
          type={props.type}
          className="border-0 px-2 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          placeholder={props.placeholder}
          style={{ transition: "all .15s ease" }}
        />
      </span>
    </div>
  );
}

export default InputFiled;
