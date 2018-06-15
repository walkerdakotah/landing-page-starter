import React from 'react';

import LagunaRating from '../../assets/testimonials/laguna-horiz-5.png';
import OxfordRating from '../../assets/testimonials/oxford-horiz-4.png';
import GreenhouseRating from '../../assets/testimonials/greenhouse-horiz-5.png';

const Testimonials = () => (
  <section>
    <div className="m-auto container py-40 px-10 lg:px-40">
      <h2 className="mb-20 lg:mb-40 lg:pb-20 text-center text-24 lg:text-36 text-navy font-300 lg:font-400">
        Testimonials
      </h2>
      <ul className="list-reset flex flex-col lg:flex-row">
        <li className="mb-40 lg:px-20 flex flex-col items-center lg:w-1/3 lg:border-r border-grey">
          <div className="mb-20 flex-none">
            <img src={LagunaRating} alt="Laguna 5 Star Rating" />
          </div>
          <div className="text-center text-16 lg:text-18 font-300 text-grey-500 leading-normal">
            <p className="mb-20">
              “The treatment experience gives the tools necessary for a
              successful long-term recovery. Staff are supportive, and will go
              above and beyond to help the patients to the best of their
              abilities.”
            </p>
            <p className="">
              Cydney<br />
              April 28th, 2018
            </p>
          </div>
        </li>
        <li className="mb-40 lg:px-20 flex flex-col items-center lg:w-1/3 lg:border-r border-grey">
          <div className="mb-20 flex-none">
            <img src={OxfordRating} alt="Oxford 5 Star Rating" />
          </div>
          <div className="text-center text-16 lg:text-18 font-300 text-grey-500 leading-normal">
            <p className="mb-20">
              “The staff of Oxford Center were extremely supportive and
              concerned. The group starts were informative and gave me a variety
              of tools to maintain sobriety.”
            </p>
            <p className="">
              Chandler<br />
              January 11th, 2018
            </p>
          </div>
        </li>
        <li className="lg:mb-40 lg:px-20 flex flex-col items-center lg:w-1/3">
          <div className="mb-20 flex-none">
            <img src={GreenhouseRating} alt="Greenhouse 5 Star Rating" />
          </div>
          <div className="text-center text-16 lg:text-18 font-300 text-grey-500 leading-normal">
            <p className="mb-20">
              “The treatment experience gives the tools necessary for a
              successful long-term recovery. Staff are supportive, and will go
              above and beyond to help the patients to the best of their
              abilities.”
            </p>
            <p className="">
              Anonymous<br />
              March 6th, 2018
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default Testimonials;
