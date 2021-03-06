import React from 'react';
// utils
import { formatText, formatPhoneDisplay, formatPhoneLink } from "../lib/utils"
// globals
import { onlinePolicy, privacyPractices, termsOfUse, } from '../lib/globals.js';
// icons/logos
import FacebookIcon from '../assets/icon/social-facebook.svg';
import InstagramIcon from '../assets/icon/social-instagram.svg';
import LinkedinIcon from '../assets/icon/social-linkedin.svg';
import TwitterIcon from '../assets/icon/social-twitter.svg';
import BBBLogo from '../assets/logo/bbb.png';
import CarfLogo from '../assets/logo/carf.png';
import JointCommissionLogo from '../assets/logo/joint-commission.png';

export default function Footer(props) {
  const date = new Date();
  const year = date.getFullYear();
  const Logo = require(`../assets/logo/logo-${props.theme.siteName}-white.png`)
  return (
    <footer className="bg-navy ">
      <div className="flex flex-col flex-wrap lg:flex-row lg:flex-no-wrap">
        <div className="text-center my-30 lg:flex-1 lg:my-60">
          <img src={Logo} className="px-2 w-full" alt={props.theme.siteName} style={{ maxWidth: `350px` }} />
          <p className="p text-white mt-15 capitalize">
            {formatText(props.theme.siteName)} <br />
            {formatPhoneDisplay(props.theme.phone)} <br />
            {props.theme.street}<br />
            {props.theme.cityStateZip}
          </p>
          <div className="m-auto mt-15">
            <a className="px-2" href={props.theme.linkedin} target="blank">
              <img src={LinkedinIcon} alt="linkedin icon" />
            </a>
            <a className="px-2" href={props.theme.twitter} target="blank">
              <img src={TwitterIcon} alt="twitter icon" />
            </a>
            <a className="px-2" href={props.theme.facebook} target="blank">
              <img src={FacebookIcon} alt="facebook icon" />
            </a>
            <a className="px-2" href={props.theme.instagram} target="blank">
              <img src={InstagramIcon} alt="instagram icon" />
            </a>
          </div>
        </div>
        <div className="pt-15 border-t border-gray-300 lg:flex-1 lg:border-none lg:my-60">
          <h3 className="p text-aqua uppercase mb-30 px-15">Resources</h3>
          <ul className="list-reset mt-8 px-30 pb-4">
            <li className="subtext mb-5 text-aqua">
              * Source:{' '}
              <a
                href="https://www.niaaa.nih.gov/alcohol-health/overview-alcohol-consumption/alcohol-use-disorders"
                target="blank"
              >
                www.niaaa.nih.gov
              </a>
            </li>
            <li className="subtext mb-5 text-aqua">
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
        <div className="pt-15 border-t border-gray-300 lg:flex-1 lg:border-none lg:my-60">
          <h3 className="p text-aqua uppercase mb-30 px-15">Legal</h3>
          <ul className="list-reset mt-8 px-30 pb-4">
            <li className="mb-5 text-aqua">
              <a className="p" href={privacyPractices} target="blank">
                Notice of Privacy Practices
              </a>
            </li>
            <li className="mb-5 text-aqua">
              <a className="p" href={onlinePolicy} target="blank">
                Online Privacy Policy
              </a>
            </li>
            <li className="mb-5 text-aqua">
              <a className="p" href={termsOfUse} target="blank">
                Terms of Use
              </a>
            </li>
          </ul>
          <div className="flex justify-center pt-30 pb-50 border-t border-gray-300 lg:border-none lg:justify-start lg:pl-15">
            <img className="mx-10" src={BBBLogo} alt="Better Business Bureau " />
            <img className="mx-10" src={CarfLogo} alt="CARF " />
            <img className="mx-10" src={JointCommissionLogo} alt="Joint Commission " />
          </div>
        </div>
      </div>
      <div className="subtext text-aqua text-center py-4">
        American Addiction Centers Copyright {year}
      </div>
    </footer>
  );
}






// <footer className="bg-navy">
//   <div className="content-block flex flex-col items-center lg:flex-row lg:items-start lg:justify-around">
//     <div className="w-290 my-8 text-center lg:mt-16">
//       <img src={Logo} alt={props.theme.siteName} />

//       <p className="p text-white my-8 capitalize">
//         {formatText(props.theme.siteName)} <br />
//         {formatPhoneDisplay(props.theme.phone)} <br />
//         {props.theme.street}<br />
//         {props.theme.cityStateZip}
//       </p>
      // <div
      //   className="flex justify-between m-auto"
      //   style={{ width: '120px' }}
      // >
      //   <a href={props.theme.linkedin} target="blank">
      //     <img src={LinkedinIcon} alt="linkedin icon" />
      //   </a>
      //   <a href={props.theme.twitter} target="blank">
      //     <img src={TwitterIcon} alt="twitter icon" />
      //   </a>
      //   <a href={props.theme.facebook} target="blank">
      //     <img src={FacebookIcon} alt="facebook icon" />
      //   </a>
      //   <a href={props.theme.instagram} target="blank">
      //     <img src={InstagramIcon} alt="instagram icon" />
      //   </a>
      // </div>
//     </div>

//     <div className="w-290 pt-4 lg:mt-12">
//       <h3 className="p text-aqua mb-8 px-4 lg:px-0">Privacy</h3>
      // <ul className="list-reset mt-8 mb-4 px-8 pb-4 lg:px-0">
      //   <li className="mb-2 text-aqua w-290">
      //     <a className="subtext" href={privacyPractices} target="blank">
      //       Notice of Privacy Practices
      //         </a>
      //   </li>
      //   <li className="mb-2 text-aqua w-290">
      //     <a className="subtext" href={onlinePolicy} target="blank">
      //       Online Privacy Policy
      //         </a>
      //   </li>
      //   <li className="mb-2 text-aqua w-290">
      //     <a className="subtext" href={termsOfUse} target="blank">
      //       Terms of Use
      //         </a>
      //   </li>
      // </ul>
      // <div
      //   className="flex justify-between ml-8 pb-16"
      //   style={{ width: '220px' }}
      // >
      //   <img src={BBBLogo} alt="Better Business Bureau " />
      //   <img src={CarfLogo} alt="CARF " />
      //   <img src={JointCommissionLogo} alt="Joint Commission " />
      // </div>
//     </div>
//     <div className="w-290 pt-4 lg:mt-12">
//       <h3 className="p text-aqua mb-8 px-4 lg:px-0">Resources</h3>
      // <ul className="list-reset mt-8 mb-4 px-8 pb-4 lg:px-0">
      //   <li className="subtext text-aqua mb-2 w-290">
      //     * Source:{' '}
      //     <a
      //       href="https://www.niaaa.nih.gov/alcohol-health/overview-alcohol-consumption/alcohol-use-disorders"
      //       target="blank"
      //     >
      //       www.niaaa.nih.gov
      //         </a>
      //   </li>
      //   <li className="subtext text-aqua mb-2 w-290">
      //     ** Terms and conditions apply. To learn more about how you can
      //         qualify for our guarantee, read our{' '}
      //     <a
      //       href="https://americanaddictioncenters.org/disclaimer/"
      //       target="blank"
      //     >
      //       disclaimer
      //         </a>{' '}
      //     for details.
      //       </li>
      // </ul>
//     </div>;
//       </div>

//   <div className="subtext text-aqua text-center py-4">
//     American Addiction Centers Copyright {year}
//   </div>
// </footer>