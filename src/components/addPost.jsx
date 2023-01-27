import axios from "axios";
import React from "react";
import { useState } from "react";
import { useAuthUser } from "react-auth-kit";


import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { closeModal } from "../Reducers/modalReducer";
import { getPosts, setUpdate } from "../Reducers/PostReducer";

function AddPost() {
  const auth = useAuthUser();

  const [newPost, setNewPost] = useState({
    content: "",
    title: "",
    image: "",
  });
  const dispatch = useDispatch();

  const handleAddNewPost = () => {
    if (newPost.content === "") return null;
    let type = newPost.image.type.split("/");


    const config = {
      method: "post",
      url:
        type[0] == "image"
          ? `http://127.0.0.1:8000/api/addPost`
          : "http://localhost:8000/api/addVideo",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${auth().token}`,
      },

      // data: type[0] == "image" ? newPost : data1,
      data: newPost,
    }
    
  
    console.log(config.data);
    axios(config)
      .then(function (res) {
        console.log(res.data);
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
          title: "your post published successfully",
        });
        dispatch(getPosts());
        dispatch(setUpdate());
        setNewPost((pervs) => ({ ...pervs, content: "" }));
        dispatch(closeModal());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
    
      <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap bg-white justify-center items-center  dark:bg-[#18191c] ">
        <div className=" shadow-lg flex justify-center items-center mr-20 border-2 p-6 border-gray-400 text-center w-[50%]  h-full  ">
          <label
            for="dropzone-file"
            className="flex flex-col justify-center items-center bg-gray-100 rounded-lg border-4 border-gray-500 border-dashed cursor-pointer  hover:bg-gray-100"
          >
            <div className="flex flex-col justify-center items-center p-5">
              <svg
                aria-hidden="true"
                className="mb-3 w-10 h-10 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm font-[Satisfy] text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p className="text-sm font-[Satisfy] text-gray-600">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={(e) => {
                setNewPost((pervs) => ({ ...pervs, image: e.target.files[0] }));
              }}
            />
          </label>
        </div>
 
        <div className=" relative  flex  flex-col ">
          <div className="relative z-0 mb-6  group m-5 flex  flex-col  ">
            <input
              type="text"
              name="title"
              className="block py-2.5 px-0 rounded-xl text-lg   text-gray-800 bg-transparent border-0 border-b-4 border-lb focus:border-pcol appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required
              onChange={(e) => {
                setNewPost((pervs) => ({ ...pervs, title: e.target.value }));
              }}
            />
            <label
              for="title"
              className="absolute text-lg font-[Satisfy]  font-medium text-gray-800  duration-300 transform -translate-y-8 scale-75 top-6 left-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-800 focus:text-sm  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-7"
            >
              Add Your Title
            </label>
          </div>
          <div className="flex relative ">
            <div className="flex  ml-9 mb-10 justify-evenly items-center">
              <img
                className="w-[60px] h-[60px] rounded-full"
                src={
                  auth().user.profile_Img != null
                    ? `data:image/jpeg;base64,${auth().user.profile_Img}`
                    : auth().user.gender == "Female"
                    ? "https://media.istockphoto.com/vectors/default-placeholder-profile-icon-vector-id666545148?k=6&m=666545148&s=170667a&w=0&h=ycJvJHz6ZMWsErum0XpjVabgZsP8dib2feSIJ5dIWYk="
                    : "https://th.bing.com/th/id/OIP.P07J6hJbgyuIm-DlaSAlLQAAAA?pid=ImgDet&rs=1"
                }
                alt="Rounded avatar"
              />
              <h2 className="m-5  font-semibold text-gray-800 text-2xl font-[Satisfy]">    {auth().user.full_name.charAt(0).toUpperCase() +
          auth().user.full_name.slice(1)}</h2>
            </div>
          </div>

          <form className="relative group">
          {newPost.content == "" ? (
            <label
              className="  font-[Satisfy] absolute  top-[6rem] left-0 items-center flex  pl-[10px] duration-200 text-lg font-base text-gray-800 group-focus-within:text-sm group-focus-within:h-[55%] group-focus-within:-translate-y-full group-focus-within:pl-0 "
            
              htmlFor="label"
            >
              Tell everyone what your Post is about
            </label>
          ):""}
            <textarea
              id="label"
              className={ (newPost.content == "" 
                ? " "
                : " border-t-4 ") +"peer rounded-xl font-[Satisfy] w-full  focus:border-pcol h-[87%] mt-11 bg-white border-0 border-b-4 focus:border-t-4 empty:b-t-4 border-lb outline-none py-3 px-4 text-2xl "}
              type="text"
              onChange={(e) => {
                setNewPost((pervs) => ({ ...pervs, content: e.target.value }));
              
              }}
            />

            <div className=" px-4 py-8 mt-5 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-[100px] h-[40px] inline-flex justify-center rounded-3xl
                   border border-transparent shadow-lg  mx-4 bg-lb
                    text-center  text-white hover:bg-pcol
                    focus:outline-none focus:ring-2 focus:ring-offset-2  leading-[2.5rem]
                     focus:ring-black font-[Satisfy] text-lg "
                onClick={handleAddNewPost}
              >
                Save
              </button>
              <button
                type="button"
                className=" w-[100px] h-[40px] inline-flex justify-center
                  border-2 bg-white shadow-sm  border-pcol
                   text-center font-medium text-gray-700 leading-[2.5rem]
                    hover:bg-red-700 focus:outline-none focus:ring-2
                     focus:ring-offset-2 focus:ring-black rounded-3xl font-[Satisfy]  text-lg
                  "
                onClick={() => dispatch(closeModal())}

              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>


    </>
  );
}

export default AddPost;