import React, { useEffect, useState } from "react";
import "./searchResult.css";
import Item from "../item/Item";

export default function SearchResult(props) {
  const url = `https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${props.searchTerm}`;
  const [items, setItems] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
        "X-RapidAPI-Key": "59d1e1ef18msh6c45d5116ae7f90p1e52d3jsn94ecf2949405",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, [url]);

  return (
    <div className="search-result">
      {items
        ? items.items
            .filter((item) => item.type === "video")
            .map((item) => (
              <Item
                key={item.id}
                title={item.title}
                thumbnail={item.bestThumbnail}
                author={item.author}
                duration={item.duration}
                uploadedAt={item.uploadedAt}
                views={item.views}
                url={item.url}
              ></Item>
            ))
        : ""}
    </div>
  );
}
