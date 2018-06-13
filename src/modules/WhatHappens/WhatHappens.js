import React from 'react';
import IconCall from '../../assets/icon/icon-call-trans.svg';
import IconWrite from '../../assets/icon/icon-write-trans.svg';
import IconCare from '../../assets/icon/icon-care-trans.svg';
import { CallRail } from '../../../project-config.js';

const WhatHappens = () => (
  <section className="lg:py-40">
    <div className="m-auto container py-40 px-10 lg:px-40">
      <h2 className="mb-10 md:mb-20 lg:mb-40 lg:pb-20 text-center text-24 lg:text-36 text-navy font-300">
        What Happens When You Call
      </h2>
      <ul className="list-reset lg:m-auto lg:max-w-xl">
        <li className="flex flex-col items-center md:flex-row md:mb-40">
          <div className="my-20 md:my-0 md:mr-20 lg:mr-40 flex-none svg-trans">
            <img src={IconCall} alt="phone" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-10 text-18 lg:text-24 font-400 text-navy">
              We'll listen.
            </h3>
            <p className="mb-20 text-16 lg:text-18 font-300 text-grey-500 leading-normal">
              Your Treatment Consultant will complete a 15-30 minute
              confidential clinical evaluation of you or your loved one’s
              addiction history and behavioral health issues (anxiety disorders,
              depression, bipolar disorder, etc.). This evaluation is absolutely
              free, and you are under no obligation to seek treatment.
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center md:flex-row md:mb-40">
          <div className="my-20 md:my-0 md:mr-20 lg:mr-40 flex-none svg-trans">
            <img src={IconWrite} alt="pen and paper" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-10 text-18 lg:text-24 font-400 text-navy">
              We’ll verify your insurance and help you choose a facility.
            </h3>
            <p className="mb-20 text-16 lg:text-18 font-300 text-grey-500 leading-normal">
              We’ll quickly verify your insurance information over the phone and
              discuss co-pays and payment options, then match you with the
              facility that best meets your clinical and financial needs.
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center md:flex-row md:mb-40">
          <div className="my-20 md:my-0 md:mr-20 lg:mr-40 flex-none svg-trans">
            <img src={IconCare} alt="heart in hands" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-10 text-18 lg:text-24 font-400 text-navy">
              We’ll make sure you get the help you need.
            </h3>
            <p className="mb-20 text-16 lg:text-18 font-300 text-grey-500 leading-normal">
              Your Treatment Consultant will stay in contact with you and/ or
              your family throughout the entire admissions process for a
              seamless transition into residential treatment, where you’ll begin
              your recovery journey in a supportive, healing environment with a
              “whole person” approach.
            </p>
          </div>
        </li>
      </ul>
      <div className="hidden md:block m-auto mb-20 px-40 py-10 w-72 text-18 bg-orange rounded-full">
        <a
          className="no-underline text-white text-24 font-300"
          href={`tel:+1${CallRail.phone}`}
        >
          Call {CallRail.phone}
        </a>
      </div>
      <div className="hidden md:block text-center text-14 font-300 text-grey">
        Privacy Guaranteed
      </div>
    </div>
  </section>
);

export default WhatHappens;
