import "./style.css";
import Project from "./components/Project";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ScrollReveal from "scrollreveal";

import CSS from "./assets/css.svg?react";
import TailWind from "./assets/tailwind.svg?react";
import Express from "./assets/express.svg?react";

import Bootstrap from "./assets/bootstrap.svg?react";
import Javascript from "./assets/javascript.svg?react";
import HTML from "./assets/html.svg?react";
import Github from "./assets/github.svg?react";
import Mailgun from "./assets/mailgun.svg?react";
import Node from "./assets/node-js.svg?react";
import Php from "./assets/php.svg?react";
import Mongo from "./assets/mongo-db.svg?react";
import Mysql from "./assets/mysql.svg?react";
import { useEffect } from "react";
import Bottom from "./components/Bottom";

import jt from "./assets/journeytech-exp.jpg";
import symph from "./assets/symph-exp.jpg";

const Icons = {
  github: {
    svg: Github,
    color: "grey",
    name: "Github",
    hover: "icon hover:fill-[#181717]",
  },
  node: {
    svg: Node,
    color: "grey",
    name: "Node Js",
    hover: "icon hover:fill-[#3c873a]",
  },
  mailgun: {
    svg: Mailgun,
    color: "grey",
    name: "Mailgun",
    hover: "icon hover:fill-[#ff3366]",
  },
  php: {
    svg: Php,
    color: "grey",
    name: "PHP",
    hover: "icon hover:fill-[#8892BF]",
  },
  mongo: {
    svg: Mongo,
    color: "grey",
    name: "Mongo DB",
    hover: "icon hover:fill-[#13aa52]",
  },
  mysql: {
    svg: Mysql,
    color: "grey",
    name: "MySql",
    hover: "icon hover:fill-[#00758F]",
  },
  html: {
    svg: HTML,
    color: "grey",
    name: "HTML",
    hover: "icon hover:fill-[#00758F]",
  },
  css: {
    svg: CSS,
    color: "grey",
    name: "CSS",
    hover: "icon hover:fill-[#00758F]",
  },
  tailwind: {
    svg: TailWind,
    color: "grey",
    name: "Tailwind",
    hover: "icon hover:fill-[#00758F]",
  },
  express: {
    svg: Express,
    color: "grey",
    name: "Express",
    hover: "icon hover:fill-[#00758F]",
  },
  javascript: {
    svg: Javascript,
    color: "grey",
    name: "Javascript",
    hover: "icon hover:fill-[#00758F]",
  },
  bootstrap: {
    svg: Bootstrap,
    color: "grey",
    name: "Bootstrap",
    hover: "icon hover:fill-[#00758F]",
  },
};

let descriptions = {
  carrisa:
    "Professional platform designed to streamline subdivision management, providing users with seamless access to pay and track their monthly dues effortlessly.",
  parcel:
    "Sophisticated website interface meticulously crafted to facilitate seamless package tracking and management.",
  budget:
    "This personal finance app helps users manage their money by tracking budgets and expenses in different categories. It features an AI-powered chat assistant that gives useful financial advice. Built with modern tools like React, Tailwind CSS, and Supabase, the app offers a smooth, secure experience with real-time updates and easy budget management.",
};

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
        <section id="about" className="py-6 min-h-96 scrollAbout px-2">
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

        <section className="flex justify-evenly min-h-20 ">
          <Github fill="grey" />
          <Node fill="grey" />
          <Php fill="grey" />
          <Mysql fill="grey" />
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
            <Project
              repo="https://github.com/JohnZCastillo/budget-management-system.git"
              img="parcel-tracker.png"
              website="https://budget-management-system-abbp.onrender.com"
              title="Budget Tracker"
              description={descriptions.budget}
              icons={[
                Icons.html,
                Icons.css,
                Icons.javascript,
                Icons.tailwind,
                Icons.node,
                Icons.express,
                Icons.mongo,
                Icons.github,
              ]}
            />
            <Project
              repo="https://github.com/JohnZCastillo/Capstone"
              img="carrisa.png"
              title="Carrisa Homes"
              website="https://carrisa-homes.me/"
              description={descriptions.carrisa}
              icons={[
                Icons.html,
                Icons.css,
                Icons.javascript,
                Icons.bootstrap,
                Icons.php,
                Icons.mysql,
                Icons.mailgun,
                Icons.github,
              ]}
            />
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
