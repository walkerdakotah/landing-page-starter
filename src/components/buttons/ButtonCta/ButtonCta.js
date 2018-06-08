import React from 'react';
import { CallRail } from '../../../../project-config';

const ButtonCta = () => (
  <div className="button button-cta text-uppercase bg-orange pad-h-1">
    <a className="font-white font-500" href={`tel:+1${CallRail.phone}`}>
      Call {CallRail.phone}
    </a>
  </div>
);

export default ButtonCta;
