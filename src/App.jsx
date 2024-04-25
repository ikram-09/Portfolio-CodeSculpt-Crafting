import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero/>
      </section>
      <section id="Services">Parallax</section>
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
