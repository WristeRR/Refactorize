import React from "react";

import Sponsor from "./components/Sponsor/Sponsor.jsx";
import "./App.css";
import Nav from "./components/Navbar";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <div className>
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Sponsor />
    </div>
  );
}
export default App;
