import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll"; 
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          <div>
          I'm A
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500"></p>
          <br></br>
            <TypeAnimation
              sequence={[
                'Web Developer',
                1000,
                'Programmer',
                1000,
                'Traveler',
                1000,
                'Nerd' ,
                1000,
                'Technophile',
                1000,
              ]}
              speed={40}
              repeat={Infinity}
               />
          </div>
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
        I love working with technology and exploring new ways to build cool stuff.
          When I'm not in front of my computer, you can find me on a beach in Oahu.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      
    </div>
  </div>
  );
};
export default Home;