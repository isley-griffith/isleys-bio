import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiAdobephotoshop,
  SiNextdotjs,
  SiGraphql,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";

function Skills() {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p
        style={{ color: "#F1F1F9" }}
        className="text-2xl text-black  md:text-4xl font-bold text-center pt-4"
      >
        Tech Stack and Skills
      </p>

      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#2196f3" className="mx-auto text-4xl " />
          <p
            style={{ color: "#F1F1F9" }}
            className="mt-6 text-xl font-semibold text-center font-mono"
          >
            React
          </p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTypescript color="orange" className="mx-auto text-4xl" />
          <p
            style={{ color: "#F1F1F9" }}
            className="mt-6 text-xl font-semibold text-center font-mono"
          >
            TypeScript
          </p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJavascript color="#ffdf00" className="mx-auto text-4xl" />
          <p
            style={{ color: "#F1F1F9" }}
            className="mt-6 text-xl font-semibold text-center font-mono"
          >
            JavaScript
          </p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl" />
          <p
            style={{ color: "#F1F1F9" }}
            className="mt-6 text-base font-semibold text-center font-mono"
          >
            TailwindCSS
          </p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiNextdotjs color="#ffdf00" className="mx-auto text-4xl" />
          <p
            style={{ color: "#F1F1F9" }}
            className="mt-6 text-xl font-semibold text-center font-mono"
          >
            Next.js
          </p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiGraphql color="#ffdf00" className="mx-auto text-4xl" />
          <p
            style={{ color: "#F1F1F9" }}
            className="mt-6 text-xl font-semibold text-center font-mono"
          >
            GraphQL
          </p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiAdobephotoshop color="#2196f3" className="mx-auto text-4xl " />
          <p
            style={{ color: "#F1F1F9" }}
            className="mt-6 text-xl font-semibold text-center font-mono"
          >
            Photoshop
          </p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FiFigma color="orange" className="mx-auto text-4xl" />
          <p
            style={{ color: "#F1F1F9" }}
            className="mt-6 text-xl font-semibold text-center font-mono"
          >
            Figma
          </p>
        </div>
      </div>
      <ScrollIntoView selector="#interests">
        <div class="mx-auto p-20">
          <FaChevronDown class="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default Skills;
