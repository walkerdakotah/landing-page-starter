import React from 'react';
import { callRail } from '../lib/project-config.js';

export default function YouAreNotAlone() {
  return (
    <section className="section bg-navy">
      <h3 className="h3 text-white text-center mb-8">You are not alone.</h3>
      <h2 className="h2 text-white text-center px-8 lg:w-3/4 lg:m-auto">
        An estimated 16 million people in the United States have an alcohol use
        disorder.* We're here to help.
      </h2>
      <div className="text-center pt-8">
        <a className="" href={`tel:+1${callRail.phone}`}>
          <button className="btn btn-navy">Call {callRail.phone}</button>
        </a>
        <p className="p mt-2 text-white">Privacy Guaranteed</p>
      </div>
    </section>
  );
}
