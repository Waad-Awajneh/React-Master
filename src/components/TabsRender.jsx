import { Card } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardInfo from "./CardInfo";

const Tabs = ({ color, x }) => {
  const [openTab, setOpenTab] = useState(x);
  return (
    <>
      <div className="flex flex-wrap  mx-auto">
        <div className="w-full border-b border-gray-200 dark:border-gray-700 mb-4">
          <ul
            className="flex  list-none flex-wrap pt-3 pb-4 flex-row  -mb-px"
            role="tablist"
          >
            <li className=" mr-5 ml-5 last:mr-0 last:ml-0 text-center">
              <Link
                className={
                  " inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active" +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  // e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                to="/ForYou"
                role="tablist"
              >
                Profile
              </Link>
            </li>
            <li className=" mr-5 ml-5 last:mr-0 last:ml-0  text-center">
              <Link
                className={
                  " inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active" +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  // e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                to="/follow"
                role="tablist"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default function TabsRender(x) {
  return (
    <>
      <Tabs color="red" x={x} />
    </>
  );
}
