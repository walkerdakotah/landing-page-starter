import React from "react";
import Logo from "./logo-round.png";
import "./AboutAAC.scss";

const AboutAAC = () => (
  <div className="container--about-aac">
    <div className="container--ruler">
      <div className="about-aac__content">
        <img className="about-aac__logo" src={Logo} />
        <div className="about-aac__title font-heavy">
          About-aac American Addiction Centers
        </div>
        <div className="about-aac__sub-text">
          <p className="about-aac__sub-text--text font-light">
            American Addiction Centers is a nationwide network of facilities and
            programs providing quality, compassionate, innovative care to adults
            struggling with addiction. Our whole-person approach considers
            lifestyle, environment, physical health, and mental health disorders
            as well as individual strengths, motivation and desire to make
            positive changes in one’s life. We’ve helped thousands of clients
            around the country find a personalized path to lifelong recovery.
          </p>
        </div>
        <ul className="about-aac__list font-light">
          <li className="about-aac__list-item">CARF-Accredited facilities</li>
          <li className="about-aac__list-item">Nationwide network</li>
          <li className="about-aac__list-item">Research-based therapies</li>
          <li className="about-aac__list-item">12-step based</li>
          <li className="about-aac__list-item">Experienced, qualified staff</li>
          <li className="about-aac__list-item">
            Inpatient and outpatient programs
          </li>
          <li className="about-aac__list-item">
            Co-occurring disorder care (Dual Diagnosis)
          </li>
          <li className="about-aac__list-item">Wellness-focused</li>
          <li className="about-aac__list-item">
            Nationwide alumni support network
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default AboutAAC;
