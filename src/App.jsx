import React from "react";
import "./App.css";
import Nav from "./components/Navbar";
import Sponsor from "./components/Sponsor/Sponsor.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="Header">
      <Nav />
      <h1 className="heading">REFACTORIZE();</h1>
      <Sponsor />
    </div>
  );
}
export default App;
