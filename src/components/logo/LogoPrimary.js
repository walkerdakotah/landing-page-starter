import React from 'react';

import Logo from '../../assets/logo/aac-multi.svg';

const LogoPrimary = () => (
  <a className="flex items-center" href="/" target="blank">
    <img src={Logo} className="h-8 lg:h-12" />
  </a>
);

export default LogoPrimary;
