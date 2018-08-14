import React from 'react';

import { callRail } from '../../lib/project-config.js';

import IconCall from '../icon/IconCall.js';

const HeroCTA = () => (
  <div className="fixed pin-b-hero py-10 flex justify-around overlay--navy">
    <div className="text-center flex items-center">
      <a
        className="no-underline text-white flex flex-col text-22 font-700"
        href={`tel:+1${callRail.phone}`}
      >
        <span>Call</span>
        <span>{callRail.phone}</span>
      </a>
    </div>
    <IconCall />
  </div>
);

export default HeroCTA;
