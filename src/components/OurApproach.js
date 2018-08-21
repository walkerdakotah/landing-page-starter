import React from 'react';
import { hexToRgb } from '../lib/utils.js';

/**
 * Potential global class rules:  element - classes
 *
 * section - section
 * h2 - h2 text-center lg:mb-8
 * ul - content-block list-reset text-center flex flex-col items-center lg:flex-row lg:items-start lg:justify-around
 * li - py-8 {style: logoWidth}
 * h2 - text-center lg:mb-8
 *
 */
export default function OurApproach() {
  hexToRgb('EEF9FC');
  return (
    <section className="section bg-img our-approach">
      <h2 className="h2 text-navy text-center mb-4 lg:mb-8">
        Our Approach to Treatment
      </h2>
      <div className="content-block pt-8">
        <div className="p px-8 lg:px-0 lg:w-3/4 ml-auto">
          <p className="pb-8">
            American Addiction Centers is a nationwide network of facilities and
            programs providing quality, compassionate, innovative care to adults
            struggling with addiction. Our whole-person approach considers
            lifestyle, environment, physical health, and mental health disorders
            as well as individual strengths, motivation and desire to make
            positive changes in one’s life. We’ve helped thousands of clients
            around the country find a personalized path to lifelong recovery.
          </p>
          <ul>
            <li className="pb-2">
              CARF and Joint Commission accredited facilities
            </li>
            <li className="pb-2">Nationwide network</li>
            <li className="pb-2">Research-based therapies</li>
            <li className="pb-2">12-step based</li>
            <li className="pb-2">Experienced, qualified staff</li>
            <li className="pb-2">Inpatient and outpatient programs</li>
            <li className="pb-2">Co-occuring disorder care (dual diagnosis)</li>
            <li className="pb-2">Wellness focused</li>
            <li>Nationwide alumni support network</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
