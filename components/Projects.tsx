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
                  src="/menupedia.png"
                  alt="First Project: Menupedia"
                  width={1000}
                  height={1000}
                  className="rounded-sm"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-left xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">Menupedia</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md ">
                Menupedia is a full-featured restaurant menu management
                platform. It allows restaurant owners to create, update, and
                manage digital menus through a secure admin dashboard. The
                system supports multiple languages, enabling global
                accessibility. The platform focuses on fast performance, clean
                UI, and SEO-friendly architecture.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJs 15</li>
                <li>Tailwind CSS</li>
                <li>Clerk</li>
                <li>Next-Intl</li>
                <li>Drizzle ORM</li>
                <li>PostgreSQL</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/ProfMoriartey/menu-hub"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  {" "}
                  <TbBrandGithub />
                </a>
                <a
                  href="https://menu-pedia.com"
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
              href="https://code-cooker.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  src="/code-cooker.png"
                  alt="Second Project: QR Code Cooker"
                  width={1000}
                  height={1000}
                  className="rounded-sm"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-left z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">QR Code Cooker</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md ">
                QR Code Cooker is a web app for generating and managing both
                static and dynamic QR codes. Users can customize the design,
                preview QR codes live, and track scan activity. The platform
                includes secure login via OAuth and offers a smooth UI for
                managing QR code data. It’s built for speed, reliability, and
                ease of use.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJs 15</li>
                <li>Tailwind CSS</li>
                <li>NextAuth</li>
                <li>Drizzle ORM</li>
                <li>PostgreSQL</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/ProfMoriartey/code-cooker"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  {" "}
                  <TbBrandGithub />
                </a>
                <a
                  href="https://code-cooker.vercel.app/"
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
              href="https://hangflow.org"
              target="_blank"
            >
              <div>
                <Image
                  src="/hangflow2.png"
                  alt="Third Project: Hangflow"
                  width={1000}
                  height={1000}
                  className="rounded-sm"
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
                <li>NextJs 15</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Next-Intl</li>
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
                  href="https://hangflow.org"
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
