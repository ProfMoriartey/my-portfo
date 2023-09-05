import { motion } from "framer-motion";
import React from "react";
import { TiArrowForward } from "react-icons/ti";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Engineer <span className="text-textGreen tracking-wide">@ReactBD</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2020 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          reiciendis modi aperiam reprehenderit adipisci vitae totam suscipit
          porro, sunt repudiandae!
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          reiciendis modi aperiam reprehenderit adipisci vitae totam suscipit
          porro, sunt repudiandae!
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          reiciendis modi aperiam reprehenderit adipisci vitae totam suscipit
          porro, sunt repudiandae!
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
