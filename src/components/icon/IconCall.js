import React from 'react';
import IconCallImg from '../../assets/icons/phone-white.svg';

const IconCall = () => (
  <a className="flex" href="tel:+1888-327-3017">
    <img src={IconCallImg} className="h-16" />
  </a>
);

export default IconCall;
