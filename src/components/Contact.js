import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSuccessMessage("Your message is being sent...");
    setMessageVisible(true);

    emailjs
      .sendForm(
        "service_byiqcit",
        "template_k71fdxp",
        form.current,
        "Ye3_NW7v-Rda1yQQ4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Your message has been sent successfully!");

          setTimeout(() => {
            setMessageVisible(false);
          }, 2000);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Failed to send message. Please try again.");

          setTimeout(() => {
            setMessageVisible(false);
          }, 2000);
        }
      );
  };

  return (
    <div id="contact" className=" border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Contact <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="text-white w-full max-w-md"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text">
                  Let's
                </span>{" "}
                Talk
              </h2>
              <p className="text-neutral-400 mb-8">
                I'm currently available to take on new projects, so feel free to
                send me a message about anything that you want me to work on.
                You can contact me anytime.
              </p>
              <div className="space-y-6">
                <div className="flex items-center text-neutral-400">
                  <span className="text-gradient text-xl mr-4">✉️</span>
                  <span>laibashakeell13@gmail.com</span>
                </div>
                <div className="flex items-center text-neutral-400">
                  <span className="text-gradient text-xl mr-4">📞</span>
                  <span>+92 315 0972204</span>
                </div>
                <div className="flex items-center text-neutral-400">
                  <span className="text-gradient text-xl mr-4">📍</span>
                  <span>Karachi, Pakistan</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="text-white w-full max-w-md"
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="from_name" className="text-white block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    placeholder="Enter your name"
                    className="w-full bg-neutral-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="from_email" className="text-white block mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    placeholder="Enter your email"
                    className="w-full bg-neutral-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-white block mb-2">
                    Write your message here
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Enter your message"
                    className="w-full bg-neutral-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-start mt-8">
                  <button
                    type="submit"
                    className="px-5 py-2 text-lg font-light tracking-tighter text-white bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-full hover:bg-gradient-to-l transform hover:scale-105 transition-all duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>

              {messageVisible && successMessage && (
                <p
                  className="mt-4 text-center"
                  style={{
                    color: "rgb(251, 128, 170)",
                  }}
                >
                  {successMessage}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
