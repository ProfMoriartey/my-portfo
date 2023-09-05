import { motion } from "framer-motion";
import React from "react";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Ahmed Alhusaini.{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          I build things for the web.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sed
        incidunt neque, deleniti odit corporis maiores, quidem voluptatibus quos
        quibusdam eaque facilis dolores doloremque nesciunt sit reiciendis nobis
        qui. Atque, nulla eveniet ipsam recusandae iure quidem, incidunt soluta
        quod tempore velit vero ullam architecto quae sed laboriosam. Blanditiis
        modi quis praesentium alias facere enim, rerum eaque tempora asperiores
        minima delectus, recusandae deleniti deserunt ullam. Eveniet alias
        reprehenderit, tempore corporis dolores dolor quidem voluptatum eaque
        rerum harum ad unde nostrum ratione neque reiciendis deserunt
        praesentium, ex exercitationem ullam.{" "}
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        Check out my projects!
      </motion.button>
    </section>
  );
};

export default Banner;
