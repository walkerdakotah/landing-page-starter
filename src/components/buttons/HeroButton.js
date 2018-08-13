import React from 'react';
import IconPhone from '../../assets/icons/phone-orange-solid.svg';
import { CallRail } from '../../../project-config';

const HeroButton = () => (
  <a
    className="no-underline bg-orange hover:bg-orange-500 text-white text-28 font-700 rounded-full flex justify-around items-center px-10 py-5 m-auto"
    href={`tel:+1${CallRail.phone}`}
    style={{ width: '270px' }}
  >
    <img src={IconPhone} />
    <span className="leading-none">{CallRail.phone}</span>
  </a>
);

export default HeroButton;
