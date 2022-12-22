import React, { useState } from "react";
import Card from "./Card";

function HomeGallery(props) {
  // const [cardsInfo, setCardInfo] = useState(data.data);
  // console.log(props.data);
  return (
    <>
      {props.profile == "profile" ? (
        <div className="m-5 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {props.data.posts?.map((cardinfo) => (
            <Card key={cardinfo.user_id} cards={cardinfo} />
          ))}
        </div>
      ) : (
        <div className="m-5 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {props.data?.map((cardinfo) => (
            <Card key={cardinfo.id} cards={cardinfo} />
          ))}
        </div>
      )}
    </>
  );
}

export default HomeGallery;
