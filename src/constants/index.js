import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  Bootstap,
  chakraui,
  express,
  php,
  laravel,
  mysql,
  sequelize,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  IBT,
  Inaris,
  orvala,
  turu,
  kepo,
  Portofolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Bootstrap",
    icon: Bootstap,
  },
  {
    name: "chakra-ui",
    icon: chakraui,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "sequelize",
    icon: sequelize,
  },
];

const experiences = [
  {
    title: "Chief Technology Officer",
    company_name: "PT. Orvala Tour and travel",
    icon: orvala,
    iconBg: "white",
    date: "September 2019 - April 2022",
    points: [
      "Collaborating with web developers to build a user-friendly website design.",
      "Maintain and update information on the website.",
      "Creating technology-based business processes.",
    ],
  },
  {
    title: "Digital Marketing",
    company_name: "PT. Metatema Nusantara Abadi",
    icon: IBT,
    iconBg: "white",
    date: "April 2022 - Agustus 2022",
    points: [
      "Responsible for creating and implementing digital marketing strategies with a focus on increasing the number of users and trade volume of cryptocurrencies.",
      "Managing all social media accounts to increase product brand awareness.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Inaris",
    icon: Inaris,
    iconBg: "white",
    date: "Februari 2023 - Mei 2023",
    points: [
      "Collaborating with web developers to build a user-friendly website design.",
      "Maintain and update information on the website.",
      "Creating technology-based business processes.",
    ],
  },
];

const educations = [
  {
    major: "Master of Railway Engineering",
    university: "Rostov State Transport University Russia",
    description:
      "Specialist in passenger railway station management, GPA 3.79. Learn a lot of schematics, graphs and mathematical modeling. Completed the defenses thesis and got a perfect scores, graduated with distinction as an active student in campus activities.",
    year: "2015-2021",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    major: "Full Stack Web Developer",
    university: "Purwadhika Digital Technology School",
    description:
      "Intensive JavaScript training to become a full-stack web developer within 12 weeks. Learning various technologies to build websites that meet industry needs. Collaborating to build real projects using agile methodologies.",
    year: "August 2022 - January 2023 ",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Turu App",
    description:
      "Property rental application built using React.js on the front-end with the Chakra UI CSS framework and Express.js on the back-end using a MySQL database.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Chakra-Ui",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: turu,
    source_code_link: "https://github.com/imamahmadf/jcwdvl00701.git",
  },
  {
    name: "Kepo",
    description:
      "Social media web application built using React.js on the front-end with the Bootstrap CSS framework, and Express.js on the back-end using MySQL database.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstap",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: kepo,
    source_code_link: "https://github.com/imamahmadf/FE-Turu.git",
  },
  {
    name: "Portofolio",
    description:
      "A portfolio website that showcases skills, education, and the projects I have developed. Uses a responsive design to ensure comfortable access on all platforms.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "React-motion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Portofolio,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, educations, projects };
