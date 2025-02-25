import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-containermd mx-auto lgl:px-20 py-24"
    >
      <SectionTitle title={"Things I have Built"} titleNo={"03"} />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {/* Project one */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="w-full flex flex-col items-center justify-center gap-28 mt-10"
        >
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://hangflow.vercel.app"
              target="_blank"
            >
              <div>
                <Image
                  src="/hangflow2.png"
                  alt="project1"
                  width={1000}
                  height={1000}
                  className="rounded-lg"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-left xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">Hangflow</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md ">
                HangFlow ry is a non-profit youth organization located in Turku,
                founded by the passion and drive of young activists in the
                summer of 2020.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJs</li>
                <li>Tailwind</li>
                <li>i18next</li>
                <li>Next Routing</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/ProfMoriartey/hangflow"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  {" "}
                  <TbBrandGithub />
                </a>
                <a
                  href="https://hangflow.vercel.app"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  {" "}
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Project two */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="w-full flex flex-col items-center justify-center gap-28 mt-10"
        >
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://aramis-portfolio.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  src="/aramis-por.png"
                  alt="project2"
                  width={1000}
                  height={1000}
                  className="rounded-lg"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-left z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">Tutor's Personal Protfolio</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md ">
                A personal portfolio website for an English and Spanish tutor.
                Built with NextJs, TypeScript and Tailwind. Using NextJs routing
                and framer motion`s smooth animation makes the website easy to
                navigate and user friendly. Light and dark theme support.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJs</li>
                <li>TypeScript</li>
                <li>Framer Motion</li>
                <li>Tailwind</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/ProfMoriartey/aramis-portfolio"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  {" "}
                  <TbBrandGithub />
                </a>
                <a
                  href="https://aramis-portfolio.vercel.app/"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  {" "}
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Project three */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="w-full flex flex-col items-center justify-center gap-28 mt-10"
        >
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://ui-ux-demo.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  src="/uiux-website.png"
                  alt="project1"
                  width={1000}
                  height={1000}
                  className="rounded-lg"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-left xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">Modern UI-UX Website</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md ">
                To practice using Tailwind in NextJs forbuilding responsive and
                cool looking websites, I decided to design a website with a
                modern style.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJs</li>
                <li>Tailwind</li>
                <li>Figma</li>
                <li>Radix UI Library</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/ProfMoriartey/ui-ux-website"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  {" "}
                  <TbBrandGithub />
                </a>
                <a
                  href="https://ui-ux-demo.vercel.app/"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  {" "}
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Project four */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="w-full flex flex-col items-center justify-center gap-28 mt-10"
        >
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://add-to-cart-cute-cat.netlify.app/"
              target="_blank"
            >
              <div>
                <Image
                  src="/shopping-cart.png"
                  alt="project2"
                  width={1000}
                  height={1000}
                  className="rounded-lg"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-left z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">Cart Cat</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md ">
                A simple project to learn how to use Firebase. It works as an
                online up to date shopping list that can update live whenever
                someone adds or removes an item as it is connected to a live
                database.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Firebase</li>
                <li>Netlify Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/ProfMoriartey/cart-cat"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  {" "}
                  <TbBrandGithub />
                </a>
                <a
                  href="https://add-to-cart-cute-cat.netlify.app/"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  {" "}
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
