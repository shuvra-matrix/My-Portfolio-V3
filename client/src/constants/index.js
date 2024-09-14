import {
  chatsonic,
  cloudifyapps,
  codecarbon,
  dalle2,
  djangolms,
  gemini,
  heartdesease,
  housekeeping,
  internshipone,
  internshiptwo,
  mernBlog,
  nodelibrary,
  onlineexamination,
  phpblog,
  phpecommers,
  socialvideov2,
  summerize,
  tcsIon,
} from "../assets";

const MyBio = {
  name: "Shuvra Chakrabarty",
  roles: ["Full Stack Developer", "Backend Developer", "Frontend Developer"],
  description:
    "I hold a B.Tech degree in Computer Science and Business Systems and have cultivated my expertise as a self-taught Full Stack Developer.I love making websites that are not only pretty but also easy to use and work well.",
  resume:
    "https://drive.google.com/file/d/1xvFnag1rTS0dwPo0G0FCFEc9BDxNOD7x/view?usp=sharing",
  linkdin: "https://www.linkedin.com/in/shuvra-chakrabarty-88a373217",
  github: "https://github.com/shuvra-matrix",
  email: "shuvrachakrabarty97@gmail.com",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Graph Ql",
        image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Django",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFFyY16N5NRhzoG24RqB7x8Ok2t8Bdgs-tuMsOBXS2Q&s",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
      },
      {
        name: "Figma",
        image:
          "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
      },
    ],
  },
];
const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "TCS iON",
    icon: tcsIon,
    iconBg: "#383E56",
    date: "Aug 2021 - Oct 2021",
    certificate: internshipone,
    points: [
      "In this Internship I developed a Hospitality Industry Management System.",
      "It covered Housekeeping Daily Activities, Room Service, Customer Complaints, and Monthly Roster.",
      "Admin manages users, tracks housekeeping tasks, and generates reports.",
      "Staff access personalized dashboards to handle tasks and update statuses, enhancing efficiency in daily activities, room services, and customer interactions.",
    ],
    skills: ["PHP", "JavaScript", "MySql", "HTML", "CSS"],
  },
  {
    title: "Web Developer Intern",
    company_name: "TCS iON",
    icon: tcsIon,
    date: "Oct 2021 - Dec 2021",
    certificate: internshiptwo,
    points: [
      "Developed an Examination Portal utilizing PHP, HTML, CSS, JavaScript, and MySQL.",
      "This dynamic platform empowers students to take exams seamlessly.",
      "Administrators enjoy the ability to effortlessly add, edit, and manage students, topics, and questions.",
    ],
    skills: ["Django", "Python", "JavaScript", "SQL Lite", "HTML", "CSS"],
  },
  {
    title: "Frontend Developer",
    company_name: "Cloudifyapps",
    icon: cloudifyapps,
    date: "Jun 2024 - Present",
    certificate: "",
    points: [
      "As a Frontend Developer at Cloudifyapps, I worked on a range of dynamic and innovative projects. My primary focus was building user-friendly and responsive interfaces using React. I collaborated closely with backend teams to ensure smooth integration between the frontend and backend, where I used FastAPI and PostgreSQL for creating and managing API services and databases",
      "I also contributed to full-stack development projects, gaining experience in backend architecture, API design, and database management, while always ensuring that the frontend remains performant and intuitive.",
    ],
    skills: [
      "React Js",
      "Fast Api",
      "Node Js",
      "Docker",
      "Mongodb",
      "PostgreSQL",
    ],
  },
];

const projects = [
  {
    name: "Gemini AI Web App",
    description:
      "Gemini AI is an innovative web application that brings an interactive chat experience with the help of Google Gemini Pro api. Built using Node.js, React.js, MongoDB, and Redux Toolkit, this app allows users to engage in text-based conversations with Gemini AI. The application features Google OAuth V2 for user authentication, enabling enhanced capabilities and personalization.",
    tags: [
      {
        name: "react",
        color: "#00cdc5",
      },
      {
        name: "mongodb",
        color: "#449f44",
      },
      {
        name: "node",
        color: "#7bd77b",
      },
      {
        name: "redux",
        color: "#d32c97",
      },
    ],
    category: ["web", "all"],
    isLive: true,
    liveLink: "https://geminichatai.netlify.app/",
    image: gemini,
    source_code_link: "https://github.com/shuvra-matrix/Gemini-Ai--MERN",
  },
  {
    name: "BlogSpot CMS Web App",
    description:
      "BlogSpot is a web application built using React.js for the frontend, Node.js for the backend, and MongoDB as the database. It allows users to read blogs posted by other writers and create and publish their own blogs. The project utilizes the TinyMCE text editor to enhance the blog writing experience.",
    tags: [
      {
        name: "react",
        color: "#00cdc5",
      },
      {
        name: "mongodb",
        color: "#449f44",
      },
      {
        name: "node",
        color: "#7bd77b",
      },
    ],
    category: ["web", "all"],
    isLive: true,
    liveLink: "https://publicblogspot.netlify.app/",
    image: mernBlog,
    source_code_link:
      "https://github.com/shuvra-matrix/MERN-CMS-PROJECT?tab=readme-ov-file",
  },
  {
    name: "Vidown Web App",
    description:
      "Vidown is a powerful web application that enables you to effortlessly download publicly accessible videos from popular social media platforms, including Twitter, YouTube, Facebook, and Instagram. Built with a robust backend in Node.js and a responsive frontend in React.js, Vidown provides a seamless and user-friendly video downloading experience.",
    tags: [
      {
        name: "react",
        color: "#00cdc5",
      },
      {
        name: "mongodb",
        color: "#449f44",
      },
      {
        name: "node",
        color: "#7bd77b",
      },
    ],
    category: ["web", "all"],
    isLive: true,
    liveLink: "https://vidown.netlify.app/",
    image: socialvideov2,
    source_code_link:
      "https://github.com/shuvra-matrix/SOCIAL-MEDIA-VIDEO-DOWNLOAD---MERN",
  },
  {
    name: "Chat Sonic Ai Chat App",
    description:
      "Chat Sonic is an innovative web application developed using Node.js, OpenAI API, and harnessing the capabilities of Stable Diffusion v2.1 models. This powerful app combines the functionalities of a chatbot, image generation, and Progressive Web App (PWA) support, offering users a seamless and immersive experience.",
    tags: [
      {
        name: "ejs",
        color: "#cfcc2c",
      },
      {
        name: "mongodb",
        color: "#449f44",
      },
      {
        name: "node",
        color: "#7bd77b",
      },
    ],
    category: ["web", "all"],
    isLive: false,
    liveLink: "https://vidown.netlify.app/",
    image: chatsonic,
    source_code_link: "https://github.com/shuvra-matrix/CHAT-SONIC",
  },
  {
    name: "DALL-E 2 Clone",
    description:
      "DALL-E 2 is a cutting-edge web application that harnesses the power of AI to generate images from text descriptions. Inspired by Stable Defusion 2.1, this app allows users to unleash their creativity by converting textual ideas into stunning visual artwork.",
    tags: [
      {
        name: "react",
        color: "#00cdc5",
      },
      {
        name: "mongodb",
        color: "#449f44",
      },
      {
        name: "node",
        color: "#7bd77b",
      },
    ],
    category: ["web", "all"],
    isLive: true,
    liveLink: "https://dalle2ai.netlify.app/",
    image: dalle2,
    source_code_link: "https://github.com/shuvra-matrix/DALL-E-2-Clone--MERN-",
  },
  {
    name: "All Url File Size",
    description:
      "all-url-file-size is a Node.js module that allows you to retrieve the file size of a resource hosted at a given URL without downloading it while specifying the format (mb, kb, or bytes). This can be useful for various purposes, such as checking the size of remote files before deciding whether to download them.",
    tags: [
      {
        name: "javascript",
        color: "#e5e249",
      },
      {
        name: "node",
        color: "#7bd77b",
      },
    ],
    category: ["other", "all"],
    isLive: false,
    liveLink: "https://code-carbon.onrender.com/",
    image: nodelibrary,
    source_code_link: "https://github.com/shuvra-matrix/all-url-file-size",
  },
  {
    name: "Code Carbon",
    description:
      "Code Carbon is a powerful and versatile web app that allows users to easily share their code in image format. With support for all types of programming languages, users can showcase their skills and share their work with friends, colleagues, and the wider programming community with ease.",
    tags: [
      {
        name: "ejs",
        color: "#cfcc2c",
      },
      {
        name: "mongodb",
        color: "#449f44",
      },
      {
        name: "node",
        color: "#7bd77b",
      },
    ],
    category: ["web", "all"],
    isLive: true,
    liveLink: "https://code-carbon.onrender.com/",
    image: codecarbon,
    source_code_link: "https://github.com/shuvra-matrix/CODE-CARBON",
  },
  {
    name: "Synop Web App",
    description:
      "Synop is a powerful and user-friendly web application that simplifies the process of summarizing articles from URLs. Whether you're a student looking to extract key information from research papers or a busy professional trying to stay informed, Synop has got you covered. ",
    tags: [
      {
        name: "react",
        color: "#00cdc5",
      },
      {
        name: "mongodb",
        color: "#449f44",
      },
      {
        name: "node",
        color: "#7bd77b",
      },
    ],
    category: ["web", "all"],
    isLive: true,
    liveLink: "https://synops.netlify.app/",
    image: summerize,
    source_code_link:
      "https://github.com/shuvra-matrix/summarize-articles--MERN-",
  },
  {
    name: "Housekeeping Management System",
    description:
      "I developed a Hospitality Industry Management System.It covered Housekeeping Daily Activities, Room Service, Customer Complaints, and Monthly Roster. Admin manages users, tracks housekeeping tasks, and generates reports. Staff access personalized dashboards to handle tasks and update statuses, enhancing efficiency in daily activities, room services, and customer interactions.",
    tags: [
      {
        name: "python",
        color: "#d9523b",
      },
      {
        name: "sql lite",
        color: "#e18f24",
      },
      {
        name: "django",
        color: "#1aab2d",
      },
    ],
    category: ["web", "all"],
    isLive: false,
    liveLink: "https://synops.netlify.app/",
    image: housekeeping,
    source_code_link:
      "https://github.com/shuvra-matrix/-Housekeeping-Management-System-in-the-Hospitality-Industry",
  },
  {
    name: "E Commerce Website",
    description:
      "Embark on a seamless online shopping journey with our E-Commerce Website Development project, meticulously crafted using PHP and SQL. This dynamic platform presents two distinctive sections: one tailored for users and another for administrators, ensuring a holistic and efficient experience for all stakeholders.",

    tags: [
      {
        name: "php",
        color: "#d743bd",
      },
      {
        name: "sql",
        color: "#e18f24",
      },
      {
        name: "javascript",
        color: "#e5e249",
      },
    ],
    category: ["web", "all"],
    isLive: false,
    liveLink: "https://synops.netlify.app/",
    image: phpecommers,
    source_code_link:
      "https://github.com/shuvra-matrix/E-Commerce-Website-Using-PHP?tab=readme-ov-file",
  },
  {
    name: "Heart Disease Prediction",
    description:
      "This project focuses on predicting heart disease probabilities through computerized models and developing a web application to aid medical professionals and patients. The research explores various machine learning algorithms applied to a dataset, emphasizing dataset analysis and model development. The paper also identifies key contributing characteristics, providing insights for cost-effective patient trials by focusing on relevant features.",
    tags: [
      {
        name: "python",
        color: "#d9523b",
      },
      {
        name: "sql lite",
        color: "#e18f24",
      },
      {
        name: "django",
        color: "#1aab2d",
      },
    ],
    category: ["other", "all", "web"],
    isLive: false,
    liveLink: "https://synops.netlify.app/",
    image: heartdesease,
    source_code_link:
      "https://github.com/shuvra-matrix/HEART_DISEASE_PREDICTION",
  },
  {
    name: "Mon Blog CMS App",
    description:
      "Mon Blog a dynamic and user-friendly blogging platform that empowers users to explore a diverse range of content and express their thoughts through personalized blog posts. Whether you're a passionate writer, an avid reader, or someone looking to share your unique perspectives with the world, Mon Blog has you covered.",
    tags: [
      {
        name: "php",
        color: "#d743bd",
      },
      {
        name: "sql",
        color: "#e18f24",
      },
      {
        name: "javascript",
        color: "#e5e249",
      },
    ],
    category: ["all", "web"],
    isLive: true,
    liveLink: "https://shuvra.epizy.com/",
    image: phpblog,
    source_code_link: "https://github.com/shuvra-matrix/PHP-CMS",
  },
  {
    name: "School Management System",
    description:
      "I have developed a School Management System and Learning Management System (LMS) using Django. The administrator has the capability to add, modify, and manage teachers, students, classes, and departments. Teachers are empowered to create classes, assign assignments, and upload class notes. Students, on the other hand, can view their assignments, submit them, and track their academic progress.",
    tags: [
      {
        name: "python",
        color: "#d9523b",
      },
      {
        name: "sql lite",
        color: "#e18f24",
      },
      {
        name: "django",
        color: "#1aab2d",
      },
    ],
    category: ["all", "web"],
    isLive: false,
    liveLink: "https://synops.netlify.app/",
    image: djangolms,
    source_code_link: "https://github.com/shuvra-matrix/LMS-Using-Django",
  },
  {
    name: "Online Examination Portal",
    description:
      " I developed an Examination Portal utilizing PHP, HTML, CSS, JavaScript, and MySQL. This dynamic platform empowers students to take exams seamlessly, while administrators enjoy the ability to effortlessly add, edit, and manage students, topics, and questions.",
    tags: [
      {
        name: "php",
        color: "#d743bd",
      },
      {
        name: "sql",
        color: "#e18f24",
      },
      {
        name: "javascript",
        color: "#e5e249",
      },
    ],
    category: ["all", "web"],
    isLive: false,
    liveLink: "https://synops.netlify.app/",
    image: onlineexamination,
    source_code_link:
      "https://github.com/shuvra-matrix/Online-Examination-Portal",
  },
];

export { experiences, projects, MyBio };
