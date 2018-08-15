import React from 'react';
import LogoSecondary from './logo/LogoSecondary';
import aacHorizontal from '../assets/logos/aac-horiz-white.svg';
import { facilityInfo } from '../lib/project-config.js';
import { phoneNumber } from '../lib/globals.js';

// imports icons for SocialList
import FacebookIcon from '../assets/icons/facebook-white.svg';
import InstagramIcon from '../assets/icons/instagram-white.svg';
import LinkedInIcon from '../assets/icons/linkedin-white.svg';
import TwitterIcon from '../assets/icons/twitter-white.svg';
// imports logos for Accredidations List
import BBBLogo from '../assets/logos/bbb.png';
import CarfLogo from '../assets/logos/carf-white.png';
import JointCommissionLogo from '../assets/logos/joint-commission-white.png';

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

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-navy flex flex-col">
      <div className="lg:flex">
        <div className="lg:w-1/3 footer-section my-8 text-center">
          <img src={aacHorizontal} style={{ width: '290px', height: 'auto' }} />
          <p className="p text-white leading-normal my-8">
            American Addiction Centers <br />
            {phoneNumber} <br />
            200 Powell Pl <br />
            Brentwood, TN 37027
          </p>
          <div
            className="flex justify-between m-auto"
            style={{ width: '120px' }}
          >
            <a href={facilityInfo.linkedinLink} target="blank">
              <img src={LinkedInIcon} alt="linkedin icon" />
            </a>
            <a href={facilityInfo.twitterLink} target="blank">
              <img src={TwitterIcon} alt="twitter icon" />
            </a>
            <a href={facilityInfo.facebookLink} target="blank">
              <img src={FacebookIcon} alt="facebook icon" />
            </a>
            <a href={facilityInfo.instagramLink} target="blank">
              <img src={InstagramIcon} alt="instagram icon" />
            </a>
          </div>
        </div>
        <div className="lg:mt-8 lg:w-1/3 footer-section pt-4">
          <h3 className="p text-aqua mb-8 px-4">Privacy</h3>
          <ul className="list-reset mt-8 mb-4 px-8 pb-4">
            <li className="mb-2 text-aqua">
              <a
                className="subtext"
                href={facilityInfo.onlinePolicyLink}
                target="blank"
              >
                Notice of Privacy Practices
              </a>
            </li>
            <li className="mb-2 text-aqua">
              <a
                className="subtext"
                href={facilityInfo.privatePolicyLink}
                target="blank"
              >
                Online Privacy Policy
              </a>
            </li>
            <li className="mb-2 text-aqua">
              <a
                className="subtext"
                href={facilityInfo.termsLink}
                target="blank"
              >
                Terms of Use
              </a>
            </li>
          </ul>
          <div
            className="flex justify-between m-auto lg:ml-8 pb-16"
            style={{ width: '220px' }}
          >
            <img src={BBBLogo} alt="Better Business Bureau " />
            <img src={CarfLogo} alt="CARF " />
            <img src={JointCommissionLogo} alt="Joint Commission " />
          </div>
        </div>
        <div className="lg:mt-8 lg:w-1/3 footer-section pt-4">
          <h3 className="p text-aqua mb-8 px-4">Resources</h3>
          <ul className="list-reset mt-8 mb-4 px-8 pb-4">
            <li className="subtext text-aqua mb-2">
              *Source:{' '}
              <a
                href="https://www.niaaa.nih.gov/alcohol-health/overview-alcohol-consumption/alcohol-use-disorders"
                target="blank"
              >
                www.niaaa.nih.gov
              </a>
            </li>
            <li className="subtext text-aqua mb-2">
              **Terms and conditions apply. To learn more about how you can
              qualify for our guarantee, read our{' '}
              <a
                href="https://americanaddictioncenters.org/disclaimer/"
                target="blank"
              >
                disclaimer
              </a>{' '}
              for details.
            </li>
          </ul>
        </div>
      </div>
      <div className="subtext text-aqua text-center py-4">
        American Addiction Centers Copyright {year}
      </div>
    </footer>
  );
}
