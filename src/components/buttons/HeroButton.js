import React from 'react';
import IconPhone from '../../assets/icons/phone-orange-solid.svg';
import { callRail } from '../../lib/project-config';

const HeroButton = () => (
  <a
    className="block max-w-xs m-auto mb-20 px-20 py-5 no-underline bg-orange hover:bg-orange-500 text-white text-24 font-700 rounded-full flex justify-around items-center "
    href={`tel:+1${callRail.phone}`}
  >
    <img src={IconPhone} />
    <span className="leading-none pl-20">{callRail.phone}</span>
  </a>
);

export default HeroButton;
