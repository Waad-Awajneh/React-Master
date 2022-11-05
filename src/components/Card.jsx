import React from "react";

import { BsHeartFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";
import YourImage from "./e.jpg";

function Card(cards) {
  // console.log(cards.cards);
  const cardInfo = cards.cards;
  return (
    <>
      <div className="my-5 bg-white dark:bg-[#18191c] shadow-xl hover:shadow duration-200 rounded-xl">
        <div className="relative w-full h-72 rounded-xl">
          <img
            className="rounded-xl hover:scale-105 duration-300 h-full"
            src={cardInfo.image}
            alt={cardInfo.id}
          />
          <div className="absolute bottom-3 left-4 flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-white hover:bg-red-500 flex items-center justify-center w-fit duration-200 group">
              <BsHeartFill className="text-sm text-red-500 group-hover:text-white" />
            </span>
            <span className="p-1.5 rounded-lg bg-white hover:bg-blue-500 flex items-center justify-center w-fit duration-200 space-x-1 group">
              <RiMessage3Fill className="text-sm text-blue-500 group-hover:text-white" />
              <small className="text-blue-500 group-hover:text-white">12</small>
            </span>
          </div>
        </div>

        <div className="p-4 flex flex-wrap">
          <img
            class="p-1 mr-3 w-8 h-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt=""
          />
          <h5 className="text-primary dark:text-white font-medium text-l">
            {cardInfo.name}
          </h5>
          <small className=" p-2 text-xs font-light text-primary dark:text-gray-400">
            {cardInfo.info}
          </small>
        </div>
      </div>
    </>
  );
}

export default Card;
