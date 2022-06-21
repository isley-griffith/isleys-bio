import React from "react";
import profile from "../images/profilepic.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";
function Card() {
  return (
    <div className="w-full pt-12">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-white shadow-3xl rounded-full"
            src={profile}
            alt="profile face"
          />
        </div>
        <div className="text-center mt-5">
          <p
            style={{ color: "#F1F1F9" }}
            className="text-xl sm:text-2xl font-semibold text-gray-900 font-mono"
          >
            Isley Griffith
          </p>
          <div>
            <p
              style={{ color: "#F1F1F9" }}
              className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2 font-mono"
            >
              Software Developer at
              <a
                className="text-purple font-mono hover:font-bold"
                href="https://oliveai.com/?utm_campaign=Strategic_22_AlwaysOn-Awareness_PP&utm_source=google&utm_medium=cpc&utm_term=oliveai&gclid=Cj0KCQjw2MWVBhCQARIsAIjbwoOTNC3hVtFdfg2ibiXnEs0e7o9a3sK9l7nXQV8DEV1xemz0TYSizc8aAuqpEALw_wcB"
              >
                {" "}
                Olive
              </a>
            </p>
          </div>

          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href="https://github.com/isley-griffith"
            >
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href="https://www.linkedin.com/in/isley-griffith-683761180"
            >
              <FaLinkedin />
              <span class="sr-only">Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
