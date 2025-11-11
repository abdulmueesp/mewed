"use client";
import React from "react";
import { Orbitron } from "next/font/google";
import { Nunito } from "next/font/google";
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
  });
const GradientSection = () => {
  return (
    <section className="flex justify-center items-center py-16 bg-transparent">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className={`${orbitron.className} text-2xl md:text-4xl font-extrabold text-black mb-2`}>
          Let’s Build Something Great
        </h2>
        <p className={`${nunito.className} text-gray-500 text-sm md:text-base max-w-md`}>
          Join hands with us to create impactful digital experiences.
        </p>

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
    </section>
  );
};

export default GradientSection;
