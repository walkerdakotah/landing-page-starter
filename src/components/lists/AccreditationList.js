import React from 'react';

import BBBLogo from '../../assets/logos/bbb.png';
import CarfLogo from '../../assets/logos/carf-white.png';
import JointCommissionLogo from '../../assets/logos/joint-commission-white.png';

const AccreditationList = () => (
  <ul className="list-reset flex">
    <li className="pr-20">
      <img src={BBBLogo} alt="Better Business Bureau logo" />
    </li>
    <li className="pr-20">
      <img src={CarfLogo} alt="CARF logo" />
    </li>
    <li className="pr-20">
      <img src={JointCommissionLogo} alt="Joint Commission logo" />
    </li>
  </ul>
);

export default AccreditationList;
