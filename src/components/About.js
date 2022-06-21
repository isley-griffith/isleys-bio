import React from "react";
import { BiChevronDownCircle } from "react-icons/bi";
import { IconContext } from "react-icons";

import ScrollIntoView from "react-scroll-into-view";

function About() {
  return (
    <div>
      <div className="max-w-4xl mt-24 mx-auto pb-24 pt-12">
        <p
          style={{ color: "#F1F1F9" }}
          className="text-2xl text-black  md:text-4xl font-bold text-center"
        >
          Yo! 👋
        </p>
        <p
          style={{ color: "#F1F1F9" }}
          className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center"
        >
          I'm a passionate React developer. I enjoy playing guitar, video games
          in my free time, and making interesting personal programming projects.
        </p>
      </div>

      <ScrollIntoView selector="#tech">
        <IconContext.Provider value={{ color: "#F1F1F9" }}>
          <div className="mx-auto p-20">
            <BiChevronDownCircle className="animate-bounce mx-auto text-3xl" />
          </div>
        </IconContext.Provider>
      </ScrollIntoView>
    </div>
  );
}

export default About;
