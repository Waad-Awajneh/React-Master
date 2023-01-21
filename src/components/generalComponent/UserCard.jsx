import React from 'react';

export const UserCard  = ({info}) => {
    console.log(info);
  return (
    <>
      <div className="flex flex-col md:flex-row items-center space-x-4 p-2 md:p-3 rounded-xl shadow-lg bg-white  xss:cover:mx-[20px]">
        <div className="relative w-fit hover:scale-105 duration-200 py-2 md:py-0">
       
         {/* <Avatar
                  img={
                    profileData.profile_Img != null
                      ? `data:image/jpeg;base64,${profileData.profile_Img}`
                      : profileData.gender == "Female"
                      ? "https://media.istockphoto.com/vectors/default-placeholder-profile-icon-vector-id666545148?k=6&m=666545148&s=170667a&w=0&h=ycJvJHz6ZMWsErum0XpjVabgZsP8dib2feSIJ5dIWYk="
                      : "https://th.bing.com/th/id/OIP.P07J6hJbgyuIm-DlaSAlLQAAAA?pid=ImgDet&rs=1"
                  }
                  rounded={true}
                /> */}
       
       
          {/* <img
            className="hidden dark:block w-20 h-20  hover:scale-110 duration-300"
               src={info?.profile_Img!=null?
                 `data:image/jpeg;base64,${info?.profile_Img}`:
                 info.gender == "Female"
                      ? "https://media.istockphoto.com/vectors/default-placeholder-profile-icon-vector-id666545148?k=6&m=666545148&s=170667a&w=0&h=ycJvJHz6ZMWsErum0XpjVabgZsP8dib2feSIJ5dIWYk="
                      : "https://th.bing.com/th/id/OIP.P07J6hJbgyuIm-DlaSAlLQAAAA?pid=ImgDet&rs=1"
                
               }
            alt="avatar"
          /> */}
          <img
            className="block dark:hidden w-[173px] h-[190px] max-w-none  sm:w-[230px] cover:w-[26rem] cover:h-[15rem] xl:w-[500px]] xl:h-[230px] xss:cover:w-[18rem] xsm:max-w-full rounded-3xl"
             src={info?.profile_Img!=null?
                 `data:image/jpeg;base64,${info?.profile_Img}`:
                 info.gender == "Female"
                      ? "https://media.istockphoto.com/vectors/default-placeholder-profile-icon-vector-id666545148?k=6&m=666545148&s=170667a&w=0&h=ycJvJHz6ZMWsErum0XpjVabgZsP8dib2feSIJ5dIWYk="
                      : "https://th.bing.com/th/id/OIP.P07J6hJbgyuIm-DlaSAlLQAAAA?pid=ImgDet&rs=1"
                
               }
            alt="avatar"
          />
          {/* <p className="absolute bottom-2 text-white -right-1 w-5 h-5 flex items-center justify-center p-2 text-xs rounded-2xl bg-[#ff4757]">
            8
          </p> */}
        </div>
        <div className="flex flex-col space-y-1 py-2 md:py-0">
          <h2 className="text-primary dark:text-white font-medium text-sm">
         {info.full_name
}
          </h2>
          <h6 className="text-primary dark:text-white font-medium text-sm">
         {info.major

}
          </h6>
          <small className="text-xs font-lighttext-primary  dark:text-gray-400">
         {info.bio
}
          </small>
          <span className="space-x-2">
            <button className="py-1 px-3 rounded-lg text-white bg-[#ff4757] text-[0.6rem] duration-300 hover:-translate-y-0.5">
              Open
            </button>
            <button className="py-1 px-3 rounded-lg bg-white shadow-xl dark:bg-primary text-[0.6rem] duration-300 hover:-translate-y-1">
              Cancel
            </button>
          </span>
        </div>
      </div>
    </>
  );
};