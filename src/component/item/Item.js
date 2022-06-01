import React from "react";
import info from "../../data/info";
import "./item.css";

export default function Item(props) {

  const play = (url) => {
    const video = new URL(url);
    info.id = video.searchParams.get("v");
    console.log(info);
  };

  return (
    <div className="item" onClick={() => play(props.url)}>
      <div className="thumbnail">
        <img src={props.thumbnail ? props.thumbnail.url : ""} alt="" />
      </div>
      <div className="details">
        <div className="title">
          <h3>{props.title}</h3>
        </div>
        <div className="info">
          <p>{props.duration} m</p>
          <p>{props.views} views</p>
          <p>{props.uploadedAt}</p>
        </div>
        <div className="channel-description">
          <div className="avatar">
            <img src={props.author ? props.author.bestAvatar.url : ""} alt="" />
          </div>
          <div className="channel-name">
            <h5>{props.author ? props.author.name : ""}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
