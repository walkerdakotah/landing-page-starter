import React from 'react';

import { Project } from '../../../project-config.js';

import FacebookIcon from '../../assets/icons/facebook-white.svg';
import InstagramIcon from '../../assets/icons/instagram-white.svg';
import LinkedInIcon from '../../assets/icons/linkedin-white.svg';
import TwitterIcon from '../../assets/icons/twitter-white.svg';

const SocialList = () => (
  <ul className="list-reset flex">
    <li className="pr-10">
      <a href={Project.linkedin_link} target="blank">
        <img src={LinkedInIcon} alt="linkedin icon" />
      </a>
    </li>
    <li className="pr-10">
      <a href={Project.twitter_link} target="blank">
        <img src={TwitterIcon} alt="twitter icon" />
      </a>
    </li>
    <li className="pr-10">
      <a href={Project.facebook_link} target="blank">
        <img src={FacebookIcon} alt="facebook icon" />
      </a>
    </li>
    <li>
      <a href={Project.instagram_link} target="blank">
        <img src={InstagramIcon} alt="instagram icon" />
      </a>
    </li>
  </ul>
);

export default SocialList;
