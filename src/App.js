import React, { useEffect } from "react";
import Card from "./components/Card";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div
      className="min-h-screen py-10 px-3 sm:px-5"
      style={{ backgroundColor: "#1B1B3A" }}
    >
      <div data-aos="fade-right" data-aos-duration="800">
        <Card />
      </div>
      <div data-aos="fade-left" data-aos-duration="800">
        <About />
      </div>
      <Skills />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
