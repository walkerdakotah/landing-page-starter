import React from 'react';
import Phone from '../assets/icons/phone-orange.svg';
import HandWrite from '../assets/icons/handwrite-orange.svg';
import HeartInHands from '../assets/icons/heart-in-hands-orange.svg';
import { callRail } from '../lib/project-config';

const logoWidth = { maxWidth: '290px' };
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

export default function WhatHappens() {
  return (
    <section className="section">
      <h2 className="h2 text-center text-navy mb-4 lg:mb-8">
        What Happens When You Call
      </h2>
      <ul className="content-block list-reset text-center flex flex-col items-center">
        <li className="py-8 lg:flex lg:items-center what-list">
          <img src={Phone} className="list-svg mb-8 lg:mr-8 lg:m-auto" />
          <div className="lg:text-left lg:w-3/4">
            <h4 className="h4 text-navy pb-2">We'll listen.</h4>
            <p className="p leading-normal">
              Your admissions coordinator will complete a 15-30 minute
              confidential clinical evaluation of you or your loved one’s
              addiction history and behavioral health issues (anxiety disorders,
              depression, bipolar disorder, etc.). This evaluation is absolutely
              free, and you are under no obligation to seek treatment.
            </p>
          </div>
        </li>
        <li className="py-8 lg:flex lg:items-center what-list">
          <img src={HandWrite} className="list-svg mb-8 lg:mr-8 lg:m-auto" />
          <div className="lg:text-left lg:w-3/4">
            <h4 className="h4 text-navy pb-2">
              We’ll verify your insurance and help you choose a facility.
            </h4>
            <p className="p leading-normal">
              We’ll quickly verify your insurance information over the phone and
              discuss co-pays and payment options, then match you with the
              facility that best meets your clinical and financial needs.
            </p>
          </div>
        </li>
        <li className="py-8 lg:flex lg:items-center what-list">
          <img src={HeartInHands} className="list-svg mb-8 lg:mr-8 lg:m-auto" />
          <div className="lg:text-left lg:w-3/4">
            <h4 className="h4 text-navy pb-2">
              We’ll make sure you get the help you need.
            </h4>
            <p className="p leading-normal">
              Your Treatment Consultant will stay in contact with you and/or
              your family throughout the entire admissions process for a
              seamless transition into residential treatment, where you’ll begin
              your recovery journey in a supportive, healing environment with a
              whole-person approach.
            </p>
          </div>
        </li>
      </ul>
      <div className="text-center pt-8">
        <a className="" href={`tel:+1${callRail.phone}`}>
          <button className="btn btn-orange">Call {callRail.phone}</button>
        </a>
        <p className="p mt-2">Privacy Guaranteed</p>
      </div>
    </section>
  );
}
