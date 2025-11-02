
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
              Tozyotech provides end-to-end software solutions, from custom development to enterprise-grade applications.
            </p>
          </div>
          <div className="p-1 rounded-md flex justify-center items-center border border-gray-400 mt-6 md:mt-10">
            <button
              className={`${orbitron.className} px-6 md:px-8 py-2 text-white font-semibold rounded-md 
    bg-gradient-to-r from-[#e23a03] to-[#9c1607] 
    shadow-md hover:opacity-90 hover:scale-[1.02] transition-all duration-300`}
            >
              Get Connected
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
      <div className="w-full h-[200px] border ">hi</div>
    </div>
  );
}
