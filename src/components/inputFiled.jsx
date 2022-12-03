import React from "react";
import { MdFace } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { MdPhoneIphone } from "react-icons/md";

import { AiTwotoneMail } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
function InputFiled(props) {
  // console.log(props.validName);
  return (
    <div className="relative w-full mb-3">
      <span className=" w-full p-1 rounded-lg bg-white hover:bg-lnav flex items-center justify-center  duration-200 group">
        {props.icon == "RiLockPasswordFill" ? (
          <RiLockPasswordFill className="text-2xl group-hover:text-white m-2" />
        ) : props.icon == "AiTwotoneMail" ? (
          <AiTwotoneMail className="text-2xl group-hover:text-white m-2" />
        ) : props.icon == "MdFace" ? (
          <MdFace className="text-2xl group-hover:text-white m-2" />
        ) : props.icon == "HiLocationMarker" ? (
          <HiLocationMarker className="text-2xl group-hover:text-white m-2" />
        ) : props.icon == "MdPhoneIphone" ? (
          <MdPhoneIphone className="text-2xl group-hover:text-white m-2" />
        ) : (
          ""
        )}
        <input
          type={props.type}
          className={
            "border-0 px-2 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" +
            (props.validName == "none"
              ? " "
              : props.validName
              ? "bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
              : "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400")
          }
          placeholder={props.placeholder}
          style={{ transition: "all .15s ease" }}
          name={props.name}
          onChange={(e) => props.onChange(e)}
          // onFocus={() => props.onFocus(true)}
          // onBlur={() => props.onBlur(false)}
        />
      </span>
    </div>
  );
}

export default InputFiled;
