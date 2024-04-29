import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Project from "./components/project";
import ServiceHeading from "./components/serviceHeading/serviceHeading";

const App = () => {
  const projects = [
    {
      title1: "Jomor",
      title2: "Design",
      src: "jomor_design.jpeg",
    },
    {
      title1: "La",
      title2: "Grange",
      src: "la_grange.jpeg",
    },
    {
      title1: "Deux Huit",
      title2: "Huit",
      src: "deux_huit_huit.jpeg",
    },
    {
      title1: "Nothing",
      title2: "Design Studio",
      src: "nothing_design_studio.png",
    },
    {
      title1: "Mambo",
      title2: "Mambo",
      src: "mambo_mambo.jpeg",
    },
  ];

  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      {/* <Parallax type="services" /> */}
      <ServiceHeading/>
      {projects.map((project) => {
        return <Project project={project} />;
      })}
      <section>Services</section>
      <Parallax type="Porfolio" />
      <section>Porftolio1</section>
      <section>Porftolio2</section>
      <section>Porftolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
