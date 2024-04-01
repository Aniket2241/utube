import React from "react";
import { BsNewspaper } from "react-icons/bs";
import { MdJavascript } from "react-icons/md";
import { GiLoveSong } from "react-icons/gi";
import { FcMusic } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";
import { SiMojangstudios } from "react-icons/si";
import { MdSportsBasketball } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { BiPodcast } from "react-icons/bi";
import { MdOutlineMovieCreation } from "react-icons/md";
import { FcGlobe } from "react-icons/fc";
import { FiMonitor } from "react-icons/fi";
import { FaJava } from "react-icons/fa";
import { BsFillEmojiGrinFill } from "react-icons/bs";
import { TfiShortcode } from "react-icons/tfi";

const IconDefinition = () => {
  const icons = [
    <FcGlobe />,
    <SiYoutubegaming />,
    <MdJavascript />,
    <MdOutlineMovieCreation />,
    <BsNewspaper />,
    <FaReact />,
    <FiMonitor />,
    <SiMojangstudios />,
    <FaJava />,
    <GiLoveSong />,
    <BsFillEmojiGrinFill />,
    <FcMusic />,
    <MdSportsBasketball />,
    <TfiShortcode />,
    <AiOutlineShoppingCart />,
    <GrTechnology />,
    <BiPodcast />,
    <FcMusic />,
  ];

  const categories = [
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
  ];

  return { icons, categories };
};

export default IconDefinition;
