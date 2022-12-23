import React, { useEffect } from "react";

import { BsHeartFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";
import YourImage from "./../assests/img/20.jpg";
import FooterComponent from "./Footer";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getSinglePost } from "../Reducers/PostReducer";
import { useAuthUser } from "react-auth-kit";
import Header from "./Header";

function SinglePost() {
  const { id } = useParams();
  const auth = useAuthUser();

  const dispatch = useDispatch();

  const { singlePost, postsData } = useSelector((state) => state.PostsData);
  console.log();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    if (postsData.length != 0) dispatch(getSinglePost(id));
  }, [postsData]);

  if (singlePost.length == 0) return console.log(singlePost);

  return (
    <>
      {/*<Navbar page={"profile"} />*/}
      <Header />
      <div
        className=" flex flex-wrap justify-evenly md:m-10 mt-6"
        style={{ width: "100vw", height: "75vh" }}
      >
        <div className="max-w-3xl flex flex-wrap">
          <div className="flex flex-wrap max-[480px]:sm:hover:scale-100 lg:flex-nowrap  md:flex-nowrap bg-white  w-full dark:bg-[#18191c] shadow-xl hover:shadow rounded-xl ">
            {/**hover:scale-105 duration-300 */}
            <div className="relative flex flex-warp w-75 scale-100">
              <img
                className="rounded-xl ms:shrink-0"
                src={singlePost.images[0]?.image}
                // src={`data:image/jpeg;base64,${singlePost.images[0]?.image}`}
                style={{ width: "100vw" }}
                alt="card image"
              />
              <div className="absolute bottom-3 left-4 flex items-center space-x-2">
                <span className="p-1.5 rounded-lg bg-white hover:bg-red-500 flex items-center justify-center w-fit group duration-200">
                  <BsHeartFill className="text-sm text-red-500 group-hover:text-white" />
                </span>
              </div>
            </div>

            <div className="p-4 relative w-full ">
              <div className="flex  justify-between">
                <div className="flex my-5 justify-evenly items-center">
                  <img
                    class="w-10 h-10 rounded-full"
                    src={singlePost.post_owner.profile_image}
                    alt="Rounded avatar"
                  />
                  <h2 className="m-3 font-semibold">
                    {singlePost.post_owner.name}
                  </h2>
                </div>
                <button className="py-1 px-3 my-5 rounded-lg w-24 text-white bg-lnav text-[0.6rem] duration-300 hover:-translate-y-0.5">
                  Save
                </button>
              </div>
              <h1 className="  dark:text-white  font-normal text-lg mt-7">
                {singlePost.title}
              </h1>
              <div class="flex my-2 text-sm font-semibold items-center text-gray-800">
                <div class="flex-grow border-t h-px mr-3"></div>
              </div>

              <small className="text-xs font-light text-primary dark:text-gray-400">
                {singlePost.post_content}
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
                    text-center h-7 text-white bg-lnav text-[0.6rem] duration-300 hover:-translate-y-0.5"
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
    </>
  );
}

export default SinglePost;
