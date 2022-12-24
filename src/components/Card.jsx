import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useAuthUser } from "react-auth-kit";

import { BsHeartFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getFavorite } from "../Reducers/UserReducer";
import YourImage from "./e.jpg";
import { ReadMore } from "./generalComponent/ReadMore";

function Card(cards) {
  const cardInfo = cards.cards;
  const auth = useAuthUser();
  const { favoritePostsId } = useSelector((state) => state.UserData);

  const dispatch = useDispatch();
  // console.log(favoritePostsId);
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
        console.log(res.data);
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
        //  useEffect(() => {
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
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const HandelRemoveFromFavorite = (id) => {
    // console.log(id, "remove from");
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
        console.log(res.data);
        // const Toast = Swal.mixin({
        //   toast: true,
        //   position: "top-right",
        //   iconColor: "green",
        //   customClass: {
        //     popup: "colored-toast",
        //   },
        //   showConfirmButton: false,
        //   timer: 1500,
        //   timerProgressBar: true,
        // });
        // Toast.fire({
        //   icon: "success",
        //   color: "black",
        //   title: res.data,
        // });
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
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="my-5 bg-white dark:bg-[#18191c] shadow-xl hover:shadow duration-200 rounded-xl">
        <div className="relative w-full h-72 rounded-xl">
          <Link to={`/SinglePost/${cardInfo.post_id}`}>
            <img
              className="rounded-xl hover:scale-105 w-full duration-300 h-full"
              // src={`data:image/jpeg;base64,${cardInfo.images[0].image}`}
              src={
                cardInfo.images.length != 0
                  ? cardInfo.images[0].image
                  : "https://i.pinimg.com/564x/4f/5e/58/4f5e58105db88213e0b0c7cfe169467b.jpg"
              }
              alt={cardInfo.post_id}
            />
          </Link>
          <div className="absolute bottom-3 left-4 flex items-center space-x-2">
            <span
              className={
                (favoritePostsId.includes(cardInfo.post_id)
                  ? "bg-red-500 "
                  : " bg-white ") +
                "p-1.5 rounded-lg  flex items-center justify-center w-fit duration-200 group   "
              }
              onClick={() => {
                favoritePostsId.includes(cardInfo.post_id)
                  ? HandelRemoveFromFavorite(cardInfo.post_id)
                  : HandelAddToFavorite(cardInfo.post_id);
              }}
            >
              <BsHeartFill
                className={
                  (favoritePostsId.includes(cardInfo.post_id)
                    ? " text-white "
                    : " text-red-500 ") + " text-sm   "
                }
              />
            </span>
            <Link to={`/SinglePost/${cardInfo.post_id}`}>
              <span className="p-1.5 rounded-lg bg-white hover:bg-blue-500 flex items-center justify-center w-fit duration-200 space-x-1 group">
                <RiMessage3Fill className="text-sm text-blue-500 group-hover:text-white" />
                <small className="text-blue-500 group-hover:text-white">
                  {cardInfo.comments.length}
                </small>
              </span>
            </Link>
          </div>
        </div>

        <div className="p-4 flex flex-wrap">
          <img
            className="p-1 mr-3 w-8 h-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={cardInfo.post_owner.profile_image}
            alt=""
          />
          <h5 className="text-primary dark:text-white font-medium text-l">
            {cardInfo.post_owner.name}
          </h5>
          <small className=" p-2 text-xs font-light text-primary dark:text-gray-400">
            <ReadMore>{cardInfo.post_content}</ReadMore>
          </small>
        </div>
      </div>
    </>
  );
}

export default Card;

/**
 * import React from "react";

import { BsHeartFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import YourImage from "./e.jpg";

function Card(cards) {
  // console.log(cards.cards);
  const cardInfo = cards.cards;
  return (
    <>
      <Link to={`/SinglePost/${cardInfo.id}`}>
        <div className="my-5 bg-white dark:bg-[#18191c] shadow-xl hover:shadow duration-200 rounded-xl">
          <div className="relative w-full h-72 rounded-xl">
            <img
              className="rounded-xl hover:scale-105 w-full duration-300 h-full"
              src={cardInfo.image}
              alt={cardInfo.id}
            />
            <div className="absolute bottom-3 left-4 flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-white hover:bg-red-500 flex items-center justify-center w-fit duration-200 group">
                <BsHeartFill className="text-sm text-red-500 group-hover:text-white" />
              </span>
              <span className="p-1.5 rounded-lg bg-white hover:bg-blue-500 flex items-center justify-center w-fit duration-200 space-x-1 group">
                <RiMessage3Fill className="text-sm text-blue-500 group-hover:text-white" />
                <small className="text-blue-500 group-hover:text-white">
                  12
                </small>
              </span>
            </div>
          </div>

          <div className="p-4 flex flex-wrap">
            <img
              className="p-1 mr-3 w-8 h-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt=""
            />
            <h5 className="text-primary dark:text-white font-medium text-l">
              {cardInfo.name}
            </h5>
            <small className=" p-2 text-xs font-light text-primary dark:text-gray-400">
              {cardInfo.info}
            </small>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;

 */
