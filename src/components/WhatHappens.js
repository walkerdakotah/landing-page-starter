import React from 'react';
import { callRail } from '../lib/project-config';
import { PhoneIcon, InsuranceIcon, CareIcon } from './svgs/Svgs';

export default function WhatHappens() {
  return (
    <section className="section">
      <h2 className="h2 text-center text-navy mb-4 lg:mb-8">
        What Happens When You Call
      </h2>
      <ul className="content-block list-reset text-center flex flex-col items-center">
        <li className="w-290-full py-8 lg:w-full lg:flex lg:items-center">
          <PhoneIcon className="list-icon mb-8 lg:mr-8 lg:m-auto" />
          <div className="lg:text-left lg:w-3/4 lg:pr-8">
            <h4 className="h4 text-navy pb-2">We'll listen.</h4>
            <p className="p">
              Your admissions coordinator will complete a 15-30 minute
              confidential clinical evaluation of you or your loved one’s
              addiction history and behavioral health issues (anxiety disorders,
              depression, bipolar disorder, etc.). This evaluation is absolutely
              free, and you are under no obligation to seek treatment.
            </p>
          </div>
        </li>
        <li className="w-290-full py-8 lg:w-full lg:flex lg:items-center">
          <InsuranceIcon className="list-icon mb-8 lg:mr-8 lg:m-auto" />
          <div className="lg:text-left lg:w-3/4 lg:pr-8">
            <h4 className="h4 text-navy pb-2">
              We’ll verify your insurance and help you choose a facility.
            </h4>
            <p className="p">
              We’ll quickly verify your insurance information over the phone and
              discuss co-pays and payment options, then match you with the
              facility that best meets your clinical and financial needs.
            </p>
          </div>
        </li>
        <li className="w-290-full py-8 lg:w-full lg:flex lg:items-center">
          <CareIcon className="list-icon mb-8 lg:mr-8 lg:m-auto" />
          <div className="lg:text-left lg:w-3/4 lg:pr-8">
            <h4 className="h4 text-navy pb-2">
              We’ll make sure you get the help you need.
            </h4>
            <p className="p">
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
