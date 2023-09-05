import React from "react";
import SectionTitle from "./SectionTitle";

const Contact = () => (
  <section
    id="contact"
    className="max-w-contentContainer mx-auto py-24 xl:py-36 flex flex-col gap-4 items-center justify-center"
  >
    <p className="font-titleFont text-lg text-textGreen font-semibold felx items-center tracking-wide">
      {" "}
      04. What`s Next?
    </p>
    <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
    <p className="max-w-[600px] text-center text-textDark">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
      doloremque, voluptates nulla ullam eius animi?
    </p>
    <a href="mailto:ahmed.a.alhusaini@gmail.com">
      {" "}
      <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration300">
        Say Hello
      </button>
    </a>
  </section>
);

export default Contact;
