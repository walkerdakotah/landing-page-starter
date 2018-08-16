import React from 'react';
// data
import { facilityInfo } from '../lib/project-config.js';
import { phoneNumber } from '../lib/globals.js';
// icons/logos
import FacebookIcon from '../assets/icons/facebook-white.svg';
import InstagramIcon from '../assets/icons/instagram-white.svg';
import LinkedInIcon from '../assets/icons/linkedin-white.svg';
import TwitterIcon from '../assets/icons/twitter-white.svg';
import AacHorizontalLogo from '../assets/logos/aac-horiz-white.svg';
import BBBLogo from '../assets/logos/bbb.png';
import CarfLogo from '../assets/logos/carf-white.png';
import JointCommissionLogo from '../assets/logos/joint-commission-white.png';

const logoWidth = { maxWidth: '290px' };

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-navy flex flex-col">
      <div className="lg:flex">
        <div className="footer-section my-8 text-center lg:mt-16 lg:w-1/3">
          <img src={AacHorizontalLogo} style={logoWidth} />
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
        <div className="pt-4 lg:mt-12 lg:w-1/3">
          <h3 className="p text-aqua mb-8 px-4">Privacy</h3>
          <ul className="list-reset mt-8 mb-4 px-8 pb-4">
            <li className="mb-2 text-aqua" style={logoWidth}>
              <a
                className="subtext"
                href={facilityInfo.onlinePolicyLink}
                target="blank"
              >
                Notice of Privacy Practices
              </a>
            </li>
            <li className="mb-2 text-aqua" style={logoWidth}>
              <a
                className="subtext"
                href={facilityInfo.privatePolicyLink}
                target="blank"
              >
                Online Privacy Policy
              </a>
            </li>
            <li className="mb-2 text-aqua" style={logoWidth}>
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
            className="flex justify-between ml-8 pb-16"
            style={{ width: '220px' }}
          >
            <img src={BBBLogo} alt="Better Business Bureau " />
            <img src={CarfLogo} alt="CARF " />
            <img src={JointCommissionLogo} alt="Joint Commission " />
          </div>
        </div>
        <div className="pt-4 lg:mt-12 lg:w-1/3">
          <h3 className="p text-aqua mb-8 px-4">Resources</h3>
          <ul className="list-reset mt-8 mb-4 px-8 pb-4">
            <li className="subtext text-aqua mb-2" style={logoWidth}>
              * Source:{' '}
              <a
                href="https://www.niaaa.nih.gov/alcohol-health/overview-alcohol-consumption/alcohol-use-disorders"
                target="blank"
              >
                www.niaaa.nih.gov
              </a>
            </li>
            <li className="subtext text-aqua mb-2" style={logoWidth}>
              ** Terms and conditions apply. To learn more about how you can
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
