import React from 'react';

import { Project } from '../../../project-config.js';

import FacebookIcon from '../../assets/icon/icon-social-facebook.svg';
import InstagramIcon from '../../assets/icon/icon-social-instagram.svg';
import LinkedInIcon from '../../assets/icon/icon-social-linkedin.svg';
import TwitterIcon from '../../assets/icon/icon-social-twitter.svg';

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
