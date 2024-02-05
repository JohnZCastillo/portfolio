import "./style.css";
import "boxicons";
import Project from "./components/Project";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
function App() {
  let description =
    " A web application designed to simplify the process of tracking and managing parcels. With this app, users can easily input their parcel tracking numbers.";

  return (
    <>

    <Nav />
    <Hero />
      <section className="grid grid-cols-1 md:grid-cols-2">
        <Project
          img="parcel-tracker.png"
          title="Parcel Tracker"
          description={description}
        />
        <Project
          img="parcel-tracker.png"
          title="Parcel Tracker"
          description={description}
        />
      </section>
    </>
  );
}

export default App;
