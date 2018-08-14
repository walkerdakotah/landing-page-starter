import React from 'react';
import { facilityInfo } from '../../lib/project-config.js';

const LogoPrimary = () => (
  <a className="flex items-center" href="/" target="blank">
    <img
      src={require(`../../assets/logos/${facilityInfo.shortName}-horiz.svg`)}
      alt="american addiction centers logo"
      className="h-8 lg:h-12"
    />
  </a>
);

export default LogoPrimary;
