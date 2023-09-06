import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { AiFillCaretRight } from "react-icons/ai";
import { TbPoint } from "react-icons/tb";
import { BsCircle } from "react-icons/bs";
import { BiCircle } from "react-icons/bi";
import { LuCircle } from "react-icons/lu";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-20 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Ahmed and I like making things that live online.
            Since I was a child I was always fascinated by technology and
            computers. In high school, programming was my favorite subject. even
            though I did not major in computer science or programming, I started
            learning about web development in my free time with a big interest.
            after some time, I started taking it more seriously by researching
            it more and joining online courses. I hit a lot of tough spots; from
            confusing tutorials to errors that sometimes took days to understand
            and fix. There was no set plan, no teacher`s feedback – just me
            pushing myself. But, the satisfaction of mastering skills kept me
            going. I learned from open sources, by building small projects and
            trying to remake websites I liked.
            {/* {" "}<span className="text-textGreen">aspernatur sint nam eius</span>{" "} */}
          </p>
          <p>
            {" "}
            <span className="text-textGreen">Languages I speak:</span>{" "}
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont flex justify-between gap-2 mt-2">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <LuCircle />
              </span>
              English
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <LuCircle />
              </span>
              Arabic
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <LuCircle />
              </span>
              Spanish
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <LuCircle />
              </span>
              Turkish
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex justify-center items-center pl-6 lgl:pl-0 ">
              <Image
                src="/profilePic.png"
                alt="Profile Picture"
                className="rounded-lg h-full object-cover lgl:grayscale group-hover:grayscale-0 group-hover:-translate-x-1 group-hover:-translate-y-1 duration-300 "
                width={400}
                height={400}
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-[19rem] h-[19rem] border-2 border-textGreen rounded-md group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
