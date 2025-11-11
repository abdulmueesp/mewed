"use client";
import {
  Globe,
  Smartphone,
  Megaphone,
  Palette,
  Brush,
  Code2,
  Wrench,
  ShieldCheck
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Orbitron } from "next/font/google";
import { Nunito } from "next/font/google";
import { useEffect } from "react";
const nunito = Nunito({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
  });
const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "700"],
  });
const services = [
  {
    title: "Website Development",
    icon: <Globe className="h-10 w-10 text-blue-500 drop-shadow-[0_6px_8px_rgba(75,85,99,0.5)] transition-transform duration-300 group-hover:rotate-6" />,
    desc: "Responsive, SEO-friendly websites that deliver performance and beautiful user experiences.",
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="h-10 w-10 text-green-500 drop-shadow-[0_6px_8px_rgba(75,85,99,0.5)] transition-transform duration-300 group-hover:-rotate-6" />,
    desc: "Native and cross-platform apps that help your brand connect with users on the go.",
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone className="h-10 w-10 text-pink-500 drop-shadow-[0_6px_8px_rgba(75,85,99,0.5)] transition-transform duration-300 group-hover:rotate-6" />,
    desc: "Boost your visibility and reach with data-driven social media and SEO campaigns.",
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="h-10 w-10 text-yellow-500 drop-shadow-[0_6px_8px_rgba(75,85,99,0.5)] transition-transform duration-300 group-hover:-rotate-6" />,
    desc: "Creative and intuitive design solutions focused on user experience and visual appeal.",
  },
  {
    title: "Branding Solutions",
    icon: <Brush className="h-10 w-10 text-purple-500 transition-transform duration-300 group-hover:rotate-6" />,
    desc: "Build a strong identity through consistent branding, logos, and design strategy.",
  },
  {
    title: "Software Solutions / Custom Tools",
    icon: <Code2 className="h-10 w-10 text-orange-500 drop-shadow-[0_6px_8px_rgba(75,85,99,0.5)] transition-transform duration-300 group-hover:-rotate-6" />,
    desc: "Tailor-made software solutions that automate and enhance your business processes.",
  },
  {
    title: "Quality Assurance",
    icon: <ShieldCheck className="h-10 w-10 text-teal-500 drop-shadow-[0_6px_8px_rgba(75,85,99,0.5)] transition-transform duration-300 group-hover:rotate-6" />,
    desc: "Comprehensive testing and QA services to ensure high-quality, bug-free software.",
  },
  {
    title: "Maintenance & Support",
    icon: <Wrench className="h-10 w-10 text-red-500 drop-shadow-[0_6px_8px_rgba(75,85,99,0.5)] transition-transform duration-300 group-hover:-rotate-6" />,
    desc: "Reliable support and continuous updates to keep your systems running smoothly.",
  },
];

export default function WhatWeDoSection() {
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: false, // 👈 run animation every time you scroll back
        offset: 100,
      });
      AOS.refresh();
    }, 300);
  
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="w-full px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 
        data-aos="zoom-in"
        className={`${orbitron.className} text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-gray-800`}>
          What We Do
        </h2>

        <div 
        
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
            data-aos="fade-up"
              key={index}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-100 transition-transform duration-900 ease-in-out  pt-16 pb-14 px-8 overflow-hidden w-full h-auto"
            >
             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex blur-3xl ">
  <div className="flex-1 bg-red-300"></div>
  <div className="flex-1 bg-blue-200"></div>
  <div className="flex-1 bg-green-200"></div>
  <div className="flex-1 bg-orange-200"></div>
</div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-3 md:space-y-8">
                {service.icon}
                <h3 className={`${nunito.className} text-lg font-bold text-gray-800`}>
                  {service.title}
                </h3>
                <p className={`${nunito.className} text-gray-600 text-sm sm:text-base leading-relaxed`}>
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
