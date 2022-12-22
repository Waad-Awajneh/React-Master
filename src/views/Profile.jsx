import React from "react";

import Navbar from "../components/Navbar";
import FooterComponent from "../components/Footer";
import CardInfo from "../components/CardInfo";
import Button from "../components/button";
import { useEffect } from "react";
import { getProfileData } from "../Reducers/PostReducer";
import { useDispatch, useSelector } from "react-redux";
import { useAuthUser } from "react-auth-kit";
import HomeGallery from "../components/HomeGallery";
export default function Profile() {
  const auth = useAuthUser();
  const { profileData } = useSelector((state) => state.PostsData);
  const dispatch = useDispatch();

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
  }, []);
  console.log(profileData);
  return (
    <>
      {<Navbar page={"profile"} />}
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <img
            src={require("./../assests/img/1.jpg")} //cover_Img
            className="absolute top-0 w-full h-full bg-center bg-cover"
            alt=" Logo"
          />

          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
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
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("../assests/img/pro.jpg")} //profile_Img
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <Button page={"profile"} name={"Connect"} />
                      <Button page={"profile"} name={"ASK Price"} />
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
                    {profileData.full_name}
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
                      <HomeGallery data={profileData} profile={"profile"} />
                      {/*<CardInfo open={"profile"} />*/}
                      {/* <a
                        href="#pablo"
                        className="font-normal text-pink-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                     </a>*/}
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
