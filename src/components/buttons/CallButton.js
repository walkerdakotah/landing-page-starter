import React from 'react';
import IconPhone from '../../assets/icons/phone-orange-solid.svg';
import { OrangePhoneIcon } from '../svgs/Svgs';
import { callRail } from '../../lib/project-config';

export default function() {
  return (
    <a className="" href={`tel:+1${callRail.phone}`}>
      <button>
        <OrangePhoneIcon />
        {callRail.phone}
      </button>
    </a>
  );
}
