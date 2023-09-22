import React from "react";
import Zoom from "react-reveal/Zoom";
import resume from "../assets/Berkley-Bryan-Resume.pdf";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#012f45] text-gray-300">
      <Zoom cascade>
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className=" w-full flex justify-center items-center flex-col mb-7">
            <p className="text-6xl font-bold inline border-b-4 border-cyan-500 text-center ">
              Contact
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-2">
            {/* Phone */}
            <button className="bg-sky-800 h-32 rounded-lg shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
              <a
                className="flex grid items-center w-full text-gray-300"
                href="tel:6622009587"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-4xl inline border-b-2 border-cyan-500 text-gray-300">
                  Phone
                </p>
                <p className="text-2xl text-gray-300 py-2">
                  662, two hundred, 9587
                </p>
              </a>
            </button>
            {/* Email */}
            <button className="bg-sky-800 h-32 rounded-lg shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
              <a
                className="flex grid items-center w-full text-gray-300"
                href="mailto:dev@berkley.pro"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-4xl inline border-b-2 border-cyan-500 text-gray-300">
                  Email
                </p>
                <p className="break-words text-2xl text-gray-300 py-2">
                  dev [at] berkley [dot] pro
                </p>
              </a>
            </button>
            {/* LinkedIn */}
            <button className="bg-sky-800 h-32 rounded-lg shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
              <a
                className="flex grid items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/bryan-berkley-064833191/"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-4xl inline border-b-2 border-cyan-500 text-gray-300">
                  LinkedIn
                </p>
                <p className="text-2xl text-gray-300 py-2">
                  Click to Open My Profile!
                </p>
              </a>
            </button>
            {/* Resume */}
            <button className="bg-sky-800 h-32 rounded-lg shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
              <a
                className="flex grid items-center w-full text-gray-300"
                href={resume}
                download="Berkley_Bryan__resume"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-4xl inline border-b-2 border-cyan-500 text-gray-300">
                  Resume
                </p>
                <p className="text-2xl text-gray-300 py-2">
                  Click to Download!
                </p>
              </a>
            </button>
          </div>
        </div>
      </Zoom>
    </div>
  );
};
export default Contact;
