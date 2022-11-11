import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";

export default function Team() {
  return (
    <div>
      <div className="container lg:mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center py-12 mx-4 md:mx-6 ">
          <div className="lg:w-1/2 flex flex-warp flex-col justify-center items-center lg:items-start pt-24">
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-lnav text-center lg:text-left">
              Are You A wedding Planner ?
            </h1>
            <p className=" leading-normal text-gray-600 mt-4 md:w-8/12 lg:w-11/12 text-center lg:text-left">
              Are you ready to take your wedding business to new horizons?
              <br />
              <span className=" text-pcol font-bold">Advertise on WED</span>
              <br /> Bring your business to a new level.
              <br />
              <span className=" text-pcol font-bold">
                Reach today’s couples and book more weddings.
              </span>
            </p>
            <div className="w-full flex justify-center  pt-5 lg:justify-start">
              <Link to="/signUp">
                <Button color={"lnav"} name={"Sign up"} />
              </Link>
            </div>
          </div>
          <div className="pt-32 w-full lg:w-1/2 sm:mt-3 lg:pr-10 xl:pr-0 ">
            <img
              tabIndex="0"
              role="img"
              aria-label="people smiling"
              className="mx-auto rounded-lg h-auto"
              src={require("./../assests/img/10.jpg")}
              alt="people smiling"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
