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

import { Footer } from "flowbite-react";

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
    // ScrollReveal().reveal(".scrollProject", { delay: 250, reset:true, easing: 'ease-in' });
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <section className="scrollProject min-h-svh px-2 flex items-center justify-center">
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 justify-between gap-2">
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
      <section className="scrollAbout min-h-svh px-2 flex items-center justify-center">
        <div>

        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          assumenda libero iusto sint? Ab debitis omnis quibusdam vel incidunt.
          Aut porro beatae accusamus nihil id iusto, alias asperiores nobis
          veniam. Illo magni libero nostrum iure repellendus ducimus quibusdam,
          quisquam atque? Ratione beatae aperiam voluptate, quis distinctio qui
          commodi cumque vero quaerat quisquam laboriosam dicta magni
          perferendis. Quisquam maxime quas eligendi. Nobis eligendi explicabo
          maxime voluptatum sed. Error magni ea possimus explicabo aliquid
          numquam, ipsa porro quaerat ad asperiores nobis cupiditate repudiandae
          reiciendis molestiae quis laboriosam iste laborum? Ex, excepturi
          ratione! Saepe at nihil adipisci, aspernatur blanditiis ea molestiae
          iure expedita. Perferendis, nesciunt! Alias, unde in blanditiis
          excepturi voluptate ad quod? Magnam velit cum ipsa nam totam tempora
          sequi magni consequatur. Doloribus, mollitia necessitatibus quis iusto
          molestiae quidem, unde voluptate, non voluptatum dolore earum ut
          reiciendis doloremque quia animi cum aliquam! Rem ipsa, voluptates
          blanditiis consequatur aspernatur ratione omnis nihil autem.
        </p>
        </div>

      </section>

      <section>
        <Footer container>
          <div className="w-full text-center">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
              <Footer.Brand
                href="https://flowbite.com"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                name="Flowbite"
              />
              <Footer.LinkGroup>
                <Footer.Link href="#">Home</Footer.Link>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Project</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <Footer.Divider />
            <Footer.Copyright href="#" by="John Castillo" year='2024' />
          </div>
        </Footer>
      </section>
    </>
  );
}

export default App;
