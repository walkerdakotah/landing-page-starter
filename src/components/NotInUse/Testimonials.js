import React from 'react';

import LagunaHorizontal from '../assets/logos/laguna-horiz.png';
import OxfordHorizontal from '../assets/logos/oxford-horiz.png';
import GreenhouseHorizontal from '../assets/logos/greenhouse-horiz.png';
import FiveStars from '../assets/logos/five-star.png';
import FourStars from '../assets/logos/four-star.png';

/**
 * Maybe store content elsewhere to import along with logo / rating images?
 * We create a function to map over the data and output the list contents.
 * The content updates dynamically according to changes made in the external data file.
 * Separate concerns / touch only one file to update.
 *
*/
const testimonialList = [
  {
    testimonial:
      'The treatment experience gives the tools necessary for a successful long-term recovery. Staff are supportive, and will go above and beyond to help the patients to the best of their abilities.',
    patient: 'Cydney',
    date: 'April 28th, 2018',
    facility: 'laguna',
    rating: '5'
  },
  {
    testimonial:
      'The staff of Oxford Center were extremely supportive and concerned. The group starts were informative and gave me a variety of tools to maintain sobriety.',
    patient: 'Chandler',
    date: 'January 11th, 2018',
    facility: 'oxford',
    rating: '4'
  },
  {
    testimonial:
      'I believe that the staff you have here is amazing. Everyone is very compassionate about their job. They have helped me! I would recommend Greenhouse (American Addiction Centers) to any friends and family.',
    patient: 'Anonymous',
    date: 'March 6th, 2018',
    facility: 'greenhouse',
    rating: '5'
  }
];

export default function Testimonials() {
  return (
    <section className="section">
      <h2 className="h2 text-navy text-center lg:mb-8">Testimonials</h2>
      <ul className="content-block list-reset text-center flex flex-col items-center lg:flex-row lg:items-start lg:justify-around">
        <li className="py-8 w-290">
          <img src={LagunaHorizontal} className="mb-2" />
          <img src={FiveStars} />
          <p className="quote my-4">
            “The treatment experience gives the tools necessary for a successful
            long-term recovery. Staff are supportive, and will go above and
            beyond to help the patients to the best of their abilities.”
          </p>
          <p className="quote">
            <span className="font-black">Cydney</span>
            <br />
            April 28th, 2018
          </p>
        </li>
        <li className="py-8 w-290">
          <img src={OxfordHorizontal} className="mb-2" />
          <img src={FourStars} />
          <p className="quote my-4">
            “The staff of Oxford Center were extremely supportive and concerned.
            The group starts were informative and gave me a variety of tools to
            maintain sobriety.”
          </p>
          <p className="quote">
            <span className="font-black">Chandler</span>
            <br />
            January 11th, 2018
          </p>
        </li>
        <li className="py-8 w-290">
          <img src={GreenhouseHorizontal} className="mb-2" />
          <img src={FiveStars} />
          <p className="quote my-4">
            “I believe that the staff you have here is amazing. Everyone is very
            compassionate about their job. They have helped me! I would
            recommend Greenhouse (American Addiction Centers) to any friends and
            family.”
          </p>
          <p className="quote">
            <span className="font-black">Anonymous</span>
            <br />
            March 6th, 2018
          </p>
        </li>
      </ul>
    </section>
  );
}
