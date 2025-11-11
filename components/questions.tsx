// "use client";
// import { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Plus, Minus } from "lucide-react";
// import { Orbitron, Nunito } from "next/font/google";

// const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });
// const nunito = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// const faqs = [
//   {
//     question: "What services does Tozyotech offer?",
//     answer:
//       "We provide end-to-end IT and ITES solutions including web development, mobile app development, SaaS solutions, cloud integration, and digital marketing.",
//   },
//   {
//     question: "How long does it take to complete a project?",
//     answer:
//       "Project duration depends on complexity and requirements. On average, small projects take 2–4 weeks, while enterprise-level solutions may take several months.",
//   },
//   {
//     question: "Do you provide post-launch support?",
//     answer:
//       "Yes, we provide continuous support, maintenance, and updates even after deployment to ensure long-term stability and performance.",
//   },
//   {
//     question: "Can Tozyotech work with international clients?",
//     answer:
//       "Absolutely! We have experience working with clients across multiple time zones and regions, using modern communication tools to stay connected.",
//   },
//   {
//     question: "Do you offer UI/UX design services?",
//     answer:
//       "Yes. Our creative team crafts modern, responsive, and user-friendly designs that enhance user experience and reflect your brand identity.",
//   },
// ];

// export default function FaqSection() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out",
//       once: true,
//       offset: 100,
//     });
//   }, []);

//   const toggleFAQ = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="w-full py-16 px-4 sm:px-10 md:px-20 bg-[url('/bg5.jpg')]  bg-no-repeat">
//       <div className="max-w-5xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-10" data-aos="fade-up">
//           <h2 className={`${orbitron.className} text-3xl md:text-4xl font-bold mb-4`}>
//             Frequently Asked Questions
//           </h2>
//           <p className={`${nunito.className} text-gray-600 text-sm md:text-base`}>
//             Here are some of the most common questions our clients ask before starting a project.
//           </p>
//         </div>

//         {/* FAQ Accordion */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border border-gray-200 rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
//             >
//               {/* Question */}
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full flex justify-between items-center p-4 md:p-5 text-left"
//               >
//                 <h3
//                   className={`${nunito.className} text-[15px] md:text-lg font-bold text-gray-800`}
//                 >
//                   {faq.question}
//                 </h3>
//                 <span className="text-gray-600">
//                   {activeIndex === index ? (
//                     <Minus className="w-5 h-5" />
//                   ) : (
//                     <Plus className="w-5 h-5" />
//                   )}
//                 </span>
//               </button>

//               {/* Answer */}
//               <div
//                 className={`overflow-hidden transition-all duration-500 ${
//                   activeIndex === index ? "max-h-40 md:max-h-48 p-4 pt-0 md:p-5 md:pt-0" : "max-h-0"
//                 }`}
//               >
//                 <p
//                   className={`${nunito.className} text-gray-600 text-sm md:text-base leading-relaxed`}
//                 >
//                   {faq.answer}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Plus, Minus } from "lucide-react";
import { Orbitron, Nunito } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const faqs = [
  {
    question: "What services does Tozyotech offer?",
    answer:
      "We provide end-to-end IT and ITES solutions including web development, mobile app development, SaaS solutions, cloud integration, and digital marketing.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project duration depends on complexity and requirements. On average, small projects take 2–4 weeks, while enterprise-level solutions may take several months.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we provide continuous support, maintenance, and updates even after deployment to ensure long-term stability and performance.",
  },
  {
    question: "Can Tozyotech work with international clients?",
    answer:
      "Absolutely! We have experience working with clients across multiple time zones and regions, using modern communication tools to stay connected.",
  },
  {
    question: "Do you offer UI/UX design services?",
    answer:
      "Yes. Our creative team crafts modern, responsive, and user-friendly designs that enhance user experience and reflect your brand identity.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-10 md:px-20  relative overflow-hidden">
      {/* 🧱 Grid with 70/30 split */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[70%_30%] gap-7 items-start ">
        {/* Left Side: FAQ */}
        <div data-aos="fade-right ">
          <div className="mb-10 text-center ">
            <h2 className={`${orbitron.className} text-3xl md:text-4xl font-bold mb-4`}>
              Frequently Asked Questions
            </h2>
            <p className={`${nunito.className} text-gray-600 text-sm md:text-base`}>
              Here are some of the most common questions our clients ask before starting a project.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 md:p-5 text-left"
                >
                  <h3
                    className={`${nunito.className} text-[15px] md:text-lg font-bold text-gray-800`}
                  >
                    {faq.question}
                  </h3>
                  <span className="text-gray-600">
                    {activeIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeIndex === index
                      ? "max-h-40 md:max-h-48 p-4 pt-0 md:p-5 md:pt-0"
                      : "max-h-0"
                  }`}
                >
                  <p
                    className={`${nunito.className} text-gray-600 text-sm md:text-base leading-relaxed`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div
          className="relative flex justify-center "
          data-aos="fade-left"
        >
          <img
            src="/girl2.png"
            alt="Girl illustration"
            className="w-72 md:w-80 lg:w-[370px] object-contain md:absolute md:top-10 md:right-0 border-b-2 border-gray-400 "
           
          />
        </div>
      </div>
    </section>
  );
}
