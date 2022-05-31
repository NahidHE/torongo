import "./App.css";
import Header from "./component/header/Header";
import SearchResult from "./component/searchResult/SearchResult";
import Play from "./component/play/Play";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="media-container">
        <Play></Play>
        <SearchResult></SearchResult>
      </div>
    </div>
  );
}

export default App;
