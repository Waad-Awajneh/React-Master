import React from "react";

import { BsHeartFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";
import YourImage from "./e.jpg";

function AddPost() {
  return (
    <div className=" flex flex-wrap justify-evenly md:m-10">
      <div className="max-w-3xl flex flex-wrap">
        <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap bg-white  w-full dark:bg-[#18191c] shadow-xl hover:shadow rounded-xl hover:scale-105 duration-300">
          <div class="flex justify-center items-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col justify-center items-center pt-5 pb-6">
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
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>

          <div className="p-4 relative w-full ">
            <div className="flex  justify-between">
              <div className="flex my-5 justify-evenly items-center">
                <img
                  class="w-10 h-10 rounded-full"
                  src={require("./e.jpg")}
                  alt="Rounded avatar"
                />
                <h2 className="m-3 font-semibold">User Name</h2>
              </div>
              <button className="py-1 px-3 my-5 rounded-lg w-24 text-white bg-[#ff4757] text-[0.6rem] duration-300 hover:-translate-y-0.5">
                Save
              </button>
            </div>

            <div class="flex my-2 text-sm font-semibold items-center text-gray-800">
              <div class="flex-grow border-t h-px mr-3"></div>
            </div>

            <small className="text-xs font-light text-primary dark:text-gray-400">
              Its all about moments ❤️ Even they didn’t ask for the Short
              cinematic I couldn’t not to capture these moments Venue : Kan
              Zaman Videography & photography @dawwasd Planner @farhha_events
            </small>
            <div>
              <h1 className="font=xl font-medium my-4 mx-2 ">Comments</h1>
            </div>
            <div className="relative group">
              <label
                className="absolute top-0 left-0 w-full h-full flex items-center pl-[10px] duration-200 text-sm group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-full group-focus-within:pl-0"
                htmlFor="label"
              >
                Add Comments
              </label>
              <button
                className="absolute top-0 right-0 flex m-4 mx-4 pl-[17px] rounded-lg text-sm items-center w-14
                    text-center h-7 text-white bg-[#ff4757] text-[0.6rem] duration-300 hover:-translate-y-0.5"
              >
                Save
              </button>
              <textarea
                id="label"
                className="rounded-xl w-[15rem] md:w-[25rem] bg-gray-200 outline-none py-3 px-4 text-xs"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
