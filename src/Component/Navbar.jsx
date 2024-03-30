import React from "react";

export default function Navbar() {
  return (
    <header>
      <nav className="bg-gray-900 p-1 flex justify-between">
        <div className="flex items-center gap-[3px] ">
          <img src="icons8-stream-30.png" className=" p-2 w-[50px]  " />
          <h1 className=" text-lg text-white border-[3px] border-green-800 w-fit rounded-md p-[2px] font-medium">
            Stream<b className="text-red-500">Now</b>
          </h1>
        </div>
        <div className="flex gap-[2px]">
          <input
            type="text"
            placeholder="Search"
            className="w-[500px] p-2 rounded-[18px]  self-center "
          />
          <img
            src="search.png"
            className="w-[40px] self-center border-[2px] border-green-400   rounded-[20px] bg-yellow-50 cursor-pointer h-[40px] hover:bg-gray-900"
          />
        </div>
        <button className="border-2 text-white bg-blue-600 h-fit self-center font-semibold  mr-[1px] pl-2 pr-2 pt-2 pb-2 cursor-pointer hover:bg-blue-700">
          Sign In
        </button>
      </nav>
    </header>
  );
}
