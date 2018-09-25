import React from "react";
import BackgroundImage from "../assets/background-images/hero-pray-unfiltered.jpg";

const background = {
  backgroundImage: `url(${BackgroundImage})`,
};

export default function HeroParams(props) {
  return (
    <section>
      <div className="hero bg-img" style={background}>
        <div className="text-center px-4 pt-16">
          <h1 className="h1 text-white mb-8">{props.title}</h1>
          <p className="tagline text-white mb-8">{props.subline}</p>
        </div>
      </div>
    </section>
  );
};