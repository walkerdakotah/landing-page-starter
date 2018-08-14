import React from 'react';

import { facilityInfo } from '../../lib/project-config.js';

import FacebookIcon from '../../assets/icons/facebook-white.svg';
import InstagramIcon from '../../assets/icons/instagram-white.svg';
import LinkedInIcon from '../../assets/icons/linkedin-white.svg';
import TwitterIcon from '../../assets/icons/twitter-white.svg';

const SocialList = () => (
  <ul className="list-reset flex">
    <li className="pr-10">
      <a href={facilityInfo.linkedinLink} target="blank">
        <img src={LinkedInIcon} alt="linkedin icon" />
      </a>
    </li>
    <li className="pr-10">
      <a href={facilityInfo.twitterLink} target="blank">
        <img src={TwitterIcon} alt="twitter icon" />
      </a>
    </li>
    <li className="pr-10">
      <a href={facilityInfo.facebookLink} target="blank">
        <img src={FacebookIcon} alt="facebook icon" />
      </a>
    </li>
    <li>
      <a href={facilityInfo.instagramLink} target="blank">
        <img src={InstagramIcon} alt="instagram icon" />
      </a>
    </li>
  </ul>
);

export default SocialList;
