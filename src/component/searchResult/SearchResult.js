import React, { useEffect, useState } from "react";
import "./searchResult.css";
import Item from "../item/Item";

//Temprary to test
import { data } from "../../data/data";
//Temprary to test

export default function SearchResult(searchTerm) {
  console.log(searchTerm);
  const url = `https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${searchTerm}`;
  // const [items, setItems] = useState();
  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
  //       "X-RapidAPI-Key": "???",
  //     },
  //   };

  //   fetch(url, options)
  //     .then((response) => response.json())
  //     .then((data) => setItems(data))
  //     .catch((err) => console.error(err));
  // }, [searchTerm, url]);

  //Temprary to test
  const items = data;
  console.log(items);
  //Temprary to test

  return (
    <div className="search-result">
      {items.items
        .filter((item) => item.type == "video")
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
        ))}
    </div>
  );
}
