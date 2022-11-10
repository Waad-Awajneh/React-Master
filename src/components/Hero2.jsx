import react, { useState } from "react";
const Hero2 = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <section>
        <div className="w-full relative pb-10 px-6 xl:px-0">
          <img
            className="absolute w-full inset-0 h-full object-cover object-center"
            src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png"
            alt="we care family"
          />

          <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
            <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
              <img
                tabIndex="0"
                role="img"
                aria-label="people smiling"
                className="mx-auto"
                src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png"
                alt="people smiling"
              />
            </div>

            <div className="bg-white lg:mt-16 py-4 px-4 flex flex-col sm:flex-row justify-end sm:justify-between items-start sm:items-center shadow-lg rounded-lg">
              <div className="sm:flex items-center py-2">
                <div className="flex items-center">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg4.svg"
                    alt="icon"
                  />
                  <input
                    aria-label="Doctor name"
                    className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black"
                    placeholder="Doctor Name"
                  />
                </div>
              </div>
              <button
                role="button"
                aria-label="search"
                className="focus:bg-indigo-700 focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 mt-4 sm:mt-0 p-3 lg:-ml-8 rounded w-full sm:w-auto relative"
              >
                <img
                  className="absolute right-0 mr-2 sm:mr-auto sm:relative icon icon-tabler icon-tabler-search cursor-pointer"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg7.svg"
                  alt="search"
                />
                <input
                  aria-label="search"
                  className="sm:hidden border-b border-gray-300 w-full bg-transparent pr-6"
                />
              </button>
            </div>
            <div role="contentinfo" className="w-full lg:w-1/2 h-full">
              <p
                tabIndex="0"
                className="text-indigo-700 uppercase text-2xl mb-4"
              >
                Qusique Tincidun sapien
              </p>
              <h1
                tabIndex="0"
                className="text-indigo-700 text-4xl lg:text-6xl font-black mb-8"
              >
                All natural ingredients
              </h1>
              <p tabIndex="0" className="text-gray-800 font-regular mb-8">
                COMBINING SCIENCE WITH BEAUTY. L'Oreal Paris offerincare
                products is developed and rigorously tested with leading
                scientists. Indulge yourself in a luxurious and sensorial
                skincare experience. Cutting-edge innovations, proven by
                Science.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero2;
