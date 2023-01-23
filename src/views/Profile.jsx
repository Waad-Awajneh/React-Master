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
import { AiOutlineComment } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { SiStackexchange } from "react-icons/si";

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
  }, [profilePic]);
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

      <main className="profile-page h-fit">
        <section className="relative block h-[500px] cover:h-[400px]">
          <img
            src={require("./../assests/img/1.jpg")} //cover_Img
            className="absolute top-0 w-full h-full bg-center cover:h-auto bg-cover"
            alt=" Logo"
          />

          {/* <div
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
          </div>*/}
        </section>
        <section className="relative py-16">
          <div className="container  flex mx-auto px-4">
            <div className="relative h-fit bg-[#ffffff80] flex basis-[35%] flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap  w-full">
                  <div className="w-full px-4 lg:order-2 flex  ">
                    {/*************************************************************** */}
                    <div className="relative ">
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
                        className="shadow-xl rounded-full h-auto align-middle border-none group-hover:block absolute -m-16 -ml-20 lg:-ml-16  left-[120px] top-[80px]
                          "
                        style={{ maxWidth: "160px", width:"160px" ,height:"160px"}}
                      />
                      <div
                        for="dropzone-file2"
                        className=" shadow-xl rounded-full h-auto  align-middle border-none absolute -m-16 -ml-20 lg:-ml-16  left-[120px] top-[80px]
                        bg-gray-600 opacity-60  
                        " style={{ maxWidth: "160px", width:"160px" ,height:"160px"}}
                      >
                        {<RiImageEditFill className=" absolute w-40 h-16 top-12" color="#fff" />}
                      </div>
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

       <div className="text-center  mt-[14rem] w-full">
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
           
                  </div>
                
                </div>   


















            <div >
                  <div className="w-full  px-4 ">
                    <div className="py-6  mt-32 sm:mt-0 flex flex-col items-center font-[Satisfy] ">
                      {/* <Button isClick={true} page={"profile"} name={"Connect"} /> */}
                      <button type="button" 
                               className=" text-white bg-lnav w-[11rem] h-[3.5rem]  font-[500] hover:bg-lb focus:outline-none focus:ring-4 focus:ring-pcol rounded-full text-sm px-2 py-2.5 text-center mr-2 m-4 dark:bg-pcol dark:hover:bg-blue-700 dark:focus:ring-pcol"
                               onClick={() => dispatch(handelOpenFormModel())}>Connect</button>
                      <button type="button" 
                               className="text-white bg-lnav  w-[11rem] h-[3.5rem]  font-[500] hover:bg-lb focus:outline-none focus:ring-4 focus:ring-pcol  rounded-full text-sm px-2 py-2.5 text-center mr-2 m-4 dark:bg-pcol dark:hover:bg-blue-700 dark:focus:ring-pcol"
                               onClick={() => dispatch(handelOpenPriceModel())}>Edit information </button>
                      {/* <Button page={"profile"} name={"ASK Price"} /> */}
                    </div>
                  </div>                        {/* 
element.style {
    font-size: 12px;
    font-weight: 900;
    line-height: 4px; */}
                  <div className="w-full p-4 lg:order-1">
                    <div className="flex items-center gap-8  justify-between align-middle  font-[Satisfy]  ">
                          <div className=" text-center flex  justify-center  w-full ">
                        {/* <span className="text-base w-[90px] text-[12px] font-[900]   text-left uppercase text-black "></span> */}
                        <span className="text-base text-center text-[12px] font-[900]  block uppercase w-[50px] tracking-wide text-black">
                        <SiStackexchange size={"25px"}  color={"#D9AD90"} />  {profileData.posts?.length}
                        </span>
                        
                      </div><div className="  text-center justify-center flex w-full ">
                       
                        {/* <span className="text-base text-[12px] font-[900]   w-[90px] text-left uppercase  text-black"></span> */}
                      <span className="text-base text-[12px] font-[900]   block uppercase tracking-wide w-[50px] text-black">
                      <HiUserGroup size={"25px"}  color={"#D9AD90"} />  {profileData.follower_count}
                        </span> 
                        </div>
                  
                      <div className=" text-center flex  justify-center  w-full ">
                        {/* <span className="text-base w-[90px] text-[12px] font-[900]   text-left uppercase  text-black "></span> */}
                        <span className="text-base   block text-[12px] font-[900] uppercase tracking-wide w-[50px] text-black">
     <AiOutlineComment size={"25px"} color={"#D9AD90"}  />        {profileData.comments == null
                            ? 0
                            : profileData.comments.length}
                        </span>
{console.log(profileData.comments.length)}
                      </div>
                    </div>
                  </div>
                  </div>
             
              </div>
              
            </div>
            <div className="mt-10 py-10  text-center basis-[95%]">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 overflow-hidden">
                      <HomeGallery
                        data={profileData.posts}
                        profile={"profile"}
                      />

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
