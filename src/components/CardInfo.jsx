// import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import HomeGallery from "./HomeGallery";

function CardInfo(open) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const openData = open.open;
    if (openData == "follow") {
      axios
        .get("following.json")
        .then((res) => {
          setData(res.data);
        })
        .catch(() => {
          alert("There was an error while retrieving the data");
        });
    } else {
      axios
        .get("info.json")
        .then((res) => {
          setData(res.data);
        })
        .catch(() => {
          alert("There was an error while retrieving the data");
        });
    }
  }, []);

  return <>{<HomeGallery data={data} />}</>;
}

export default CardInfo;
