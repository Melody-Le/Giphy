import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Gif from "./Components/Gif";
import axios from "axios";

function App() {
  const [gifUrl, setGifUrl] = useState("");
  const [title, setTitle] = useState("");

  const key = "eUD9bblJDSTI3M0C3Ne47ivVnfoVhhYi";
  const urlRandom = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;
  const getUrlSearchTerm = (searchTerm) => {
    return `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchTerm}&limit=1`;
  };
  const fetchSearch = async (giphy) => {
    const data = await axios.get(getUrlSearchTerm(giphy));
    setGifUrl(data.data.data[0].images.original.url);
    setTitle(data.data.data[0].title);
  };
  const fetchRandomGif = async () => {
    const data = await axios.get(urlRandom);
    setGifUrl(data.data.data.images.original.url);
    setTitle(data.data.data.title);
  };
  useEffect(() => {
    fetchRandomGif();
  }, []);

  const searchNewGif = (giphy) => {
    fetchSearch(giphy);
  };
  const getRandomGif = () => {
    fetchRandomGif();
  };

  return (
    <div className="App">
      <div>
        <button onClick={getRandomGif}>Get another Gif</button>
      </div>
      <h1>Welcome to Melody's Giphy</h1>
      <Form onSubmit={searchNewGif} />
      <Gif url={gifUrl} title={title} />
    </div>
  );
}

export default App;
