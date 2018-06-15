import React from 'react';

import { CallRail } from '../../../project-config';

import IconCall from '../icon/IconCall.js';

const HeroCTA = () => (
  // <div className="fixed pin-b-hero py-10 flex justify-around overlay--navy">
  <div className="absolute pin-b-hero py-10 flex justify-around overlay--navy">
    <div className="text-center flex items-center">
      <a
        className="no-underline text-white flex flex-col text-22 font-300"
        href={`tel:+1${CallRail.phone}`}
      >
        <span>Call</span>
        <span>{CallRail.phone}</span>
      </a>
    </div>
    <IconCall />
  </div>
);

export default HeroCTA;
