import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
export default function Tabs({ list }) {
  const [selectedcategory, setselectedcategory] = useState(2);
  const [data, setdata] = useState([]);
  async function getdata() {
    const key = "AIzaSyD9FfMtDFRRRrwSLz1jqGdkualVSmVy6BM";
    const url = `https://www.googleapis.com/youtube/v3/videos?key=${key}&part=snippet,statistics&chart=mostPopular&maxResults=20`;

    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    setdata(result);

    console.log(result.items);
  }
  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {
    console.log("Data updated:", data);
  }, [data]);
  return (
    <div className=" flex   bg-gray-800  ">
      <Tab.Group manual vertical defaultIndex={0}>
        <Tab.List
          className="  flex flex-col items-center sticky top-0 rounded-xl gap-3 bg-black  w-full overflow-auto h-[100vh] "
          style={{
            overflowY: "scroll",
            scrollbarWidth: "thin",
            scrollbarColor: "red black",
          }}
        >
          {list.map((name, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  `w-full  text-white bg-black rounded-[18px] py-3.5 text-md font-medium  p-[50px] leading-5 hover:bg-customRed hover:text-white`,
                  selected
                    ? ` transition-all duration-900  ease-in bg-customRed text-white`
                    : `bg-black`
                )
              }
            >
              {name}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel className="flex flex-wrap justify-evenly mr-[10px]  rounded-xl bg-black p-1">
            {data.items.map((item, index) => (
              <div className=" cursor-pointer w-[400px]" key={index}>
                <a
                  href={`https://www.youtube.com/watch?v=${item.id}`}
                  target="_blank"
                >
                  <img
                    src={item.snippet.thumbnails.high.url}
                    alt={`Thumbnail ${index}`}
                    className="w-[300px] border-2 rounded-lg mb-2"
                  />
                  <h1 className="text-white font-bold">{item.snippet.title}</h1>
                </a>
                <h2 className="text-gray-400">
                  {item.snippet.channelTitle}{" "}
                  <b className=" relative bottom-[4px]">.</b>
                  &nbsp; {parseInt(item.statistics.viewCount / 1000)}K Views
                </h2>
              </div>
            ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
