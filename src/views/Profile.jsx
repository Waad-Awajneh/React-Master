import React from "react";


import FooterComponent from "../components/Footer";

import Button from "../components/button";
import { useEffect } from "react";
import { getProfileData, setUpdate } from "../Reducers/PostReducer";
import { useDispatch, useSelector } from "react-redux";
import { useAuthUser } from "react-auth-kit";
import HomeGallery from "../components/HomeGallery";
import Header from "../components/Header";

import { RiImageEditFill } from "react-icons/ri";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { handelOpenFormModel, handelOpenPriceModel } from "../Reducers/modalReducer";

export default function Profile() {
  const auth = useAuthUser();
  const { profileData, update } = useSelector((state) => state.PostsData);
  const dispatch = useDispatch();

  /******************************************************* */
  const [profilePic, setProfilePic] = useState({
    profile_Img: undefined,
  });

  useEffect(() => {
    if (profilePic.profile_Img != undefined) {

      handleEdit();
    }
  }, [profilePic,update]);
  const handleEdit = () => {
    if (profilePic.profile_Img == "") return null;

    var FormData = require("form-data");
    var data = new FormData();
    data.append("profile_Img", profilePic.profile_Img);

    var config = {
      method: "post",
      url: "http://localhost:8000/api/editProfilePic",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/vnd.api+json",
        Authorization: `Bearer ${auth().token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {

        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: response.data.message,
        });


        dispatch(setUpdate());

      })
      .catch(function (error) {
        console.log(error);
      });
  };

  /********************************************************** */

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/profile",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: `Bearer ${auth().token}`,
      },
    };

    dispatch(getProfileData(config));
  }, [update]);


  if (profileData.length == 0) return "loading ....";
  return (
    <>
      <Header />

      <main className="profile-page">
        <section className="relative block h-[500px] cover:h-[400px]">
          <img
            src={require("./../assests/img/1.jpg")} //cover_Img
            className="absolute top-0 w-full h-full bg-center cover:h-auto bg-cover"
            alt=" Logo"
          />

          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"

          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    {/*************************************************************** */}
                    <div className="relative">
                      <img
                        alt="..."
                        // src={require("../assests/img/pro.jpg")} //profile_Img
                        src={
                          profileData.profile_Img != null
                            ? `data:image/jpeg;base64,${profileData.profile_Img}`
                            : profileData.gender == "Female"
                            ? "https://media.istockphoto.com/vectors/default-placeholder-profile-icon-vector-id666545148?k=6&m=666545148&s=170667a&w=0&h=ycJvJHz6ZMWsErum0XpjVabgZsP8dib2feSIJ5dIWYk="
                            : "https://th.bing.com/th/id/OIP.P07J6hJbgyuIm-DlaSAlLQAAAA?pid=ImgDet&rs=1"
                        }
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "160px" ,height:"160px"}}
                      />
                      <label
                        for="dropzone-file2"
                        className="mt-12 ml-6 absolute "
                      >
                        {<RiImageEditFill className=" w-6 h-8" />}
                      </label>
                      <input
                        id="dropzone-file2"
                        type="file"
                        class="hidden"
                        onChange={(e) => {
                          setProfilePic((pervs) => ({
                            ...pervs,
                            profile_Img: e.target.files[0],
                          }));
                        }}
                      />
                    </div>
                    {/*************************************************************** */}
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      {/* <Button isClick={true} page={"profile"} name={"Connect"} /> */}
                      <button type="button" 
                               className="text-white bg-lnav w-28 h-10 hover:bg-lb focus:outline-none focus:ring-4 focus:ring-pcol font-medium rounded-full text-sm px-2 py-2.5 text-center mr-2 m-4 dark:bg-pcol dark:hover:bg-blue-700 dark:focus:ring-pcol"
                               onClick={() => dispatch(handelOpenFormModel())}>Connect</button>
                      <button type="button" 
                               className="text-white bg-lnav w-28 h-10 hover:bg-lb focus:outline-none focus:ring-4 focus:ring-pcol font-medium rounded-full text-sm px-2 py-2.5 text-center mr-2 m-4 dark:bg-pcol dark:hover:bg-blue-700 dark:focus:ring-pcol"
                               onClick={() => dispatch(handelOpenPriceModel())}>Ask Price </button>
                      {/* <Button page={"profile"} name={"ASK Price"} /> */}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {profileData.follower_count}
                        </span>
                        <span className="text-sm text-gray-500">followers</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {profileData.posts?.length}
                        </span>
                        <span className="text-sm text-gray-500">Posts</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {profileData.Comments == null
                            ? 0
                            : profileData.Comments.length}
                        </span>
                        <span className="text-sm text-gray-500">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                    {profileData.full_name.charAt(0).toUpperCase() +
                      profileData.full_name.slice(1)}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    {profileData.major}
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    {profileData.bio}
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    {profileData.address}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4 overflow-hidden">
                      <HomeGallery
                        data={profileData.posts}
                        profile={"profile"}
                      />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
}
