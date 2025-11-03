
"use client";

import RubiksCube from "@/components/CubeScene";
import Header from "@/components/header";
import { Orbitron } from "next/font/google";
import { Exo_2, Nunito } from "next/font/google";
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Header />

      <div className="w-full h-min md:h-[500px] flex flex-col md:flex-row items-center md:justify-center px-3 md:px-20 mt-4 md:mt-0  ">

        {/* LEFT SIDE - Quote Section */}
        <div className="relative w-full md:w-[55%] h-min md:h-full flex flex-col items-start text-left pt-3 md:pt-[65px] bg-gray-50 overflow-hidden ">

          {/* ✨ Animated shapes - top right only */}
          <div className="absolute  inset-0 z-0">
            {/* Group 1 - large square cluster */}
            <div className="hidden md:block absolute top-6 right-[5%] w-36 h-36 animate-rotate-slow-rev opacity-40">

              <div className="absolute w-10 h-10 bg-violet-400 rounded-full top-1 left-8"></div>

              <div className="absolute top-12 left-16   border-l-[20px] border-l-transparent 
  border-r-[20px] border-r-transparent 
  border-b-[35px] border-b-green-400 
  opacity-50 animate-rotate-slow-rev"></div>
              <div className="absolute w-6 h-6 bg-red-400  top-20 left-4"></div>
            </div>

            <div className="absolute top-1 left-[1%] w-36 h-36 animate-rotate-slow opacity-40">
              {/* <div className="absolute w-10 h-10 bg-violet-400 rounded-full top-1 left-8"></div> */}
              <div className="absolute top-1 left-8  border-l-[20px] border-l-transparent 
  border-r-[20px] border-r-transparent 
  border-b-[35px] border-b-violet-500 
  opacity-50 animate-rotate-slow-rev"></div>
              <div className="absolute w-8 h-8 bg-green-400 rounded-md top-10 left-16"></div>
              <div className="absolute w-6 h-6 bg-pink-400 rounded-full top-20 left-4"></div>
            </div>

            {/* Group 2 - large circle cluster */}
            <div className="hidden md:block absolute top-[50%] right-[5%] w-32 h-32 animate-rotate-slow-rev opacity-50">
              <div className="absolute w-8 h-8 bg-pink-400 rounded-md top-2 left-4"></div>

            </div>
            <div className="hidden md:block absolute top-[60%] left-[50%] w-32 h-32 animate-rotate-slow-rev opacity-50">
              <div
                className="absolute top-[50%] left-[4%] w-0 h-0 
  border-l-[20px] border-l-transparent 
  border-r-[20px] border-r-transparent 
  border-b-[35px] border-b-green-400 
  opacity-50 animate-rotate-slow-rev"
              ></div>
            </div>
          </div>

          {/* Foreground Text */}
          <div className="relative z-10">
            <h1
              className={`${orbitron.className} text-2xl md:text-5xl font-extrabold leading-tight`}
            >
              Building{" "}Tomorrow
              <span className="bg-clip-text text-gray-600 ">’</span>
              s Solutions Today
            </h1>

            <p className={`${nunito.className} mt-6 text-gray-500 text-[15px] md:text-lg max-w-md`}>
              <strong>Tozyotech</strong> provides end-to-end software solutions, from custom development to enterprise-grade applications.
            </p>
          </div>
          {/* <div className="p-1 rounded-md flex justify-center items-center border border-gray-400 mt-6 md:mt-10">
            <button
              className={`${orbitron.className} px-6 md:px-8 py-2 text-white font-semibold rounded-md 
    bg-gradient-to-r from-[#e23a03] to-[#9c1607] `}
            >
              Get Connected
            </button>
          </div> */}
          <div className="p-1 rounded-md flex justify-center items-center border border-gray-400 mt-6 md:mt-10">
  <button
    className={`${orbitron.className} relative overflow-hidden px-6 md:px-8 py-2 text-white font-semibold rounded-md bg-gradient-to-r from-[#e23a03] to-[#9c1607]`}
  >
    <span className="relative z-10">Get Connected</span>

    {/* Continuous Shine Line */}
    <span className="absolute top-0 left-[-100%] w-[80px] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent transform skew-x-[-20deg] animate-shine" />
  </button>
</div>

        </div>

        {/* RIGHT SIDE - Cube */}
        <div className="hidden md:flex relative w-full md:w-[50%] h-[150px] md:h-full md:pl-[50px] md:items-center bg-gray-50">

          <div className="hidden md:absolute md:block inset-0 z-0">
            <div className="absolute top-[10%] right-[12%] w-14 h-14 bg-yellow-400 rounded-md opacity-40 animate-rotate-slow"></div>

            <div className="absolute top-[60%] right-[20%]   border-l-[30px] border-l-transparent 
  border-r-[30px] border-r-transparent 
  border-b-[45px] border-b-green-400 
  opacity-50 animate-rotate-slow-rev"></div>
          </div>
          {/* Cube */}
          <div className="relative z-10 h-[150px] md:h-min border-blue-500 ">
            <RubiksCube />
          </div>
        </div>


      </div>
      {/* about section  */}
      <div className="flex justify-center items-center px-4 sm:px-10 md:px-20 mb-8 mt-[40px]">
  <div className="w-full max-w-7xl h-auto md:h-[500px] rounded-md shadow-2xl flex flex-col md:flex-row items-center justify-between bg-white overflow-hidden">
    
    {/* LEFT SIDE - IMAGE */}
    <div className="w-full md:w-1/2 h-[250px] md:h-full flex justify-center items-center p-3">
      <img
        src="/about1.png"
        alt="About Us"
        className="w-full h-full object-cover rounded-md"
      />
    </div>

    {/* RIGHT SIDE - CONTENT */}
    <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col py-6 px-4 md:py-[15px] md:pr-12 gap-6">
      
      {/* TOP BUTTON */}
      <button className={`${nunito.className} p-1 border w-[110px] rounded-md text-sm`}>
        About Us
      </button>

      {/* HEADING + LINE */}
      <div className="flex flex-col">
        <p className={`${orbitron.className} text-black text-2xl md:text-3xl font-semibold mb-1`}>
          We Build Software That Brings <br className="hidden md:block" />
          Your Ideas to Life
        </p>
        <img
          src="/lines.png"
          alt="Line Animation"
          className="w-[120px] md:w-[150px] h-[35px] md:h-[40px] ml-2 md:ml-4"
        />
      </div>

      {/* DESCRIPTION */}
      <p className={`${nunito.className} text-gray-600 text-sm md:text-[16px] leading-relaxed`}>
        <strong>Tozyotech</strong> is a forward-thinking software development company that provides end-to-end IT and ITES solutions. We specialize in transforming ideas into impactful digital products through our expertise in web, mobile, SaaS, and cloud technologies. With a strong focus on innovation, quality, and performance, our skilled team delivers customized, scalable solutions that drive business growth and digital success.
      </p>

      {/* BOTTOM BUTTON */}
      <div className="inline-flex border border-gray-400 p-1 rounded-md w-fit">
        <button
          className={`${orbitron.className} px-6 py-2 bg-gradient-to-r from-[#e23a03] to-[#9c1607] text-white rounded-md font-semibold text-sm md:text-base`}
        >
          More About Us
        </button>
      </div>
    </div>
  </div>
</div>




      <div className="h-[300px] w-full  mb-4">
     

      </div>
    </div>
  );
}
