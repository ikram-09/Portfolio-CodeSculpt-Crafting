import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ServiceHeading from "./components/serviceHeading/serviceHeading";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero/>
      </section>
      <ServiceHeading id="Services"/>
      <section >Parallax</section>
      <section>Services</section>
      <section id="Porfolio">Parallax</section>
      <section>Porftolio1</section>
      <section>Porftolio2</section>
      <section>Porftolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
