import React from 'react';
import { CallRail } from '../../../project-config.js';

const YouAreNotAlone = () => (
  <section className="bg-navy lg:py-40">
    <div className="hidden md:block max-w-md m-auto container p-40 text-center">
      <h3 className="pb-40 text-30 font-300 text-white">You are not alone.</h3>
      <div className="pb-40 text-36 font-300 text-white leading-normal">
        Over 20 million people struggle with addiction. We’re here to help.
      </div>
      <div className="m-auto mb-10 px-40 py-10 w-72 text-18 bg-navy border-aqua border-2 rounded-full">
        <a
          className="no-underline text-aqua text-22 font-400"
          href={`tel:+1${CallRail.phone}`}
        >
          Call {CallRail.phone}
        </a>
      </div>
      <div className="text-14 font-300 text-white">Privacy Guaranteed</div>
    </div>
  </section>
);

export default YouAreNotAlone;
