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
import Bottom from './components/Bottom';

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
  
  }, []);

  return (
    <>
      <Nav />
      <Hero />

      <div className="px-3 md:px-6 bg-[#0e0d11]">
        <section className="py-6 min-h-96 scrollAbout px-2">
          <h2 className="text-5xl md:text-6xl mb-2 font-bold">About</h2>
          <p className="max-w-[75ch] mb-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            assumenda libero iusto sint? Ab debitis omnis quibusdam vel
            incidunt. Aut porro beatae accusamus nihil id iusto, alias
            asperiores nobis veniam. Illo magni libero nostrum iure repellendus
            ducimus quibusdam, quisquam atque? Ratione beatae aperiam voluptate,
            quis distinctio qui commodi cumque vero quaerat quisquam laboriosam
            dicta magni perferendis. Quisquam maxime quas eligendi. Nobis
          </p>
        </section>

        <section className="flex justify-evenly min-h-20 ">
          <Github fill="grey" />
          <Node fill="grey" />
          <Php fill="grey" />
          <Mysql fill="grey" />
        </section>

        <section className="scrollProject min-h-svh ">
          <h2 className="text-5xl md:text-6xl mb-2 font-bold">Projects</h2>
          <p className="max-w-[80ch] mb-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex at
            maiores sit fugit quia amet. Quas dolore voluptatem distinctio non
            eum ab amet inventore pariatur veniam dolores in, mollitia magnam!
            Veniam aspernatur maiores totam sed quisquam quibusdam. Eius quaerat
            atque quisquam ipsa neque iusto libero veritatis corrupti rerum
            aliquam assumenda sequi, ducimus nihil vel eos, accusamus earum
            maxime dignissimos? Animi!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly">
            <Project
              img="parcel-tracker.png"
              title="Parcel Tracker"
              description={description}
              icons={[Icons.node, Icons.github, Icons.mongo, Icons.mysql]}
            />
            <Project
              img="carrisa.png"
              title="Carrisa Homes"
              description={description}
              icons={[Icons.php, Icons.github]}
            />
          </div>
        </section>

      </div>

      < Bottom />

    </>
  );
}

export default App;
