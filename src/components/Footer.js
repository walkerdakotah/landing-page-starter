import React from 'react';
import LogoSecondary from './logo/LogoSecondary';
import { facilityInfo, corpAddress, corpPhone } from '../lib/project-config.js';

// imports icons for SocialList
import FacebookIcon from '../assets/icons/facebook-white.svg';
import InstagramIcon from '../assets/icons/instagram-white.svg';
import LinkedInIcon from '../assets/icons/linkedin-white.svg';
import TwitterIcon from '../assets/icons/twitter-white.svg';
// imports logos for Accredidations List
import BBBLogo from '../assets/logos/bbb.png';
import CarfLogo from '../assets/logos/carf-white.png';
import JointCommissionLogo from '../assets/logos/joint-commission-white.png';

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

const DisclaimersList = () => (
  <ul className="subtext text-grey-100 list-reset pt-20 pl-10">
    <li className="leading-normal pb-5 lg:pb-10">
      *Source:
      <a
        href="https://www.niaaa.nih.gov/alcohol-health/overview-alcohol-consumption/alcohol-use-disorders"
        target="blank"
      >
        www.niaaa.nih.gov/alcohol-health/overview-alcohol-consumption/alcohol-use-disorders
      </a>
    </li>
    <li className="leading-normal">
      **Terms and conditions apply. To learn more about how you can qualify for
      our guarantee, visit{' '}
      <a href="https://americanaddictioncenters.org/disclaimer/" target="blank">
        americanaddictioncenters.org/disclaimer
      </a>{' '}
      for details.
    </li>
  </ul>
);

const PoliciesList = () => (
  <ul className="list-reset pt-20 flex flex-wrap">
    <li className="mb-5 pr-10 flex-none border-r border-white">
      <a
        className="subtext text-white"
        href={facilityInfo.onlinePolicyLink}
        target="blank"
      >
        Notice of Privacy Practices
      </a>
    </li>
    <li className="mb-5 px-10 flex-none border-r border-white">
      <a
        className="subtext text-white"
        href={facilityInfo.privatePolicyLink}
        target="blank"
      >
        Online Privacy Policy
      </a>
    </li>
    <li className="mb-5 px-10 flex-none">
      <a
        className="subtext text-white"
        href={facilityInfo.termsLink}
        target="blank"
      >
        Terms of Use
      </a>
    </li>
  </ul>
);

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

const ContactInfo = () => (
  <div className="pb-20">
    <div className="p text-white leading-normal lg:pb-10">
      <p className="mb-10">{corpPhone}</p>
      <p className="mb-10">{corpAddress.street}</p>
      <p className="mb-10">
        {corpAddress.city}, {corpAddress.state} {corpAddress.zipcode}
      </p>
    </div>
  </div>
);

const Footer = () => (
  <section className="bg-navy">
    <div className="m-auto container py-40 px-10 lg:px-40">
      <LogoSecondary />
      <div className="pt-20 lg:pb-20 flex flex-col lg:flex-row lg:justify-between">
        <div className="pb-20">
          <ContactInfo />
          <SocialList />
        </div>

        <div className="flex flex-col lg:items-end lg:justify-end">
          <AccreditationList />
          <PoliciesList />
        </div>
      </div>
      <DisclaimersList />
      <div className="subtext text-grey-100 text-center py-40">
        © American Addiction Centers Copyright 2018
      </div>
    </div>
  </section>
);

export default Footer;
