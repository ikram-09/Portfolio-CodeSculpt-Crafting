import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero/>
      </section>
      <Parallax type="services"/>
      <section>Services</section>
      <Parallax type="Porfolio"/>
      <section>Porftolio1</section>
      <section>Porftolio2</section>
      <section>Porftolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
