import React, { useState } from "react";
import "./App.css";
import Global from "./Context/global";
import Navbar from "./Component/Navbar";
import Tabs from "./Component/Tabs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Component/Feed";
import IconDefinition from "./Component/IconDefinition";

function App() {
  const { icons, categories } = IconDefinition();
  const [search, setsearch] = useState("Songs");
  return (
    <>
      <Global>
        <BrowserRouter>
          <Navbar search={search} setsearch={setsearch} />
          <Routes>
            <Route
              path="/"
              element={
                <Tabs
                  list={categories}
                  icons={icons}
                  search={search}
                  setsearch={setsearch}
                />
              }
            />
            <Route path="/Feed" element={<Feed />} />
          </Routes>
        </BrowserRouter>
      </Global>
    </>
  );
}

export default App;
