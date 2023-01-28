import React, { Component } from "react";
import { Avatar } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { useAuthUser, useIsAuthenticated, useSignOut } from "react-auth-kit";
import ModalAddPost from "./Modal/ModalAddPost";
import { useState } from "react";
import { openModal } from "../Reducers/modalReducer";
import { getProfileData } from "../Reducers/PostReducer";
import { useEffect } from "react";
import {  getPostSearchData,getUserSearchData, getSearchData, setSearch } from "../Reducers/SearchReducer";


export default function Header() {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const auth = useAuthUser();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

const [searchParams, setSearchParams]= useSearchParams();

 const { userSearchData, postSearchData,search ,allSearchData} = useSelector((state) => state.SearchData);
  const { isOpen } = useSelector((state) => state.ModalReducer);
  const { profileData, update } = useSelector((state) => state.PostsData);
  const [searchParam, setSearchParam] = useSearchParams();
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
  }, [update]);



// console.log(postSearchData,userSearchData);

useEffect(()=>{
  console.log(searchTerm);
   dispatch(getSearchData());
   dispatch(getUserSearchData(searchTerm));
   dispatch(getPostSearchData(searchTerm));
},[searchTerm])


  /**************************************** */


  const handleSearch = event => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
    setSearchParams({search: event.target.value});  
    dispatch( setSearch(event.target.value ));
  };

  const handleOptionSelect = event => {
    setSelectedOption(event.target.value);
    setSearchParams({selected: event.target.value});
     dispatch(setSearch(event.target.value));
    navigate(`/search`)
  };

  const filteredOptionsUsers = allSearchData?.users?.filter(option =>

    option?.full_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredOptionsPosts = allSearchData?.posts?.filter(option =>
    option.title.toLowerCase().includes(searchTerm.toLowerCase())
    ||option.post_owner.includes(searchTerm)||option.post_content
.includes(searchTerm)
  );

/********************************************** */



{console.log(allSearchData)}

if(!allSearchData)return "mjjkjlkjkl"
  return (
    <>
      <nav
        className={
          "top-0  z-50  rounded-sm  bg-white shadow-lg flex flex-wrap items-center justify-between px-2 text-lnav"
        }
      >
        <div className="h-full w-full max-w-7xl mx-auto flex items-center justify-between ">
          <div>
            <Link to={"/"}>
              <img
                src={require("./../assests/img/logo.png")}
                className="h-16 w-16 ml-3 mt-2"
                alt=" Logo"
              />
            </Link>
          </div>






          <div className="hidden md:block">
            <div className="relative">








              <input
              list="searchList"
                type="text"
              className="rounded-[30px] bg-gray-100 p-1.5 text-sm pl-8 h-12 w-[35rem] "
                placeholder="Search"
                // onChange={(e)=>handelSearch(e)}
                      // onChange={(e) => {
                      // setSearchParam({ search: e.target.value });
                      // console.log(e.target.value.length);
                      //  dispatch( setSearch(e.target.value ));

                    
        value={searchTerm}
        onChange={handleSearch}
                     
                    // }
                  // }
          
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
        <div> 
{searchTerm.trim()!=""?
    <select   id="searchList" type="text"
        className=" w-[25rem] max-h-36 py-2 px-3 absolute overflow-y-auto rounded-md bg-blue-gray-500 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        value={selectedOption}
        
        onChange={handleOptionSelect   }>
        
       <optgroup label="People">
        {filteredOptionsUsers.length!=0? filteredOptionsUsers?.slice(0,3).map((option) =>
         (
   
      <option key={option.user_id} value={option.full_name} className="bg-white cursor-pointer text-gray-800 active:bg-lnav">
            {option.full_name}
          </option> 
        )
        
        ):
           
      <option value=""  className="bg-white cursor-pointer text-gray-800 active:bg-lnav">
           No People founded
          </option> 
        
        }
         </optgroup>
     <optgroup label="Posts">
        {filteredOptionsPosts.length!=0 ?
        
        filteredOptionsPosts?.slice(0,3).map((option) =>
         (
   
      <option key={option.post_id} value={option.title} className="bg-white cursor-pointer text-gray-800 active:bg-lnav">
            {option.title}
          </option> 
        )
        
        )
        :
       <option  value=""  className="bg-white cursor-pointer text-gray-800 active:bg-lnav">
           No posts founded
          </option> 
        
        }
     </optgroup>
      </select>:""}
      
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
                  img={
                    profileData.profile_Img != null
                      ? `data:image/jpeg;base64,${profileData.profile_Img}`
                      : profileData.gender == "Female"
                      ? "https://media.istockphoto.com/vectors/default-placeholder-profile-icon-vector-id666545148?k=6&m=666545148&s=170667a&w=0&h=ycJvJHz6ZMWsErum0XpjVabgZsP8dib2feSIJ5dIWYk="
                      : "https://th.bing.com/th/id/OIP.P07J6hJbgyuIm-DlaSAlLQAAAA?pid=ImgDet&rs=1"
                  }
                  rounded={true}
                />
              </Link>
            </div>

            <div
              className="flex flex-wrap gap-2 "
              onClick={() => {
                signOut();
                navigate("/landing");
              }}
            >
              <MdOutlineLogout className="h-6 w-6 mx-2 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
      <ModalAddPost />
    </>
  );
}
