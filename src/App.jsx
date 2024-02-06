import "./style.css";
import Project from "./components/Project";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ScrollReveal from "scrollreveal";

import Github from "./assets/github.svg?react";
import Mailgun from "./assets/mailgun.svg?react";
import Node from "./assets/node-js.svg?react";
import Php from "./assets/php.svg?react";
import Mongo from "./assets/mongo-db.svg?react";
import Mysql from "./assets/mysql.svg?react";
import { useEffect } from "react";

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
};

function App() {
  let description = "test";

  useEffect(() => {
    ScrollReveal().reveal(".scrollProject", { delay: 250, reset:true, easing: 'ease-in' });
  },[]);

  return (
    <>
      <Nav />
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-2 justify-between gap-2">
        <Project
          img="parcel-tracker.png"
          title="Parcel Tracker"
          description={description}
          icons={[Icons.node,Icons.github, Icons.mongo, Icons.mysql]}
        />
        <Project
          img="carrisa.png"
          title="Carrisa Homes"
          description={description}
          icons={[Icons.php, Icons.github]}
        />
      </section>
    </>
  );
}

export default App;
