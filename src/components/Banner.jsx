"use client";

import Image from "next/image";
import banner from "@/assets/me.png";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
const Banner = () => {
  return (
    //
    <>
      <div
        id="#home"
        className="scroll-smooth grid grid-cols-1 lg:grid-cols-2 gap-y-5 -mt-12 md:mt-0 lg:mt-12 lg:gap-y-0  lg:items-center  lg:gap-x-10 xl:gap-x-5"
      >
        <div className="order-2 lg:order-none text-center leading-relaxed lg:text-left">

          <h3 className=" text-2xl  md:text-3xl xl:text-4xl font-bold text-white">
           Hi,My Name is
          </h3>
          <p className="text-purple-500 lg:py-3 text-2xl md:text-4xl xl:text-5xl font-bold">
            Furqan Ahmad
          </p>

          <div className=" xl:text-4xl  text-xl xs:text-2xl md:text-3xl font-bold text-white     sm:static lg:absolute text-center mx-auto lg:text-left ">
            <span className=" pr-2 md:pr-3">I'm a</span>
            <Typewriter
              words={[
                "Mern stack developer",
                "Front End Developer",
                "Back End Developer",
                "React JS Developer",
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          <div className=" mt-8 sm:mt-4 lg:mt-16 flex space-x-3 items-center lg:items-baseline justify-center lg:justify-normal">
            <div className="bg-purple-900 text-white lg:font-bold px-3 py-1 md:px-7 md:py-3 hover:bg-gray-400 hover:text-purple-900 duration-200 rounded-lg">
              <a download target="_blank" rel="noopener noreferrer" href="/myResume.pdf">
                <button>Download Resume</button>
              </a>
            </div>
            <button className="bg-gray-400 text-purple-900 lg:font-bold px-3 py-1 md:px-7 md:py-3 hover:text-gray-400 hover:bg-purple-900 duration-200 rounded-lg">
              Hire Me
            </button>
          </div>
        </div>

        <div className="rounded-tl-[450px] order-1 lg:order-none rounded-tr-[400px] rounded-br-[420px] rounded-bl-[330px] overflow-hidden shadow-2xl shadow-purple-900 md:mb-12 lg:mb-0 ring ring-purple-500">
          <Image className="overflow-hidden " src={banner} />
        </div>
      </div>
    </>
  );
};

export default Banner;
