

import Swal from "sweetalert2";
import axios from "axios";
import { handelUpdate } from "../Reducers/modalReducer";
// import * as fs from 'fs/promises';
const qs = require('qs');
// // var fs = require('fs');
// import * as fs from 'fs';
// import "fs"

//     var FormData = require('form-data');


   export const handleEdit = (post,isEdit,dispatch,auth) => { 



    // var data = new FormData();
    // data.append('content',post.content );
    // data.append('title',  post.title);
    // data.append('post_img', qs.createReadStream(post.post_img));
    
    // var config = {
    //   method: 'post',
    //   url: `http://127.0.0.1:8000/api/editPost/${post.post_id}`,
    //   headers: { 
    //     'Content-Type': 'application/vnd.api+json, multipart/form-data', 
    //     'Accept': 'application/vnd.api+json', 
    //     'Authorization': auth, 

    //   },
    //   data : data
    // };
    
//     // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    









     const config = {
    method: "post",
    url: `http://127.0.0.1:8000/api/editPost/${post.post_id}`,
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "multipart/form-data",
      Authorization: auth,
    },
    data: {
      content: post.post_content,
      title: post.title,
      post_img:post.images[0].image
    }
  };
console.log(post.images[0].image);


    if (post.content == "") return null;
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
          title: res.data.message,
        });

        dispatch(handelUpdate());

      })
      .catch(function (error) {
        console.log(error);
      });
  };



