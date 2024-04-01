import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
export default function Navbar({ search, setsearch }) {
  const [value, setvalue] = useState("");
  function handlechange(e) {
    setvalue(e.target.value);
  }
  function find() {
    setsearch(value);
  }
  const takerror = () => {
    toast.error(<b>Apologies, unable to authenticate at this time</b>, {
      style: { backgroundColor: "#d7f9fc" },
    });
  };
  return (
    <header className="sm:sticky sm:top-0">
      <nav className="bg-gray-900 p-1 flex justify-between  ">
        <div className="flex items-center gap-[3px] md:gap-[1px] ">
          <img src="icons8-stream-30.png" className=" p-2 w-[50px]  " />
          <h1 className=" text-md sm:text-lg md:text-lg text-white border-[3px] border-pink-400 w-fit rounded-md p-[2px] font-medium">
            Stream<b className="text-red-500">Now</b>
          </h1>
        </div>
        <Toaster />
        <div className=" flex m-auto justify-between">
          <div className="flex ">
            <input
              type="text"
              placeholder="Search"
              className=" w-[200px] lg:w-[300px] md:w-[500px] p-2  rounded-[18px]  self-center  "
              onChange={handlechange}
              value={value}
            />
            <NavLink to="/">
              {" "}
              <img
                src="search.png"
                className="w-[40px] self-center border-[2px] border-green-400   rounded-[20px] bg-yellow-50 cursor-pointer h-[40px] hover:bg-gray-900"
                onClick={find}
              />
            </NavLink>
          </div>
        </div>
        <button
          className="border-2 hidden sm:inline text-white bg-blue-600 rounded-lg h-fit self-center font-semibold  mr-[1px] pl-2 pr-2 pt-2 pb-2 cursor-pointer hover:bg-blue-700"
          onClick={takerror}
        >
          Sign In
        </button>
      </nav>
    </header>
  );
}
