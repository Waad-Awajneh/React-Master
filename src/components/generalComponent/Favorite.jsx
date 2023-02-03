import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { BsHeartFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getFavorite, getFavoritePostsId } from "../../Reducers/UserReducer";

export const Favorite = ({post,setUpdate,update}) => {
    const { favoritePostsId } = useSelector((state) => state.UserData);
    const auth = useAuthUser();
    const isAuthenticated = useIsAuthenticated();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getFavoritePostsId())
     } ,[update])
  
    const HandelAddToFavorite = (id) => {
      const config = {
        method: "post",
        url: `http://localhost:8000/api/addFavorite/${id}`,
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${auth().token}`,
        },
      };
  
      axios(config)
        .then(function (res) {
  
          const Toast = Swal.mixin({
            toast: true,
            position: "top-right",
            iconColor: "green",
            customClass: {
              popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          Toast.fire({
            icon: "success",
            color: "black",
            title: res.data,
          });
         
          const config = {
            method: "get",
            url: "http://localhost:8000/api/getFavorite",
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json",
              Authorization: `Bearer ${auth().token}`,
            },
          };
        
          dispatch(getFavorite(config));
          dispatch(getFavoritePostsId()) 
           setUpdate(!update)
           
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    const HandelRemoveFromFavorite = (id) => {
      
      const config = {
        method: "delete",
        url: `http://localhost:8000/api/deleteFavorite/${id}`,
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${auth().token}`,
        },
      };
      axios(config)
        .then(function (res) {
         
  
          const config = {
            method: "get",
            url: "http://localhost:8000/api/getFavorite",
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json",
              Authorization: `Bearer ${auth().token}`,
            },
          };
  
          dispatch(getFavorite(config));
          dispatch(getFavoritePostsId())
          setUpdate(!update)
     

        })
        .catch(function (error) {
          console.log(error);
        });
    };
    
  return (

    <div className="absolute bottom-3 left-4 flex items-center space-x-2">    {    console.log("render")
}
    <span
      className={
        (favoritePostsId.includes(post.post_id)
          ? "bg-red-500 "
          : " bg-white ") +
        "p-1.5 rounded-lg  flex items-center justify-center w-fit duration-200 group   "
      }
      onClick={() => {
        favoritePostsId.includes(post.post_id)
          ? HandelRemoveFromFavorite(post.post_id)
          : HandelAddToFavorite(post.post_id);
      }}
    >
      <BsHeartFill
        className={
          (favoritePostsId.includes(post.post_id)
            ? " text-white "
            : " text-red-500 ") + " text-sm   "
        }
      />
    </span>
    <Link to={`/SinglePost/${post.post_id}`}>
      <span className="p-1.5 rounded-lg bg-white hover:bg-blue-500 flex items-center justify-center w-fit duration-200 space-x-1 group">
        <RiMessage3Fill className="text-sm text-blue-500 group-hover:text-white" />
        <small className="text-blue-500 group-hover:text-white">
          {post.comments.length}
        </small>
      </span>
    </Link>
  </div>
  );
};