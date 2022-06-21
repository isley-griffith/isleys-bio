import React from "react";
import { FaGuitar } from "react-icons/fa";
import { GrDesktop } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
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
            <FaGuitar className="mx-auto text-4xl" />
          </div>
          <p
            style={{ color: "#F1F1F9" }}
            className="mt-6 text-xl font-semibold text-center mb-2 font-mono"
          >
            Guitar
          </p>
          <a href="https://www.instagram.com/isleyguitar/">
            <AiOutlineInstagram
              color="#2196f3"
              className="mx-auto text-4xl"
              onClick={() => {}}
            />
          </a>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <GrDesktop color="white" className="mx-auto text-4xl" />
          <p
            style={{ color: "#F1F1F9" }}
            className="mt-6 text-xl font-semibold text-center font-mono"
          >
            Gaming
          </p>
        </div>
      </div>
    </div>
  );
}

export default Interests;
