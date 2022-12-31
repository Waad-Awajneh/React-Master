import React, { useState, useEffect } from "react";

function MyComponent() {
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/getVideo/1")
      .then((response) => response.blob())
      .then((blob) => URL.createObjectURL(blob))
      .then((url) => setVideoUrl(url));
  }, []);

  // Render the video in the component
  return <div>{videoUrl && <video src={videoUrl} controls />}</div>;
}

export default MyComponent;
