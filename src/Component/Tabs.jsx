import React, { useEffect, useState, useContext } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { NavLink, useParams } from "react-router-dom";
import notecontext from "../Context/notecontext";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
export default function Tabs({ icons, list, search, setsearch }) {
  const { id, setid, title, settitle } = useContext(notecontext);
  const [data, setdata] = useState([]);
  async function getdata() {
    try {
      const searchvalue = search;
      const key = "AIzaSyD9FfMtDFRRRrwSLz1jqGdkualVSmVy6BM";
      const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&q=${searchvalue}&maxResults=21&part=snippet&type=video&order=viewCount`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      toast.success("Data loaded successfully");
      const result = await response.json();
      setdata(result);
      console.log(result.items);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data");
    }
  }

  useEffect(() => {
    getdata();
  }, [search]);

  function daysAgo(date) {
    const targetDate = new Date(date);
    const currentDate = new Date();
    const difference = currentDate - targetDate;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return `${days} days ago`;
  }
  return (
    <div className=" flex flex-col sm:flex-row  bg-gray-800 sm:w-fit ">
      <Toaster />
      <Tab.Group manual vertical defaultIndex={0}>
        <Tab.List
          className=" sm:w-full flex  pl-3 sm:flex-col top-1 sticky sm:top-14 rounded-xl gap-5 bg-black p-1  sm:overflow-auto sm:h-[100vh] "
          style={{
            overflowY: "scroll",
            scrollbarWidth: "thin",
            scrollbarColor: "red black",
          }}
        >
          {list.map((name, index) => (
            <Tab
              key={index}
              onClick={() => {
                setsearch(name);
              }}
              className={({ selected }) =>
                classNames(
                  ` h-fit    sm:w-full justify-start   flex  text-white bg-black rounded-[18px] p-3  text-sm sm:text-md sm:font-medium   sm:p-[10px] leading-5 hover:bg-customRed  `,
                  selected ? `  bg-customRed ` : `bg-black`
                )
              }
            >
              <div className="flex  items-center  gap-2   ">
                <b className="text-green-400  hover:text-white   text-[25px] ">
                  {icons[index]}
                </b>
                {name}
              </div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {list.map((name, index) => (
            <Tab.Panel key={index}>
              <div className="flex flex-wrap justify-evenly mr-[10px]  rounded-xl bg-black p-1">
                {data.items &&
                  data.items.map((item, itemIndex) => (
                    <div
                      className="flex flex-col flex-wrap w-[310px]"
                      key={itemIndex}
                    >
                      <NavLink
                        to="/Feed"
                        onClick={() => {
                          setid(item.id.videoId);
                          settitle({
                            ...title,
                            name: item.snippet.title,
                            description: item.snippet.description,
                            channelname: item.snippet.channelTitle,
                            publishinfo: daysAgo(item.snippet.publishedAt),
                          });
                        }}
                      >
                        <img
                          src={item.snippet.thumbnails.high.url}
                          alt={`Thumbnail ${itemIndex}`}
                          className="w-[300px] cursor-pointer border-2 rounded-lg mb-2"
                        />
                        <h1 className="text-white cursor-pointer font-bold w-fit">
                          {item.snippet.title}
                        </h1>
                      </NavLink>
                      <h2 className="text-gray-400 w-fit">
                        {item.snippet.channelTitle}{" "}
                        <b className=" text-blue-400  relative bottom-0">
                          . {daysAgo(item.snippet.publishedAt)}
                        </b>
                      </h2>
                    </div>
                  ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
