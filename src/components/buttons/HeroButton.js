import React from 'react';
import IconPhone from '../../assets/icons/phone-orange-solid.svg';
import { OrangePhoneIcon } from '../svgs/Svgs';

import { callRail } from '../../lib/project-config';

const HeroButton = () => (
  <a className="relative" href={`tel:+1${callRail.phone}`}>
    <button className="btn btn-orange">
      <OrangePhoneIcon
        style={{ position: 'absolute', bottom: '-12px', left: '25px' }}
      />
      <span style={{ marginRight: '-55px' }}>{callRail.phone}</span>
    </button>
  </a>
);

export default HeroButton;
