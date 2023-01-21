import React from "react";
import Button from "./../button";
import { Link } from "react-router-dom";
function SectionFour() {
  return (
    <div className="xl:flex xl:justify-end pt-10">
      <div className="container lg:mx-auto">
        <div className="block xl:flex justify-between xl:items-center lg:items-center md:flex">
          <div className="w-11/12 xl:w-4/12 mx-auto xl:mx-0 md:w-5/12">
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-lnav text-center lg:text-left">
              Sign up to share and find Awesome ideas
            </h1>

            <div className="w-full flex justify-center pt-5 lg:justify-start">
              <Link to="/signUp">
                <Button color={"lnav"} name={"Sign up"} />
              </Link>
            </div>
          </div>
          <div className="w-11/12 xl:w-5/12 mx-5 mt-8 xl:mt-0 flex justify-end md:w-5/12  bg-lb relative py-20">
            <div className="h-4/5 w-4/5 mx-3">
              <img
                tabIndex="0"
                role="img"
                aria-label="people smiling"
                className="mx-auto  w-full overflow-hidden object-cover relative z-10 xl:-ml-56 lg:-ml-32 sm:-ml-20 -ml-12 md:-ml-20 rounded"
                src={require("./../../assests/img/5.jpg")}
                alt="people smiling"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
