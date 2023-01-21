import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function HomeGallery(props) {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(3);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = (page) => {
    const newItems = [];

    if (page <= props.data.length) {
      for (let i = 0; i < page; i++) {
        newItems.push(props.data[i]);
      }
    } else {
      for (let i = 0; i < props.data.length; i++) {
        newItems.push(props.data[i]);
      }
    }

    setItems([...newItems]);
  };
  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 3);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  if (items.length == 0 && props.data.length == 0) return "loading";

  return (
    <>
      {props.profile == "profile" ? (
        <>
          <div className="m-5 grid grid-flow-row overflow-scroll scroll-my-0.5 scroll-smooth hover:scroll-auto scrollbar max-[480px]:gap-2 gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {items.slice(-page).map((cardinfo) => (
              <Card key={cardinfo.id} cards={cardinfo} />
            ))}
          </div>
          {page <= props.data.length ? (
            <Link
              className="font-normal text-lnav shadow-lg hover:text-pcol p-2"
              onClick={() => setPage(page + 3)}
            >
              Show more
            </Link>
          ) : (
            <Link
              className="font-normal text-lnav shadow-lg hover:text-pcol p-2"
              onClick={() => window.scroll(0, 0)}
            >
              Return Top
            </Link>
          )}
        </>
      ) : (
        // <div className="m-5 grid grid-flow-row gap-8 text-neutral-600 cover:gap-3  cover:grid-cols-2 cover:m-1 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
           <div className="m-5 grid grid-flow-row gap-8 text-neutral-600 cover:gap-4  cover:grid-cols-1 cover:m-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {props.data.map((cardinfo) => (
            <Card key={cardinfo.id} cards={cardinfo} />
          ))}
        </div>
      )}
    </>
  );
}

export default HomeGallery;
