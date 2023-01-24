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
    
      <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap bg-white   dark:bg-[#18191c] ">
        <div className="flex justify-center items-center mr-7  w-[266px]  border-4 p-6 border-pcol text-center   ">
          <label
            for="dropzone-file"
            class="flex flex-col justify-center items-center w-full h-[21rem]  bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col justify-center items-center p-5">
              <svg
                aria-hidden="true"
                class="mb-3 w-10 h-10 text-gray-400"
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
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              onChange={(e) => {
                setNewPost((pervs) => ({ ...pervs, image: e.target.files[0] }));
              }}
            />
          </label>
        </div>

        <div className=" relative h-full ">
          <div class="relative z-0 mb-6 w-full group m-5">
            <input
              type="text"
              name="title"
              class="block py-2.5 px-0 w-96 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => {
                setNewPost((pervs) => ({ ...pervs, title: e.target.value }));
              }}
            />
            <label
              for="title"
              class="absolute text-lg  font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Add Your Title
            </label>
          </div>
          <div className="flex  justify-between">
            <div className="flex my-2  mb-10 justify-evenly items-center">
              <img
                class="w-10 h-10 rounded-full"
                src={
                  auth().user.profile_Img != null
                    ? `data:image/jpeg;base64,${auth().user.profile_Img}`
                    : auth().user.gender == "Female"
                    ? "https://media.istockphoto.com/vectors/default-placeholder-profile-icon-vector-id666545148?k=6&m=666545148&s=170667a&w=0&h=ycJvJHz6ZMWsErum0XpjVabgZsP8dib2feSIJ5dIWYk="
                    : "https://th.bing.com/th/id/OIP.P07J6hJbgyuIm-DlaSAlLQAAAA?pid=ImgDet&rs=1"
                }
                alt="Rounded avatar"
              />
              <h2 className="m-3 font-semibold">{auth().user.full_name}</h2>
            </div>
          </div>

          <form className="relative group">
            <label
              className="absolute top-10 left-0 items-center flex  pl-[10px] duration-200 text-sm group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-full group-focus-within:pl-0"
              htmlFor="label"
            >
              Tell everyone what your Post is about
            </label>

            <textarea
              id="label"
              className="rounded-xl w-[15rem] md:w-[25rem]  h-[5rem] md:h-[6rem] bg-gray-200 outline-none py-3 px-4 text-xs"
              type="text"
              onChange={(e) => {
                setNewPost((pervs) => ({ ...pervs, content: e.target.value }));
              }}
            />

            <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md
                   border border-transparent shadow-sm px-4 py-2 bg-lnav
                    text-base font-medium text-white hover:bg-pcol
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                     focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleAddNewPost}
              >
                Save
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center
                  rounded-md border border-gray-300 shadow-sm px-4 py-2
                   bg-white text-base font-medium text-gray-700
                    hover:bg-gray-50 focus:outline-none focus:ring-2
                     focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0
                      sm:ml-3 sm:w-auto sm:text-sm"
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