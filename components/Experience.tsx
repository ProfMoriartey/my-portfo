"use client";

import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import ReactBD from "./works/ReactBD";
import Google from "./works/Google";
import Spotify from "./works/Spotify";
import Apple from "./works/Apple";
import Instagram from "./works/Instagram";

const Experience = () => {
  const [workReactBD, setWorkReactBD] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workSpotify, setWorkSpotify] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workInstagram, setWorkInstagram] = useState(false);

  const handleReactbd = () => {
    setWorkReactBD(true);
    setWorkGoogle(false);
    setWorkSpotify(false);
    setWorkApple(false);
    setWorkInstagram(false);
  };
  const handleGoogle = () => {
    setWorkReactBD(false);
    setWorkGoogle(true);
    setWorkSpotify(false);
    setWorkApple(false);
    setWorkInstagram(false);
  };
  const handleSpotify = () => {
    setWorkReactBD(false);
    setWorkGoogle(false);
    setWorkSpotify(true);
    setWorkApple(false);
    setWorkInstagram(false);
  };
  const handleApple = () => {
    setWorkReactBD(false);
    setWorkGoogle(false);
    setWorkSpotify(false);
    setWorkApple(true);
    setWorkInstagram(false);
  };
  const handleInstagram = () => {
    setWorkReactBD(false);
    setWorkGoogle(false);
    setWorkSpotify(false);
    setWorkApple(false);
    setWorkInstagram(true);
  };

  return (
    <section className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
      <SectionTitle title={"Where I Have Worked"} titleNo={"02"} />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 felx flex-col">
          <li
            onClick={handleReactbd}
            className={`${
              workReactBD
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            ReactBD
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Google
          </li>
          <li
            onClick={handleSpotify}
            className={`${
              workSpotify
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Spotify
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Apple
          </li>
          <li
            onClick={handleInstagram}
            className={`${
              workInstagram
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Instagram
          </li>
        </ul>
        {workReactBD && <ReactBD />}
        {workGoogle && <Google />}
        {workSpotify && <Spotify />}
        {workApple && <Apple />}
        {workInstagram && <Instagram />}
      </div>
    </section>
  );
};

export default Experience;
