import React from "react";
import { FaGuitar } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiDesktop } from "react-icons/bi";
import { IconContext } from "react-icons";

function Interests() {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="interests">
      <p
        style={{ color: "#F1F1F9" }}
        className="text-2xl text-black  md:text-4xl font-bold text-center pt-4"
      >
        Interests
      </p>

      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <div className="flex">
            <IconContext.Provider value={{ color: "#F1F1F9" }}>
              <FaGuitar className="mx-auto text-4xl" />
            </IconContext.Provider>
          </div>
          <p
            style={{ color: "#F1F1F9" }}
            className="mt-6 text-xl font-semibold text-center mb-2 font-mono"
          >
            Guitar
          </p>
          <a href="https://www.instagram.com/isleyguitar/">
            <IconContext.Provider value={{ color: "#F1F1F9" }}>
              <AiOutlineInstagram
                className="mx-auto text-4xl"
                onClick={() => {}}
              />
            </IconContext.Provider>
          </a>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <div className="flex">
            <IconContext.Provider value={{ color: "#F1F1F9" }}>
              <BiDesktop className="mx-auto text-4xl" />
            </IconContext.Provider>
          </div>
          <p
            style={{ color: "#F1F1F9" }}
            className="mt-6 text-xl font-semibold text-center font-mono"
          >
            Gaming
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <div className="flex">
            <IconContext.Provider value={{ color: "#F1F1F9" }}>
              <GiCookingPot className="mx-auto text-4xl" />
            </IconContext.Provider>
          </div>
          <p
            style={{ color: "#F1F1F9" }}
            className="mt-6 text-xl font-semibold text-center font-mono"
          >
            Cooking
          </p>
        </div>
      </div>
    </div>
  );
}

export default Interests;
