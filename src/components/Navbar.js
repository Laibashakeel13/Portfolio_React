import logo from "../Assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.6 }}
      className="mb-20 flex items-center justify-between py-4 px-6 w-full"
    >
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-24 w-auto" />
      </div>

      <button
        onClick={() =>
          document.getElementById("footer")?.scrollIntoView({
            behavior: "smooth",
          })
        }
        className="px-5 py-2 text-lg font-light tracking-tighter text-white bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-full hover:bg-gradient-to-l transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
      >
        Connect With Me
      </button>
    </motion.nav>
  );
};

export default Navbar;
