import React from "react";
import "./Home.css";
import img1 from "./imgs/img-1.png";
import img2 from "./imgs/img-2.png";
import img3 from "./imgs/img-3.png";
import img4 from "./imgs/deploy.png";
import img5 from "./imgs/env-card.png";
import img6 from "./imgs/type.png";
import img7 from "./imgs/modal.png";
function Home() {
  return (
    <div className="body">
      <section className="full-screen-section top-section">
        <div className="left">
          <h1>Build Better Backends</h1>
          <p>
            The only platform that gives AI the ability to autonomously build
            web services.
          </p>
        </div>
        <div className="right">
          <div className="elements">
            <figure className="ui1">
              <img src={img4} alt="" />
            </figure>
            <figure className="ui2">
              <img src={img5} alt="" />
            </figure>
            <figure className="ui3">
              <img src={img6} alt="" />
            </figure>
            <figure className="ui4">
              <img src={img7} alt="" />
            </figure>
          </div>
        </div>
      </section>
      <section className="full-screen-section first-main-section">
        <h1>Completely Visual</h1>
        <p>Never touch the command line, from provision to production.</p>
      </section>
      <section className="full-screen-section">
        <h1>Full Stack</h1>
        <p>
          Never manage infrastructure again. One click gets you: a database,
          APIs, deployments, hosting, etc.
        </p>
      </section>
      <section className="full-screen-section">
        <h1>Launch Faster</h1>
        <p>Logical can get systems to market in minutes instead of weeks.</p>
      </section>
    </div>
  );
}

export default Home;
