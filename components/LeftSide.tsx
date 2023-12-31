import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-6">
        <a href="https://github.com/ProfMoriartey" target="_blank">
          <span className="w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-alhusaini-75b1621a4"
          target="_blank"
        >
          <span className="w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a
          href="https://instagram.com/ahmedalhusaini_?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
        >
          <span className="w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
