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
        {/* Languages */}
        <div className="flex flex-row items-center gap-4">
          <h2>Languages:</h2>
          <a
            href="https://www.w3schools.com/tags/tag_doctype.asp"
            target="_blank"
          >
            <span className="w-12 h-12 text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandHtml5 />
            </span>
          </a>
          <a href="https://www.w3schools.com/css/" target="_blank">
            <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandCss3 />
            </span>
          </a>

          <a href="https://www.javascript.com/" target="_blank">
            <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandJavascript />
            </span>
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandTypescript />
            </span>
          </a>
          <a href="https://www.framer.com/motion/" target="_blank">
            <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandFramerMotion />
            </span>
          </a>
        </div>
        {/* Frameworks  */}
        <div className="flex flex-row items-center gap-4">
          <h2>Frameworks:</h2>
          <a href="https://angular.io/" target="_blank">
            <span className="w-12 h-12 text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandAngular />
            </span>
          </a>
          <a href="https://nextjs.org/" target="_blank">
            <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandNextjs />
            </span>
          </a>
          <a href="https://react.dev/" target="_blank">
            <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandReact />
            </span>
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandTailwind />
            </span>
          </a>
          <a href="https://getbootstrap.com/" target="_blank">
            <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandBootstrap />
            </span>
          </a>
        </div>
        {/* Tools   */}
        <div className="flex flex-row items-center gap-4">
          <h2>Tools:</h2>
          <a href="https://www.figma.com/" target="_blank">
            <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandFigma />
            </span>
          </a>
          <a href="https://firebase.google.com/" target="_blank">
            <span className="w-12 h-12 text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandFirebase />
            </span>
          </a>
          <a href="https://www.npmjs.com/" target="_blank">
            <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandNpm />
            </span>
          </a>
          <a href="https://git-scm.com/" target="_blank">
            <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandGit />
            </span>
          </a>
          <a href="https://vercel.com/" target="_blank">
            <span className="w-12 h-12  text-4xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandVercel />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
