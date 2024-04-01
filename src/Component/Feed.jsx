import React, { useContext } from "react";
import notecontext from "../Context/notecontext";

export default function Feed() {
  const { id } = useContext(notecontext);
  const { title } = useContext(notecontext);

  return (
    <>
      <div className=" mt-2 mx-auto text-white">
        <iframe
          className=" w-full border-2 md:w-full md:h-[65vh]"
          src={`https://www.youtube.com/embed/${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="p-4 mt-2 md:mt-0">
          <h1 className="text-lg font-bold mb-2">{title.name}</h1>
          <h1 className="text-blue-400 font-medium">{title.description}</h1>
          <div className="flex items-center mb-2">
            <img src="user.png" className="w-8 h-8 mr-2 rounded-full" />
            <h1 className="text-yellow-100 font-bold ml-2">
              {title.channelname}
            </h1>
          </div>
          <h1 className="text-white mb-2">{title.publishinfo}</h1>
        </div>
      </div>
    </>
  );
}
