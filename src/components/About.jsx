import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#012f45] text-gray-300"
    >
      <Zoom cascade>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className=" py-16 rounded-md bg-sky-800 flex flex-col justify-center items-center w-4/6">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
              <div className="sm:text-right pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-cyan-300">
                  About
                </p>
              </div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className="sm:text-right text-4xl font-bold">
                <p>
                  Aloha. <br></br>
                  I'm Berkley, nice to meet you. Please take a look around.
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  A software developer from Honolulu with experience in building
                  Responsive and Scalable Web Apps in React and Angular.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-300 cursor-pointer"
            >
              Contact
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div></div>
      </Zoom>
    </div>
  );
};
export default About;
