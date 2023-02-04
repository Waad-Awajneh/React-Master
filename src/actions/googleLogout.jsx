import React from "react";
import { GoogleLogout } from "react-google-login";
import { MdOutlineLogout } from "react-icons/md";
// import { useCookies } from "react-cookie";

import { CLIENT_ID } from "./../constant/googleLoginConstant";

function Logout() {
  //   const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);

  const onSuccess = () => {
    console.log("Logout made successfully");
    // removeCookie("currentUser");
  };

  return (
    <GoogleLogout
      className=" bg-transparent outline-none border-0 relative"
      clientId={CLIENT_ID}
      onLogoutSuccess={onSuccess}
      icon={false}
    >
      <MdOutlineLogout className="h-6 w-6 mx-2 cursor-pointer " />
    </GoogleLogout>
  );
}

export default Logout;
