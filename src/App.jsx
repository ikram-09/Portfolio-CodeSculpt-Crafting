import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Project from "./components/project";
import ServiceHeading from './components/serviceHeading/ServiceHeading'

const App = () => {
  const projects = [
    {
      title1: "Software",
      title2: "Engineer",
      src: "jomor_design.jpeg",
    },
    {
      title1: "Programmer",
      title2: "Analyst",
      src: "la_grange.jpeg",
    },
    {
      title1: "Application",
      title2: "Developer",
      src: "deux_huit_huit.jpeg",
    },
    {
      title1: "Systems",
      title2: "Programmer",
      src: "nothing_design_studio.png",
    },
    {
      title1: "Full-Stack",
      title2: "Developer",
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
      <Parallax type="Porfolio" />
      {/* <section>Services</section>
      <section>Porftolio1</section>
      <section>Porftolio2</section>
      <section>Porftolio3</section> */}
      <Contact id="Contact"/>
    </div>
  );
};

export default App;
