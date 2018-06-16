import React from 'react';
import { CallRail } from '../../../project-config.js';

const YouAreNotAlone = () => (
  <section className="bg-navy lg:py-40">
    <div className="hidden md:block max-w-lg m-auto container p-40 text-center">
      <h3 className="pb-40 text-30 font-300 text-white">You are not alone.</h3>
      <h2 className="font-serif pb-40 text-40 font-700 text-white leading-normal">
        Over 20 million people struggle with addiction. We’re here to help.
      </h2>
      <a
        className="block m-auto mb-10 px-40 py-10 w-72 no-underline bg-navy hover:bg-aqua text-aqua hover:text-navy text-24 font-400 border-aqua border-2 rounded-full leading-normal"
        href={`tel:+1${CallRail.phone}`}
      >
        Call {CallRail.phone}
      </a>
      <div className="text-14 font-300 text-white">Privacy Guaranteed</div>
    </div>
  </section>
);

export default YouAreNotAlone;
