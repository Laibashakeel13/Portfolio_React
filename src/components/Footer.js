import React from "react";
import logo from "../Assets/logo.png";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="footer" className="text-white py-8">
      {" "}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="logo"
              className="h-24 w-auto mx-auto md:mx-0"
            />

            <p className="text-neutral-300">
              Dedicated to crafting impactful digital experiences. <br />
              Specialized in web and software development.
            </p>
          </div>
        </div>

        <hr className="my-6 border-neutral-500" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-neutral-400 text-sm text-center md:text-left">
            &copy; 2025 Laiba Shakeel. All rights reserved.
          </p>

          <div className="m-8 flex items-center justify-center gap-6 text-3xl text-white">
            <a
              href="https://www.linkedin.com/in/laiba-shakeel-884026265/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110 hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Laibashakeel13"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110 hover:text-gray-700"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/LShakeel45497"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110 hover:text-blue-400"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="https://www.facebook.com/laiba.shakeel.9003"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110 hover:text-blue-700"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/laeeba.s"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110 hover:text-pink-600"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
