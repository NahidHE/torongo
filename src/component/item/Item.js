import React from "react";
import "./item.css";

export default function Item(props) {
  return (
    <div className="item">
      <div className="thumbnail">
        <img src={props.thumbnail ? props.thumbnail.url : ""} alt='' />
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
            <img src={props.author ? props.author.bestAvatar.url : ""} alt=""/>
          </div>
          <div className="channel-name">
            {console.log()}
            <h5>{props.author ? props.author.name : ""}</h5>
            {
              console.log(props.url)
            }
          </div>
        </div>
      </div>
    </div>
  );
}
