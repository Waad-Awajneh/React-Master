import axios from "axios";

export const handleDelete = (id,deleteUrl,token,setLoadingComment,loadingComment,navigate) => {
    const config = {
      method: "delete",
      url: `http://127.0.0.1:8000/api/${deleteUrl}/${id}`,
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization:token,
      },
    };
    axios(config).then((resp) => {
      console.log(resp);

    //   setLoadingComment(!loadingComment);
    navigate("/")
    });
  };
