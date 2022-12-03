// import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import HomeGallery from "./HomeGallery";

function CardInfo(open) {
  const [data, setData] = useState([]);
  console.log(open);
  const openData = open.open;
  useEffect(() => {
    if (openData == "follow") {
      axios
        .get("following.json")
        .then((res) => {
          setData(res.data);
        })
        .catch(() => {
          alert("There was an error while retrieving the data");
        });
    } else if (openData == "rand") {
      axios
        .get("info.json")
        .then((res) => {
          setData(res.data);
        })
        .catch(() => {
          alert("There was an error while retrieving the data");
        });
    } else if (openData == "profile") {
      axios
        .get("me.json")
        .then((res) => {
          setData(res.data);
        })
        .catch(() => {
          alert("There was an error while retrieving the data");
        });
    }
  }, []);

  return <>{<HomeGallery data={data} profile={openData} />}</>;
}

export default CardInfo;
