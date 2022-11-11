import react, { useState } from "react";

import { BsPerson } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <div>
        <section>
          <div className="w-full relative pb-10 px-6 xl:px-0">
            {/*<img
              className="absolute w-full inset-0 h-full object-cover object-center"
              src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png"
            />*/}

            <div className="pt-32 lg:flex items-center relative z-10 container lg:mx-auto">
              <div className="w-full lg:w-1/2  lg:pr-10 xl:pr-0 ">
                <img
                  tabIndex="0"
                  role="img"
                  aria-label="people smiling"
                  className="mx-auto rounded-lg h-auto"
                  src={require("./../assests/img/12.jpg")}
                  alt="people smiling"
                />
              </div>
              <div role="contentinfo" className="w-full lg:w-1/2 h-full">
                <p> </p>
                <h1
                  tabIndex="0"
                  className="text-lnav text-4xl lg:text-6xl font-black mb-8"
                >
                  Let's find your wedding team
                </h1>
                <p tabIndex="0" className="text-pcol font-regular mb-8">
                  Search over 250,000 professionals with reviews, pricing,
                  availability, and more
                </p>
                <div className="bg-white lg:mt-16 py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center shadow-lg rounded-lg">
                  <div className="sm:flex items-center py-2">
                    <div className="flex items-center">
                      <BsPerson />
                      <input
                        aria-label="Wedding Planner name"
                        className=" w-96  text-gray-800 ml-2.5 placeholder-lnav"
                        placeholder="Wedding Planner Name"
                      />
                    </div>
                  </div>
                  <button
                    role="button"
                    aria-label="search"
                    className="focus:bg-lnav focus:ring-pcol focus:ring-2 focus:ring-offset-2 text-white bg-lnav hover:bg-pcol mt-4 sm:mt-0 p-3 lg:-ml-8 rounded w-full sm:w-auto relative"
                  >
                    <img
                      className="absolute right-0 mr-2 sm:mr-auto sm:relative icon icon-tabler icon-tabler-search cursor-pointer"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg7.svg"
                      alt="search"
                    />
                    <input
                      aria-label="search"
                      className="sm:hidden w-full bg-transparent pr-6"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Hero;
