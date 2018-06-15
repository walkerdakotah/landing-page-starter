import React from 'react';
import Logo from '../../assets/logo/aac-white.svg';

const LogoSecondary = () => (
  <a className="flex items-center" href="/" target="blank">
    <img src={Logo} className="h-10" />
  </a>
);

export default LogoSecondary;