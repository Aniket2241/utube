import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Tabs from "./Component/Tabs";
import { BrowserRouter } from "react-router-dom";
function App() {
  const [category, setcategory] = useState([
    "All",
    "Gaming",
    "Javascript",
    "Vlogs",
    "News",
    "React",
    "Bollywood",
    "Marvels",
    "Java",
    "Punjabi HitZ",
    "Comedy",
    "Music",
    "Sport",
    "Shorts",
    "Shopping",
    "Tech",
    "Podcast",
    "Bhajan",
  ]);

  return (
    <>
      <Navbar />
      <Tabs list={category} />
    </>
  );
}

export default App;
