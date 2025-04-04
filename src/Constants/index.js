import project1 from "../Assets/projects/NewsWave.png";
import project2 from "../Assets/projects/TaskMaster.png";
import project3 from "../Assets/projects/mvc.png";
import project4 from "../Assets/projects/har.png";
import project5 from "../Assets/projects/dictionary.png";
import project6 from "../Assets/projects/ccn.png";

export const HOME_CONTENT = `I am a skilled Full Stack Developer with experience in React.js, C#,
            and the .NET framework. I have worked on responsive front-end designs
            using Bootstrap, Redux, and React. My back-end expertise includes
            creating database solutions with SQL Server. Additionally, I am
            proficient in Java, C, Object-Oriented Programming (OOP), and Data
            Structures & Algorithms (DSA). Recently, I have explored Python for
            AI. I am passionate about building
            scalable and efficient applications while prioritizing user
            experience.`;

export const ABOUT_TEXT = ` I am a 6th-semester Software Engineering student with a 3.65 CGPA, a strong 
            foundation in programming and a passion for learning. I started my
            journey with C#, which paved the way for exploring .NET, ASP.NET,
            and MVC.NET frameworks. On the front end, I have built responsive
            and user-friendly websites using HTML, CSS, JavaScript, Bootstrap,
            Redux, and React.js. My experience also extends to back-end development,
            where I have worked on managing databases using SQL Server. In
            addition to full-stack development, I am currently diving into the
            world of AI, exploring their applications in solving real-world problems. 
            With a focus on developing scalable and efficient solutions, I am committed 
            to continuously expanding my skill set and contributing to impactful
            projects.`;

export const EXPERIENCES = [
  {
    duration: "July2024 - September2024",
    role: "Full Stack Developer",
    company: "JILANSOFT",
    description: `During my internship as a .NET Developer, I collaborated with a team to modernize an existing desktop application by transforming it into a fully functional web application using the ASP.NET framework. My contributions included working on front-end design, back-end logic implementation, and database integration to ensure efficient CRUD operations. This experience enhanced my technical skills, strengthened my ability to work effectively in a team environment, and allowed me to contribute to delivering a modernized solution aligned with industry standards.`,
    technologies: ["C#", "Asp.net", "SqlServer", "Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "NewsWave",
    image: project1,
    description:
      "I developed the NewsWave app using React and integrated the News API to fetch and display real-time news. The app features a clean and responsive design, built with Bootstrap for styling and React for dynamic functionality. This project enhanced my skills in API integration, component-based development, and responsive design.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    githubLink: "https://github.com/Laibashakeel13/NewsWave-ReactApp.git",
  },
  {
    title: "TextMaster",
    image: project2,
    description:
      "Created the app using React and Bootstrap, designed to analyze and manipulate text efficiently. The app includes features like text capitalization, word and character counting, removing extra spaces, and more. Its responsive design ensures a seamless user experience across devices. This project improved my skills in React development, state management, and user interface design.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    githubLink: "https://github.com/Laibashakeel13/TextMaster-ReactApp.git",
  },
  {
    title: "Hotel Management System",
    image: project3,
    description:
      "I developed a Hotel Management System using C#, MVC.NET, and SQL Server to streamline hotel operations. The system featured room booking, customer management, and billing with seamless database integration. This project improved my skills in full-stack development and implementing scalable MVC architecture.",
    technologies: ["C#", "MVC.net", "SQL Server"],
    githubLink: "https://github.com/Laibashakeel13/HMS_MVC.git",
  },
  {
    title: "Human Activity Recognition System",
    image: project4,
    description:
      "I developed a Human Activity Recognition System using a pre-trained ONNX model for activity classification, trained on nearly 400 videos. The system was built using Python for machine learning integration. This project enhanced my skills in implementing machine learning models and working with video data for activity recognition.",
    technologies: ["Python", "Django"],
    // githubLink:
  },
  {
    title: "Dictionary",
    image: project5,
    description:
      "A Dictionary application was developed using Java, enabling users to search for word meanings. The application offered a straightforward interface for quick and accurate lookups. It focused on improving skills in Java programming and data handling. The project helped enhance my understanding of application development and user interaction.",
    technologies: ["Java", "File Handling"],
    githubLink: "https://github.com/Laibashakeel13/Dictionary_Java.git",
  },
  {
    title: "Hotel Network Management",
    image: project6,
    description:
      "The Hotel Network Management system was developed as a CCN (Computer Communication Network) project using Cisco technologies. It focused on configuring and managing network devices to ensure seamless connectivity within the hotel. The project also involved monitoring network performance for efficient operation. This experience enhanced my skills in Cisco network configuration and troubleshooting.",
    technologies: ["CCN", "Cisco Networking"],
    githubLink:
      "https://github.com/Laibashakeel13/HotelNetwork_PacketTracer.git",
  },
];
