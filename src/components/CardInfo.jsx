// import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import HomeGallery from "./HomeGallery";
import {
  DataReducer,
  getFollowingData,
  getProfileData,
  getRandData,
} from "../Reducers/dataReducer";
import { useDispatch, useSelector } from "react-redux";
import { getFollowing, getPosts } from "../Reducers/PostReducer";
import { useAuthUser } from "react-auth-kit";

function CardInfo(open) {
  // const [data, setData] = useState([]);
  const auth = useAuthUser();
  console.log(open);
  const openData = open.open;
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.Data.data);
  const data1 = useSelector((state) => state.PostsData.postsData);
  console.log(data1);
  useEffect(() => {
    if (openData == "follow") {
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
    } else if (openData == "rand") {
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
    //  else if (openData == "profile") {
    //   // axios
    //   //   .get("me.json")
    //   //   .then((res) => {
    //   //     // setData(res.data);
    //   //   })
    //   //   .catch(() => {
    //   //     alert("There was an error while retrieving the data");
    //   //   });
    //   dispatch(getProfileData());
    // }
  }, []);
  if (data1.length == 0) return "loading ....";
  return <>{<HomeGallery data={data1} profile={openData} />}</>;
}

export default CardInfo;
