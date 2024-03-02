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
        <section className="py-6 min-h-96 scrollAbout px-2">
          <h2 className="text-5xl md:text-6xl mb-2 font-bold">About</h2>
          <p className="max-w-[75ch] mb-4 text-lg">
            I am John Castillo, taking Bachelor of Science in Information
            Technology at Cavite State University - Tanza Campus. In my free
            time, I watch videos about technology and read books about personal
            development and technology.
          </p>
        </section>

        <section className="flex justify-evenly min-h-20 ">
          <Github fill="grey" />
          <Node fill="grey" />
          <Php fill="grey" />
          <Mysql fill="grey" />
        </section>

        <section className="scrollProject min-h-svh ">
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
              img="parcel-tracker.png"
              title="Parcel Tracker"
              description={descriptions.parcel}
              icons={[Icons.html,Icons.css,Icons.javascript,Icons.tailwind,Icons.node,Icons.express,Icons.mongo,Icons.github,]}
            />
            <Project
              img="carrisa.png"
              title="Carrisa Homes"
              description={descriptions.carrisa}
              icons={[Icons.html,Icons.css,Icons.javascript,Icons.bootstrap,Icons.php, Icons.mysql,Icons.mailgun,Icons.github]}
            />
          </div>
        </section>
      </div>

      <Bottom />
    </>
  );
}

export default App;
