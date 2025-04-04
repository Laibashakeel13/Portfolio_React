import React from "react";
import { ReactTyped } from "react-typed"; 
import laibe from "../Assets/laibe.jpg";
import { motion } from "framer-motion";
import { HOME_CONTENT } from "../Constants";

const Home = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 pl-6 flex flex-col items-center">
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="pb-4 text-4xl md:text-6xl lg:text-8xl font-thin tracking-tight lg:mt-16"
          >
            Laiba Shakeel
          </motion.h1>

          <div>
            <ReactTyped
              className="text-lg sm:text-2xl md:text-4xl font-medium bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-center sm:text-left sm:whitespace-nowrap whitespace-nowrap"
              strings={[
                "Undergraduate Software Engineer",
                "Full Stack Developer",
                "AI Enthusiast",
              ]}
              typeSpeed={60}
              backSpeed={50}
              loop
            />
          </div>

          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-2 max-w-xl py-6 font-light tracking-tighter mb-2 text-center sm:text-left"
          >
            {HOME_CONTENT}
          </motion.p>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex justify-center gap-6 mt-4 flex-wrap"
          >
            <button
              type="button"
              onClick={() => window.open("/LS Resume.pdf", "_blank")}
              className="px-5 py-2 text-lg font-light tracking-tighter text-white bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-full hover:bg-gradient-to-l transform hover:scale-105 transition-all duration-300"
            >
              View My Resume
            </button>

            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-5 py-2 text-lg font-light tracking-tighter text-white bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-full hover:bg-gradient-to-l transform hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </button>
          </motion.div>

          <div className="mt-8 lg:mt-0 lg:hidden">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              src={laibe}
              alt="Laiba Shakeel"
              className="w-[280px] md:w-[380px] h-auto rounded-lg shadow-[0_4px_15px_rgba(255,255,255,0.6)]"
            />
          </div>
        </div>

        <div className="hidden lg:flex lg:w-1/2 lg:p-8 justify-center">
          <div className="ml-32">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              src={laibe}
              alt="Laiba Shakeel"
              className="w-[380px] h-auto rounded-lg shadow-[0_4px_15px_rgba(255,255,255,0.6)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
