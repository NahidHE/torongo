import "./App.css";
import Header from "./component/header/Header";
import SearchResult from "./component/searchResult/SearchResult";
import Play from "./component/play/Play";
import info from "./data/info";
import { useState } from "react";

function App() {
  const [videoID, setVideoID] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const getData = () => {
    setVideoID(info.id);
    setSearchTerm(info.searchTerm);
  };

  return (
    <div className="app" onClick={getData}>
      <Header></Header>
      <div className="media-container">
        <Play id={videoID}></Play>
        <SearchResult searchTerm={searchTerm}></SearchResult>
      </div>
    </div>
  );
}

export default App;
