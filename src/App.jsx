import "./style.css";
import Project from "./components/Project";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Bottom from "./components/Bottom";
import Icon from "./components/Icon";
import { useEffect } from "react";

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


const mk = (svg, name, hover = "#f8b659") => ({ svg, name, color: "#6b7280", hover });

const Icons = {
  github: mk(Github, "Github"),
  postman: mk(Postman, "Postman"),
  docker: mk(Docker, "Docker"),
  laravel: mk(Laravel, "Laravel"),
  react: mk(React, "React Js"),
  node: mk(Node, "Node Js", "#3c873a"),
  mailgun: mk(Mailgun, "Mailgun", "#ff3366"),
  php: mk(Php, "PHP", "#8892BF"),
  mongo: mk(Mongo, "MongoDB", "#13aa52"),
  mysql: mk(Mysql, "MySQL", "#00758F"),
  html: mk(HTML, "HTML", "#e34c26"),
  css: mk(CSS, "CSS", "#264de4"),
  tailwind: mk(TailWind, "Tailwind"),
  express: mk(Express, "Express"),
  javascript: mk(Javascript, "JavaScript", "#f7df1e"),
  bootstrap: mk(Bootstrap, "Bootstrap", "#7952b3"),
  expo: mk(Expo, "Expo"),
  sqlLite: mk(Sqlite, "SQLite"),
  vue: mk(Vue, "Vue", "#42b883"),
  postgres: mk(Postgres, "Postgres", "#336791"),
  flask: mk(Flask, "Flask"),
  python: mk(Python, "Python", "#3776ab"),
};

const technologies = [
  { label: "Frontend", icons: [Icons.html, Icons.css, Icons.javascript, Icons.bootstrap, Icons.tailwind, Icons.react, Icons.vue] },
  { label: "Backend", icons: [Icons.php, Icons.python, Icons.node, Icons.express, Icons.laravel] },
  { label: "Databases", icons: [Icons.mysql, Icons.mongo, Icons.postgres, Icons.sqlLite] },
  { label: "Tools", icons: [Icons.github, Icons.docker, Icons.postman] },
];

const projects = [
  {
    title: "Pet Adoption System",
    description: "My family have dogs — having them as part of the family taught me responsibility. Seeing stray dogs in my community inspired me to build an adoption system.",
    hero: "",
    link: null,
    repository: "https://github.com/JohnZCastillo/animal-adoption.git",
    technologies: [Icons.html, Icons.css, Icons.javascript, Icons.python, Icons.flask, Icons.postgres],
  },
  {
    title: "Mobile Budget System",
    description: "Built to track my own expenses. Started as a web app, then went mobile so I could use it without internet.",
    hero: "",
    link: null,
    repository: "https://github.com/JohnZCastillo/mobile-budget-management.git",
    technologies: [Icons.expo, Icons.node, Icons.sqlLite],
  },
  {
    title: "Castle POS",
    description: "Built for small business owners in a Facebook group who couldn't afford a paid POS. A free, temporary solution to help them get started.",
    hero: "",
    link: null,
    repository: "https://github.com/JohnZCastillo/modern-inventory.git",
    technologies: [Icons.html, Icons.css, Icons.javascript, Icons.node, Icons.vue, Icons.express, Icons.postgres],
  },
];

function SectionLabel({ children }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#f8b659] mb-3">
      {children}
    </span>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".section-fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0e0d11] min-h-screen">
      <Nav />
      <Hero />

      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* About */}
        <section id="about" className="py-20 section-fade">
          <SectionLabel>About Me</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Passionate about building<br />
            <span className="gradient-text">great web experiences</span>
          </h2>
          <p className="max-w-[65ch] text-gray-400 text-lg leading-relaxed">
            I love learning new things and creating websites that are easy to use and look good.
            I enjoy working with others and by myself, and I'm always ready to try new tools and
            approaches. My goal is to build web applications that work well and are genuinely helpful.
          </p>
        </section>

        {/* Technologies */}
        <section className="pb-20 section-fade">
          <SectionLabel>Tech Stack</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Technologies I work with</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {technologies.map(({ label, icons }) => (
              <div key={label} className="tech-category">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">{label}</p>
                <div className="flex flex-wrap gap-3">
                  {icons.map((icon, i) => (
                    <Icon key={i} Svg={icon.svg} color={icon.color} name={icon.name} hover={icon.hover} width="28px" height="28px" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="pb-20 section-fade">
          <SectionLabel>Work</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Recent Projects</h2>
          <p className="max-w-[65ch] text-gray-400 text-lg mb-10">
            A few things I've built that I'm proud of. Each one started with a real problem worth solving.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <Project
                key={i}
                repo={project.repository}
                img={project.hero}
                website={project.link}
                title={project.title}
                description={project.description}
                icons={project.technologies}
              />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="pb-20 section-fade">
          <SectionLabel>Career</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="max-w-[65ch] text-gray-400 text-lg mb-12">
            I focus on writing clean, maintainable code and enjoy working with teams to create reliable,
            user-friendly web applications.
          </p>

          <ol className="relative border-l border-white/10 space-y-12 pl-8">
            {[
              {
                period: "February 2025 – Present",
                company: "JourneyTech Inc.",
                role: "Jr. Web Developer",
                description: "Built user interfaces with React and managed backend tasks with Laravel. Participated in code reviews, focused on clean code, and collaborated with the team to deliver high-quality web applications.",
                img: "./journeytech.avif",
                current: true,
              },
              {
                period: "April 2024 – July 2024",
                company: "Symph",
                role: "Full Stack Web Developer Intern",
                description: "Worked remotely improving legacy apps with new Svelte features and led the migration from Python 2 to Python 3 using Flask, modernizing and optimizing the system.",
                img: "./symph.svg",
                current: false,
              },
            ].map(({ period, company, role, description, img, current }) => (
              <li key={company} className="relative">
                <div className="timeline-dot" />
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-3 ${current ? "bg-[#f8b659]/15 text-[#f8b659]" : "bg-white/5 text-gray-400"}`}>
                      {period}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{company}</h3>
                    <p className="text-[#f8b659] text-sm font-medium mb-3">{role}</p>
                    <p className="text-gray-400 text-base leading-relaxed max-w-[60ch]">{description}</p>
                  </div>
                  <div className="shrink-0 flex items-center justify-center w-32 h-32 rounded-xl border border-white/10 bg-white/5 p-4">
                    <img src={img} alt={company} className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

      </div>

      <Bottom />
    </div>
  );
}

export default App;
