import { PROJECTS } from "../Constants";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <img
                  src={project.image}
                  width={200}
                  height={200}
                  alt={project.title}
                  className="mb-6 rounded-lg shadow-[0_4px_15px_rgba(255,255,255,0.6)] bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:opacity-80"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit"
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
