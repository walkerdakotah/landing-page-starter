import React from 'react';
// globals
import {
  phoneNumber,
  onlinePolicy,
  privacyPractices,
  termsOfUse,
  aacFacebook,
  aacInstagram,
  aacLinkedin,
  aacTwitter
} from '../lib/globals.js';
// icons/logos
import FacebookIcon from '../assets/icons/facebook-white.svg';
import InstagramIcon from '../assets/icons/instagram-white.svg';
import LinkedinIcon from '../assets/icons/linkedin-white.svg';
import TwitterIcon from '../assets/icons/twitter-white.svg';
import AacHorizontalLogo from '../assets/logos/aac-horiz-white.svg';
import BBBLogo from '../assets/logos/bbb.png';
import CarfLogo from '../assets/logos/carf-white.png';
import JointCommissionLogo from '../assets/logos/joint-commission-white.png';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-navy">
      <div className="content-block flex flex-col items-center lg:flex-row lg:items-start lg:justify-around">
        <div className="w-290 my-8 text-center lg:mt-16">
          <img src={AacHorizontalLogo} />
          <p className="p text-white my-8">
            American Addiction Centers <br />
            {phoneNumber} <br />
            200 Powell Pl <br />
            Brentwood, TN 37027
          </p>
          <div
            className="flex justify-between m-auto"
            style={{ width: '120px' }}
          >
            <a href={aacLinkedin} target="blank">
              <img src={LinkedinIcon} alt="linkedin icon" />
            </a>
            <a href={aacTwitter} target="blank">
              <img src={TwitterIcon} alt="twitter icon" />
            </a>
            <a href={aacFacebook} target="blank">
              <img src={FacebookIcon} alt="facebook icon" />
            </a>
            <a href={aacInstagram} target="blank">
              <img src={InstagramIcon} alt="instagram icon" />
            </a>
          </div>
        </div>
        <div className="w-290 pt-4 lg:mt-12">
          <h3 className="p text-aqua mb-8 px-4 lg:px-0">Privacy</h3>
          <ul className="list-reset mt-8 mb-4 px-8 pb-4 lg:px-0">
            <li className="mb-2 text-aqua w-290">
              <a className="subtext" href={privacyPractices} target="blank">
                Notice of Privacy Practices
              </a>
            </li>
            <li className="mb-2 text-aqua w-290">
              <a className="subtext" href={onlinePolicy} target="blank">
                Online Privacy Policy
              </a>
            </li>
            <li className="mb-2 text-aqua w-290">
              <a className="subtext" href={termsOfUse} target="blank">
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
        <div className="w-290 pt-4 lg:mt-12">
          <h3 className="p text-aqua mb-8 px-4 lg:px-0">Resources</h3>
          <ul className="list-reset mt-8 mb-4 px-8 pb-4 lg:px-0">
            <li className="subtext text-aqua mb-2 w-290">
              * Source:{' '}
              <a
                href="https://www.niaaa.nih.gov/alcohol-health/overview-alcohol-consumption/alcohol-use-disorders"
                target="blank"
              >
                www.niaaa.nih.gov
              </a>
            </li>
            <li className="subtext text-aqua mb-2 w-290">
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
        </div>;
      </div>

      <div className="subtext text-aqua text-center py-4">
        American Addiction Centers Copyright {year}
      </div>
    </footer>
  );
}
