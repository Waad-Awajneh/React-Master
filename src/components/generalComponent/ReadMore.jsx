import React, { useState } from "react";

export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 30) : text}
      <span
        onClick={toggleReadMore}
        className="read-or-hide text-black  font-semibold  cursor-pointer"
      >
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
