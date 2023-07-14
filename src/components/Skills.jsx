import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll"; 


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-1'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              <p className='py-4 text-2xl'>Here's a list of some of the tech I've worked with.</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='bg-sky-800 shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>HTML</p>
              </div>
              <div className='bg-sky-800 shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>CSS</p>
              </div>
              <div className='bg-sky-800 shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='bg-sky-800 shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>REACT</p>
              </div>
              <div className='bg-sky-800 shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>ANGULAR</p>
              </div>
              <div className='bg-sky-800 shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='bg-sky-800 shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='bg-sky-800 shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>SQL/NoSQL</p>
              </div>
              <div className='bg-sky-800 shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>DJANGO</p>
              </div>
              <div className='bg-sky-800 shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>PYTHON</p>
              </div>
              <div className='bg-sky-800 shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='bg-sky-800 shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>REACT NATIVE</p>
              </div>
          </div>
          <div>
          <Link
            to="work"
            smooth
            duration={500}
            className="group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
      </div>
    </div>
    
  );
};
export default Skills;