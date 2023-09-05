import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        className="text-lg font-titleFont tracking-wide text-textGreen lgl:pt-5"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.3 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Ahmed Alhusaini{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          I turn ideas into web-sites.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.3 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        {" "}
        I am a self-taught web developer. I have a strong foundation in
        front-end development and I am skilled in creating user-friendly and
        responsive web applications.{" "}
      </motion.p>
      <Link href="#projects" className="nav-link">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.3 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my projects!
        </motion.button>
      </Link>
    </section>
  );
};

export default Banner;
