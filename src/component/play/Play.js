import React from "react";

export default function Play(props) {
  const url = `https://www.youtube.com/embed/${props.id}`;

  return (
    <div className="play">
      <iframe
        width="100%"
        height="100%"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
