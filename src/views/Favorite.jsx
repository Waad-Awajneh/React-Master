import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthUser } from "react-auth-kit";
import { BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import FooterComponent from "../components/Footer";
import Header from "../components/Header";
import { getFavoritePosts, getPosts } from "../Reducers/PostReducer";
import { getFavorite, getFavoritePostsId } from "../Reducers/UserReducer";

function Favorite(props) {
  const auth = useAuthUser();

  const dispatch = useDispatch();

  const { favoritePostsData, favoritePostsId } = useSelector(
    (state) => state.UserData
  );
  const { favoritePosts, postsData } = useSelector((state) => state.PostsData);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (favoritePostsData.length != 0) {
      dispatch(getPosts());
    }
  }, [favoritePostsData]);

  useEffect(() => {
    if (postsData.length != 0) {
      dispatch(getFavoritePostsId());
    }
  }, [postsData]);

  useEffect(() => {
    if (favoritePostsId.length != 0) {
      dispatch(getFavoritePosts(favoritePostsId));
    }
  }, [favoritePostsId]);

  if (favoritePosts.length == 0) return "loading ....";
  return (
    <>
      <Header />
      <h1 className="m-16 font-serif flex  font-medium text-center text-black px-5 w-fit text-4xl">
        <BsHeartFill className="mx-2 text-red-600" />{" "}
        {auth().user.full_name.charAt(0).toUpperCase() +
          auth().user.full_name.slice(1)}{" "}
        Favorite
      </h1>
      <div className="m-5 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {favoritePosts?.map((cardinfo) => (
          <Card key={cardinfo.id} cards={cardinfo} />
        ))}
      </div>
      <FooterComponent />
    </>
  );
}

export default Favorite;
