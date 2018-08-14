import React from 'react';
import Phone from '../assets/icons/phone-orange.svg';
import HandWrite from '../assets/icons/handwrite-orange.svg';
import HeartInHands from '../assets/icons/heart-in-hands-orange.svg';
import { callRail } from '../lib/project-config';

const WhatHappens = () => (
  <section className="lg:py-40">
    <div className="m-auto container py-40 px-10 lg:px-40">
      <h2 className="mb-20 lg:mb-40 lg:pb-20 text-center text-24 lg:text-40 text-navy font-serif font-700">
        What Happens When You Call
      </h2>
      <ul className="list-reset lg:m-auto lg:max-w-xl">
        <li className="flex flex-col items-center max-w-sm lg:max-w-full m-auto lg:m-0 lg:flex-row lg:mb-40">
          <div className="my-20 lg:my-0 lg:mr-20 lg:mr-40 flex-none svg-trans">
            <img src={Phone} alt="phone" />
          </div>
          <div className="text-center lg:text-left">
            <h4 className="mb-10 text-18 lg:text-24 font-700 text-navy">
              We'll listen.
            </h4>
            <p className="mb-20 text-14 lg:text-18 font-500 text-grey-500 leading-normal">
              Your admissions coordinator will complete a 15-30 minute
              confidential clinical evaluation of you or your loved one’s
              addiction history and behavioral health issues (anxiety disorders,
              depression, bipolar disorder, etc.). This evaluation is absolutely
              free, and you are under no obligation to seek treatment.
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center max-w-sm lg:max-w-full m-auto lg:m-0 lg:flex-row lg:mb-40">
          <div className="my-20 lg:my-0 lg:mr-20 lg:mr-40 flex-none svg-trans">
            <img src={HandWrite} alt="pen and paper" />
          </div>
          <div className="text-center lg:text-left">
            <h4 className="mb-10 text-18 lg:text-24 font-700 text-navy">
              We’ll verify your insurance and help you choose a facility.
            </h4>
            <p className="mb-20 text-14 lg:text-18 font-500 text-grey-500 leading-normal">
              We’ll quickly verify your insurance information over the phone and
              discuss co-pays and payment options, then match you with the
              facility that best meets your clinical and financial needs.
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center max-w-sm lg:max-w-full m-auto lg:m-0 lg:flex-row lg:mb-40">
          <div className="my-20 lg:my-0 lg:mr-20 lg:mr-40 flex-none svg-trans">
            <img src={HeartInHands} alt="heart in hands" />
          </div>
          <div className="text-center lg:text-left">
            <h4 className="mb-10 text-18 lg:text-24 font-700 text-navy">
              We’ll make sure you get the help you need.
            </h4>
            <p className="mb-20 text-14 lg:text-18 font-500 text-grey-500 leading-normal">
              Your Treatment Consultant will stay in contact with you and/or
              your family throughout the entire admissions process for a
              seamless transition into residential treatment, where you’ll begin
              your recovery journey in a supportive, healing environment with a
              whole-person approach.
            </p>
          </div>
        </li>
      </ul>
      <a
        className="hidden lg:block m-auto mb-20 px-40 py-10 w-72 no-underline bg-orange hover:bg-orange-500 text-white text-24 font-300 rounded-full"
        href={`tel:+1${callRail.phone}`}
      >
        Call {callRail.phone}
      </a>
      <div className="hidden lg:block text-center text-14 font-300 text-grey">
        Privacy Guaranteed
      </div>
    </div>
  </section>
);

export default WhatHappens;
