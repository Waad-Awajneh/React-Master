import { Card } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardInfo from "./CardInfo";
import { useLocation } from "react-router-dom";

const Tabs = ({ color }) => {
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <>
      <div className="flex flex-wrap  mx-auto">
        <div className=" border-b   border-gray-200 dark:border-gray-700 mb-4">
          <ul
            className="flex  list-none flex-wrap pt-3 pb-4 flex-row -mb-px"
            role="tablist"
          >
            <li className=" w-40 h-30 mx-5  last:mr-0 last:ml-0 text-center">
              <Link
                className={
                  "  w-40 h-30 mr-3 ml-3 inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active" +
                  (location.pathname == "/Home" || location.pathname == "/"
                    ? "text-white bg-" + color + " "
                    : "text-" + color + " bg-white")
                }
                data-toggle="tab"
                to="/Home"
                role="tablist"
              >
                For You
              </Link>
            </li>
            <li className="  w-40 h-30 mx-5 last:mr-0 last:ml-0  text-center">
              <Link
                className={
                  " w-40 h-30 mr-3 ml-3 flex items-center text-gray-500 hover:text-gray-600  hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active" +
                  (location.pathname === "/follow"
                    ? "text-white bg-" + color + ""
                    : "text-" + color + " bg-white")
                }
                data-toggle="tab"
                to="/follow"
                role="tablist"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
                Following
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="lb" />
    </>
  );
}
