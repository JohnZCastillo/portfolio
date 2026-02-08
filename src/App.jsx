import "./style.css";
import Project from "./components/Project";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ScrollReveal from "scrollreveal";

import CSS from "./assets/css.svg";
import TailWind from "./assets/tailwind.svg";
import Express from "./assets/express.svg";

import Bootstrap from "./assets/bootstrap.svg";
import Javascript from "./assets/javascript.svg";
import HTML from "./assets/html.svg";
import Github from "./assets/github.svg";
import Mailgun from "./assets/mailgun.svg";
import Node from "./assets/node-js.svg";
import Php from "./assets/php.svg";
import Mongo from "./assets/mongo-db.svg";
import Mysql from "./assets/mysql.svg";
import Sqlite from "./assets/sqlite.svg";
import Vue from "./assets/vue.svg";
import Postgres from "./assets/postgres.svg";
import Flask from "./assets/flask.svg";
import Python from "./assets/python.svg";
import React from "./assets/react.svg";
import Laravel from "./assets/laravel.svg";
import Docker from "./assets/docker.svg";
import Postman from "./assets/postman.svg";


import Expo from "./assets/expo.svg";
import { useEffect } from "react";
import Bottom from "./components/Bottom";

import jt from "./assets/journeytech-exp.jpg";
import symph from "./assets/symph-exp.jpg";
import Icon from "./components/Icon";

const Icons = {
  github: {
    svg: Github,
    color: "grey",
    name: "Github",
    hover: "#181717",
  },
  postman: {
    svg: Postman,
    color: "grey",
    name: "Postman",
    hover: "#181717",
  },
  docker: {
    svg: Docker,
    color: "grey",
    name: "Docker",
    hover: "#181717",
  },
  laravel: {
    svg: Laravel,
    color: "grey",
    name: "Laravel",
    hover: "#181717",
  },
  react: {
    svg: React,
    color: "grey",
    name: "React Js",
    hover: "#181717",
  },
  node: {
    svg: Node,
    color: "grey",
    name: "Node Js",
    hover: "#3c873a",
  },
  mailgun: {
    svg: Mailgun,
    color: "grey",
    name: "Mailgun",
    hover: "#ff3366",
  },
  php: {
    svg: Php,
    color: "grey",
    name: "PHP",
    hover: "#8892BF",
  },
  mongo: {
    svg: Mongo,
    color: "grey",
    name: "Mongo DB",
    hover: "#13aa52",
  },
  mysql: {
    svg: Mysql,
    color: "grey",
    name: "MySql",
    hover: "#00758F",
  },
  html: {
    svg: HTML,
    color: "grey",
    name: "HTML",
    hover: "#00758F",
  },
  css: {
    svg: CSS,
    color: "grey",
    name: "CSS",
    hover: "#00758F",
  },
  tailwind: {
    svg: TailWind,
    color: "grey",
    name: "Tailwind",
    hover: "#00758F",
  },
  express: {
    svg: Express,
    color: "grey",
    name: "Express",
    hover: "#00758F",
  },
  javascript: {
    svg: Javascript,
    color: "grey",
    name: "Javascript",
    hover: "#00758F",
  },
  bootstrap: {
    svg: Bootstrap,
    color: "grey",
    name: "Bootstrap",
    hover: "#00758F",
  },
  expo: {
    svg: Expo,
    color: "grey",
    name: "Expo",
    hover: "#00758F",
  },
   sqlLite: {
    svg: Sqlite,
    color: "grey",
    name: "Sql Lite",
    hover: "#00758F",
  },
  vue: {
    svg: Vue,
    color: "grey",
    name: "Vue",
    hover: "#00758F",
  },
  postgres: {
    svg: Postgres,
    color: "grey",
    name: "Postgres",
    hover: "#00758F",
  },
   flask: {
    svg: Flask,
    color: "grey",
    name: "Flask",
    hover: "#00758F",
  },
   python: {
    svg: Python,
    color: "grey",
    name: "Python",
    hover: "#00758F",
  },
};

const technolgies = {
  frontend: [
    Icons.html,
    Icons.css,
    Icons.javascript,
    Icons.bootstrap,
    Icons.tailwind,
    Icons.react,
    Icons.vue
  ],
  backend: [
    Icons.php,
    Icons.python,
    Icons.node,
    Icons.express,
    Icons.laravel
  ],
  databases: [
    Icons.mysql,
    Icons.mongo,
    Icons.postgres
  ],
   tools: [
    Icons.github,
    Icons.docker,
    Icons.postman
  ]
}

const projects = [
  {
    title: 'Pet Adoption System',
    description: 'My family have dogs, Having part of the family, it teaches me to be a responsible member of the family. In my community there are a lot of stray dogs, with this I built a system for adoption',
    hero: '',
    link: null,
    repository: 'https://github.com/JohnZCastillo/animal-adoption.git',
    technolgies: [
      Icons.html,
      Icons.css,
      Icons.javascript,
      Icons.python,
      Icons.flask,
      Icons.postgres
    ],
  },
  {
    title: 'Mobile Budget Sytem',
    description: 'I built this app to track my expenses. I always wonder where I spent my money because just after a week its all gone!, At first i built a web app, but later on i decided to make it a mobile application so I can use it even with no internet.',
    hero: '',
    link: null,
    repository: 'https://github.com/JohnZCastillo/mobile-budget-management.git',
    technolgies: [  
      Icons.expo,
      Icons.node,
      Icons.sqlLite
    ],
  },
  {
    title: 'Castle POS',
    description: `I joined a fb group for business people, and many times there were people wanting to have a free POS because they cannot afford yet a paid one.
      I built this to help them. This is not BIR Complaint because its not meant to be permanent solution just a temporary.
    `,
    hero: '',
    link: null,
    repository: 'https://github.com/JohnZCastillo/modern-inventory.git',
    technolgies: [
      Icons.html,
      Icons.css,
      Icons.javascript,  
      Icons.node,
      Icons.vue,
      Icons.express,
      Icons.postgres
    ],
  }
]


function App() {
  useEffect(() => {
    ScrollReveal().reveal(".scrollProject", {
      delay: 250,
      reset: true,
      easing: "ease-in",
    });
  }, []);

  return (
    <>
      <Nav />
      <Hero />

    

      <div className="px-3 md:px-6 bg-[#0e0d11]">
        <section id="about" className="py-6  scrollAbout px-2">
          <h2 className="text-5xl md:text-6xl mb-2 font-bold">About Me</h2>
          <p className="max-w-[75ch] mb-4 text-lg">
            I love learning new things and creating websites that are easy to
            use and look good. I enjoy working with others and by myself, and I
            am always ready to try new tools and ways of building websites. I
            like to help make old systems better or start new projects from the
            beginning. My goal is to make web applications that work well and
            are helpful for people.
          </p>
        </section>

        <section className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-[80px]">
          
          {Object.keys(technolgies).map(key => (
            <div className="grid grid-cols-3">
              {technolgies[key].map(icon =>(
                <Icon  
                  Svg={icon.svg} 
                  color={icon.color} 
                  name={icon.name} 
                  hover="white"
                  width="30px"
                  height="30px"
              />
              ))}
            </div>
          ))}

        </section>

        <section id="projects" className="scrollProject min-h-svh mb-5 ">
          <h2 className="text-5xl md:text-6xl mb-2 font-bold">
            Recent Projects
          </h2>
          <p className="max-w-[80ch] mb-4 text-lg">
            In recent times, I've been deeply engaged in several exciting
            projects that showcase my commitment to innovation, quality, and
            meaningful impact. Check out some of the things I've been working on
            lately that show how dedicated I am to doing a great job in
            different areas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-3">
            {projects.map(project => (<>
              <Project 
                repo={project.repository}
                img={project.hero}
                website={project.link}
                title={project.title}
                description={project.description}
                icons={project.technolgies}
              />
            </>))}
          </div>
        </section>

        <section id="experience" className="min-h-svh pb-2">
          <h2 className="text-5xl md:text-6xl mb-2 font-bold">
            Professional Experience
          </h2>
          <p className="max-w-[80ch] mb-4 text-lg">
            I am a web developer skilled in modern frameworks like React,
            Svelte, and Laravel. I focus on writing clean, maintainable code and
            enjoy working with teams to create reliable, user-friendly web
            applications that solve real problems.
          </p>

          <ol class="relative border-s border-gray-200 pb-2">
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="flex justify-between flex-wrap">
                <div>
                  <time class="mb-1 text-sm font-normal leading-none">
                    February 2025 - Present
                  </time>
                  <h3 class="text-2xl font-bold">JourneyTech inc.</h3>
                  <h4 class="text-mds italic mb-2">Jr Web Developer</h4>
                  <p class="mb-4 text-base font-normal max-w-[65ch]">
                    At Journey Tech, I worked as a Junior Web Developer,
                    building user interfaces with React and managing backend
                    tasks with Laravel. I helped with code reviews and
                    troubleshooting, focused on writing clean code, and
                    collaborated with my team to deliver high-quality web
                    applications.
                  </p>
                </div>
                <div>
                  <img src={jt} className="w-[200px] block mx-auto" />
                </div>
              </div>
            </li>
            <li class="ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="flex justify-between flex-wrap">
                <div>
                  <time class="mb-1 text-sm font-normal leading-none">
                    April 2024 - July 2024
                  </time>
                  <h3 class="text-2xl font-bold">Symph</h3>
                  <h4 class="text-mds italic mb-2">
                    Full Stack Web Developer Intern
                  </h4>
                  <p class="mb-4 text-base font-normal max-w-[65ch]">
                    At Symph Inc, I worked remotely as a Full Stack Web
                    Developer Intern, improving legacy apps with new Svelte
                    features and leading the migration from Python 2 to Python 3
                    using Flask, which modernized and optimized the system.
                  </p>
                </div>
                <div>
                  <img src={symph} className="w-[200px] block mx-auto" />
                </div>
              </div>
            </li>
          </ol>
        </section>
      </div>

      <Bottom />
    </>
  );
}

export default App;
