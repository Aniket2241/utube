import React, { useState } from "react";
import notecontext from "./notecontext";

const Global = (props) => {
  const [id, setid] = useState("Error fetching the Data");
  const [title, settitle] = useState({
    name: "",
    description: "",
    channelname: "",
    publishinfo: "",
  });
  return (
    <notecontext.Provider value={{ id, setid, title, settitle }}>
      {props.children}
    </notecontext.Provider>
  );
};

export default Global;
