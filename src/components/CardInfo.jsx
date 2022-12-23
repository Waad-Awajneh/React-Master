// import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import HomeGallery from "./HomeGallery";
import {
  DataReducer,
  getFollowingData,
  // getProfileData,
  getRandData,
} from "../Reducers/dataReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  getFollowing,
  getPosts,
  getProfileData,
} from "../Reducers/PostReducer";
import { useAuthUser } from "react-auth-kit";
import { useLocation } from "react-router-dom";
import Profile from "../views/Profile";

function CardInfo({ open }) {
  const location = useLocation();

  const auth = useAuthUser();

  const dispatch = useDispatch();

  const { followingPostData, postsData } = useSelector(
    (state) => state.PostsData
  );
  // console.log(profileData);
  useEffect(() => {
    if (open == "follow") {
      const config = {
        method: "get",
        url: `http://localhost:8000/api/following/${auth().user.user_id}`,
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          Authorization: `Bearer ${auth().token}`,
        },
      };
      // dispatch(getPosts());
      dispatch(getFollowing(config));

      // setData(data);
    } else if (open == "rand") {
      // axios

      //   .get("info.json")
      //   .then((res) => {
      //     // setData(res.data);
      //   })
      //   .catch(() => {
      //     alert("There was an error while retrieving the data");
      //   });
      dispatch(getPosts());
    }
    //  else if (open == "profile") {
    //   console.log(open);
    //   const config = {
    //     method: "get",
    //     url: "http://127.0.0.1:8000/api/profile",
    //     headers: {
    //       Accept: "application/vnd.api+json",
    //       "Content-Type": "application/vnd.api+json",
    //       Authorization: `Bearer ${auth().token}`,
    //     },
    //   };
    //   // axios
    //   //   .get("me.json")
    //   //   .then((res) => {
    //   //     // setData(res.data);
    //   //   })
    //   //   .catch(() => {
    //   //     alert("There was an error while retrieving the data");
    //   //   });
    //   dispatch(getProfileData(config));
    // }
  }, []);
  // if (
  //   postsData.length == 0
  //   //  &&
  //   // profileData.length == 0 &&
  //   // followingPostData.length == 0
  // )
  //   return "loading ....";
  return (
    <>
      {
        location.pathname == "/Home" || location.pathname == "/" ? (
          <HomeGallery data={postsData} profile={open} />
        ) : (
          <HomeGallery data={followingPostData} profile={open} />
        )
        // : (location.pathname == "/follow" ?
        //   <HomeGallery data={profileData} profile={open} />
        // )
      }
    </>
  );
}

export default CardInfo;
