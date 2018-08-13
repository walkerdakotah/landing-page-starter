import React from 'react';
import { CallRail } from '../../../project-config.js';

const YouAreNotAlone = () => (
  <section className="bg-navy py-40">
    <div className="max-w-lg m-auto container p-40 text-center">
      <h3 className="pb-40 text-18 lg:text-24 font-300 text-white">
        You are not alone.
      </h3>
      <h2 className="pb-40 font-serif text-22 lg:text-36 font-300 text-white leading-normal">
        An estimated 16 million people in the United States have an alcohol use
        disorder.* We're here to help.
      </h2>
      <a
        className="block max-w-xs m-auto mb-20 px-40 py-10 no-underline bg-navy hover:bg-aqua text-aqua hover:text-navy text-18 lg:text-24 font-400 border-aqua border-2 rounded-full leading-normal"
        href={`tel:+1${CallRail.phone}`}
      >
        Call {CallRail.phone}
      </a>
      <div className="text-14 font-300 text-white">Privacy Guaranteed</div>
    </div>
  </section>
);

export default YouAreNotAlone;
