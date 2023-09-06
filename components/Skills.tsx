import React from "react";
import SectionTitle from "./SectionTitle";
import {
  TbBrandAngular,
  TbBrandBootstrap,
  TbBrandCss3,
  TbBrandFigma,
  TbBrandFirebase,
  TbBrandFramerMotion,
  TbBrandGit,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandNpm,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVercel,
} from "react-icons/tb";

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-containerSmall mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title={"Technologies I've Worked with:"} titleNo={"02"} />
      <div className="flex flex-col mt-12 gap-9">
        <div className="flex flex-row items-center gap-4">
          <h2>Languages:</h2>
          <span className="w-12 h-12 text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandHtml5 />
          </span>
          <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandCss3 />
          </span>

          <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandJavascript />
          </span>
          <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandTypescript />
          </span>
          <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandFramerMotion />
          </span>
        </div>
        <div className="flex flex-row items-center gap-4">
          <h2>Frameworks:</h2>
          <span className="w-12 h-12 text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandAngular />
          </span>
          <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandNextjs />
          </span>
          <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandReact />
          </span>
          <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandTailwind />
          </span>
          <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandBootstrap />
          </span>
        </div>
        <div className="flex flex-row items-center gap-4 mdl:ml-2/3">
          <h2>Tools:</h2>
          <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandFigma />
          </span>
          <span className="w-12 h-12 text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandFirebase />
          </span>
          <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandNpm />
          </span>
          <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGit />
          </span>
          <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandVercel />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
