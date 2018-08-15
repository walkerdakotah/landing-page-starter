import React from 'react';
import { callRail } from '../lib/project-config.js';

const YouAreNotAlone = () => (
  <section className="bg-navy py-40">
    <div className="max-w-lg m-auto container p-40 text-center">
      <h3 className="h3 text-white pb-40">You are not alone.</h3>
      <h2 className="h2 text-white leading-normal pb-40">
        An estimated 16 million people in the United States have an alcohol use
        disorder.* We're here to help.
      </h2>
      <a
        className="block max-w-xs m-auto mb-20 px-40 py-10 no-underline bg-navy hover:bg-aqua text-aqua hover:text-navy text-18 lg:text-24 font-400 border-aqua border-2 rounded-full leading-normal"
        href={`tel:+1${callRail.phone}`}
      >
        Call {callRail.phone}
      </a>
      <div className="p3 text-white">Privacy Guaranteed</div>
    </div>
  </section>
);

export default YouAreNotAlone;
