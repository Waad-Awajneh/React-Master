// import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import HomeGallery from "./HomeGallery";

function CardInfo() {
  // const CardPrint = () => {
  //   let card = [];
  //   for (let index = 0; index < 10; index++) {
  //     card.push(<Card />);
  //   }
  //   return card;
  // };

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("info.json")
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);

  return <>{<HomeGallery data={data} />}</>;
}

export default CardInfo;
