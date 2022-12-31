import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";

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
  const isAuthenticated = useIsAuthenticated();
  // const [videoUrl, setVideoUrl] = useState(null);
  const { favoritePostsId } = useSelector((state) => state.UserData);

  const dispatch = useDispatch();
  console.log(cardInfo);
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
        // console.log(res.data);
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
        // console.log(res.data);

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
  // {
  //   if (cardInfo.images.length != 0)
  //     // console.log("http://localhost:8000/" + cardInfo.images[0].image);
  // }
  return (
    <>
      <div className="my-5 bg-white dark:bg-[#18191c] shadow-xl h-fit  hover:shadow duration-200 rounded-xl">
        <div className="relative w-full h-72 cover:h-[20rem] rounded-xl">
          <Link to={`/SinglePost/${cardInfo.post_id}`}>
            {cardInfo.images.length != 0 ? (
              <img
                className="rounded-xl hover:scale-105 w-full duration-300 h-full"
                src={`data:image/jpeg;base64,${cardInfo.images[0].image}`}
                // src={
                //   cardInfo.images.length != 0
                //     ? "http://localhost:8000/ReactMaster_new/Laravel-master/storage/app/" +
                //       cardInfo.images[0].image
                //     : "https://i.pinimg.com/564x/4f/5e/58/4f5e58105db88213e0b0c7cfe169467b.jpg"
                // }
                alt={cardInfo.post_id}
              />
            ) : (
              // <video
              //   // src={"http://localhost:8000/" + cardInfo.videos[0]?.videoPath}
              //   src={
              //     "C:/Users/user/Desktop/React Master_new/Laravel-master/storage/appvideos/7PvFAIRqT9BP9Ny4IJ3DTJ9Q4qcIXdVtLbz3Nts1.mp4"
              //   }
              //   controls
              // />
              <video
                src={URL.createObjectURL(cardInfo.videos[0]?.videoPath.blob())}
                controls
              />
            )}
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

        <div className="p-4 flex flex-wrap items-center">
          <img
            className="p-1 mr-3 w-8 h-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={
              cardInfo.post_owner.profile_image != null
                ? `data:image/jpeg;base64,${cardInfo.post_owner.profile_image}`
                : cardInfo.post_owner.gender == "Female"
                ? "https://media.istockphoto.com/vectors/default-placeholder-profile-icon-vector-id666545148?k=6&m=666545148&s=170667a&w=0&h=ycJvJHz6ZMWsErum0XpjVabgZsP8dib2feSIJ5dIWYk="
                : "https://th.bing.com/th/id/OIP.P07J6hJbgyuIm-DlaSAlLQAAAA?pid=ImgDet&rs=1"
            }
            alt=""
          />
          {isAuthenticated() &&
          cardInfo.post_owner.id == auth().user.user_id ? (
            <Link to={`/profile`}>
              <h5 className="text-primary dark:text-white font-medium text-l">
                {cardInfo.post_owner.name}
              </h5>
            </Link>
          ) : (
            <Link to={`/profile/${cardInfo.post_owner.id}`}>
              <h5 className="text-primary dark:text-white font-medium text-l">
                {cardInfo.post_owner.name}
              </h5>
            </Link>
          )}

          <small className=" p-2 text-xs block w-full font-light text-primary dark:text-gray-400">
            {/* {cardInfo.post_content.length < 50 ? (*/}
            {cardInfo.title.length < 50 ? (
              // cardInfo.post_content
              cardInfo.title
            ) : (
              // <ReadMore>{cardInfo.post_content}</ReadMore>
              <ReadMore>{cardInfo.title}</ReadMore>
            )}
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
