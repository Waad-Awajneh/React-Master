import React from "react";

import { BsHeartFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";
import YourImage from "./e.jpg";
import Navbar from "./Navbar";
function AddPost() {
  return (
    <>
      {<Navbar page={"profile"} />}

      <div className=" flex flex-wrap justify-evenly md:m-10 h-full">
        <div className="max-w-3xl max-h-fit flex flex-wrap">
          <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap bg-white  w-full dark:bg-[#18191c] shadow-xl hover:shadow rounded-xl hover:scale-105 duration-300">
            <div class="flex justify-center items-center m-7  w-full">
              <label
                for="dropzone-file"
                class="flex flex-col justify-center items-center w-full h-96 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col justify-center items-center p-5">
                  <svg
                    aria-hidden="true"
                    class="mb-3 w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>

            <div className="p-4 relative w-full h-full ">
              <div class="relative z-0 mb-6 w-full group m-5">
                <input
                  type="text"
                  name="title"
                  class="block py-2.5 px-0 w-96 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="title"
                  class="absolute text-lg  font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Add Your Title
                </label>
              </div>
              <div className="flex  justify-between">
                <div className="flex my-2  mb-10 justify-evenly items-center">
                  <img
                    class="w-10 h-10 rounded-full"
                    src={require("./e.jpg")}
                    alt="Rounded avatar"
                  />
                  <h2 className="m-3 font-semibold">User Name</h2>
                </div>
              </div>

              <form className="relative flex-wrap group flex w-full h-56">
                <label
                  className="absolute top-10 left-0 items-center flex  pl-[10px] duration-200 text-sm group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-full group-focus-within:pl-0"
                  htmlFor="label"
                >
                  Tell everyone what your Post is about
                </label>

                <textarea
                  id="label"
                  className="rounded-xl w-[15rem] md:w-[25rem]  h-[5rem] md:h-[6rem] bg-gray-200 outline-none py-3 px-4 text-xs"
                  type="text"
                />

                <button
                  className="flex flex-wrap pl-[17px] rounded-lg text-sm items-center w-14 right-7 absolute bottom-20
                    text-center h-7 text-white bg-[#ff4757] text-[0.6rem] duration-300 hover:-translate-y-0.5"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPost;
