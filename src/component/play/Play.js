import React from "react";

export default function Play() {
  return (
    <div className="play">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/C_3d6GntKbk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
