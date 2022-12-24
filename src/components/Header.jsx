import React, { Component } from "react";
import { Avatar } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { useSignOut } from "react-auth-kit";
import ModalAddPost from "./Modal/ModalAddPost";
import { useState } from "react";
import { openModal } from "../Reducers/modalReducer";

export default function Header() {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const { isOpen } = useSelector((state) => state.ModalReducer);
  const dispatch = useDispatch();

  return (
    <>
      <nav
        className={
          "top-0 absolute z-50 w-full  rounded-sm  bg-white shadow-lg flex flex-wrap items-center justify-between px-2 text-lnav "
        }
      >
        <div className="h-full w-full max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <Link to={"/"}>
              <img
                src={require("./../assests/img/logo.png")}
                className="h-12 w-12 ml-3"
                alt=" Logo"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                className="rounded bg-gray-100 p-1.5 text-sm pl-8 w-96"
                placeholder="Search"
                // onChange={handelSearch}
              />
              <div className="absolute top-2 left-2 text-lnav">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex text-lnav items-center">
            <Link to={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-2 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </Link>
            <Link to={""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-2 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </Link>
            <button
              onClick={() => {
                dispatch(openModal(1));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-2 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </button>
            <Link to={"/Home"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-2 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                ></path>
              </svg>
            </Link>
            <Link to={"/Favorite"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-2 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </Link>

            <div className="flex flex-wrap gap-2">
              <Link to={"/profile"}>
                <Avatar
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
              </Link>
            </div>

            <div
              className="flex flex-wrap gap-2"
              onClick={() => {
                signOut();
                navigate("/landing");
              }}
            >
              {" "}
              <MdOutlineLogout />
            </div>
          </div>
        </div>
      </nav>
      // <ModalAddPost />;
    </>
  );
}
