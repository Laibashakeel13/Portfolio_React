import aboutpic from "../Assets/aboutpic.jpg";
import { ABOUT_TEXT } from "../Constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center"
      >
        <h1 className="text-4xl">
          About <span className="text-neutral-500">Me</span>
        </h1>
      </motion.div>

      <div className="flex flex-wrap justify-center lg:justify-between">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center"
        >
          <img
            src={aboutpic}
            alt="about"
            className="w-[370px] h-auto rounded-lg shadow-[0_4px_15px_rgba(255,255,255,0.6)]"
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
        >
          <p className="my-2 max-w-xl py-16 font-light tracking-tighter mb-2">
            {ABOUT_TEXT}
          </p>

          <div className="mt-4 w-full max-w-lg">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-1/4 text-sm text-white">C#</span>
                  <div className="w-3/4 bg-gray-800 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500"
                    ></motion.div>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="w-1/4 text-sm text-white">HTML & CSS</span>
                  <div className="w-3/4 bg-gray-800 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500"
                    ></motion.div>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="w-1/4 text-sm text-white">JavaScript</span>
                  <div className="w-3/4 bg-gray-800 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500"
                    ></motion.div>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="w-1/4 text-sm text-white">React JS</span>
                  <div className="w-3/4 bg-gray-800 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
