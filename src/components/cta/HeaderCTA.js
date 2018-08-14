import React from 'react';
import { callRail } from '../../lib/project-config.js';

const HeaderCTA = () => (
  <div className="hidden sm:flex sm:flex-col sm:items-end lg:justify-center">
    <a
      className="no-underline hover:underline text-orange text-18 font-400 lg:text-36 lg:font-500"
      href={`tel:+1${callRail.phone}`}
    >
      Call {callRail.phone}
    </a>
    <div className="text-grey text-14 font-400">Privacy Guaranteed</div>
  </div>
);

export default HeaderCTA;
