
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
    <div className="min-h-screen ">
      <Header />

      <div className="w-full h-[500px] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-4 ">
        
        {/* LEFT SIDE - Quote Section */}
        <div className="w-full md:w-[55%] h-full flex flex-col  items-start text-left pt-3 md:pt-[65px]">
          <h1
            className={`${orbitron.className} text-xl md:text-5xl  font-extrabold leading-tight`}
          >
            Building{" "}Tomorrow
            <span className="bg-clip-text text-gray-600">
              ’
            </span>
            s Solutions Today
          </h1>

          <p className={`${nunito.className} mt-4 text-gray-500 text-sm md:text-lg max-w-md`}>
          Tozyotech provides end-to-end software solutions, from custom development to enterprise-grade applications.
          </p>
        </div>

        {/* RIGHT SIDE - Cube */}
        <div className="w-full md:w-[45%] h-full flex justify-center items-center pt-4 md:pt-0  ">
          <RubiksCube />
        </div>
      </div>
    </div>
  );
}
