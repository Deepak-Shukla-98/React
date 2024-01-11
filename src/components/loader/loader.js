import React from "react";
import img from "./newlogo.png";
import "./loader.css";
function Loader() {
  return (
    <div className="main">
      <div class="loader-container">
        <img src={img} alt="" height="180px" width="180px" />
      </div>
      <section className="wave-section">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="wave wave4"></div>
      </section>
    </div>
  );
}

export default Loader;
