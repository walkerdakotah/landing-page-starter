import React from 'react';
import HeroImage from './HeroImage'
import MaxWidth from '../MaxWidth'
import { HiddenOnDesktop, HiddenOnMobile } from "../HiddenContainers"
import Form from '../Form/Form';
import { PhoneIconSolid } from '../svgs/Icons';
import { callRail } from '../../lib/project-config';
import onlinePolicy from '../../lib/globals'

import helpHero from "../../assets/image/help-hero.jpg"

export default function Hero(props) {

  return (
    <section>
      <HeroImage style={{ padding: `90px 15px`, backgroundImage: `url(${helpHero})` }}>
        <MaxWidth style={{ display: 'flex', alignItems: 'center' }}>
          <div className="items-center">
            <h1 className="h1 text-white mb-8 text-center lg:text-left">{props.title}</h1>
            <p className="tagline text-white mb-8 text-center lg:text-left">{props.body}</p>
            <p className="tagline text-white mb-8 text-bold text-center lg:text-left">{props.subline}</p>
          </div>
          <HiddenOnMobile>
            <Form />
          </HiddenOnMobile>
        </MaxWidth>
      </HeroImage>
      <HiddenOnDesktop>
        <Form />
      </HiddenOnDesktop>
    </section>
  );
}




// <div className="hero bg-img alcohol-abuse relative lg:static lg:flex">

//   <HiddenOnDesktop>
//     <h1 className="h1 text-white mb-8">{props.title}</h1>
//     <p className="tagline text-white mb-8">{props.subline}</p>
//     <a className="relative" href={`tel:+1${callRail.phone}`}>
//       <button className="btn btn-orange">
//         <PhoneIconSolid
//           style={{ position: 'absolute', bottom: '-12px', left: '25px' }}
//         />
//         <span style={{ marginRight: '-55px' }}>{callRail.phone}</span>
//       </button>
//     </a>
//   </HiddenOnDesktop>

//   <HiddenOnMobile>
//     <div className="flex flex-col justify-end px-2">
//       <h1 className="h1 text-white mb-8">{props.title}</h1>
//       <p className="tagline text-white mb-8">{props.body}</p>
//       <p className="tagline text-white mb-8 text-bold">{props.subline}</p>
//     </div>
//     <div className="bg-grey-100 text-center mx-2 px-8 py-12">
//       <a className="" href={`tel:+1${callRail.phone}`}>
//         <button className="btn btn-orange">Call {callRail.phone}</button>
//       </a>
//       <h4 className="p text-navy my-4">
//         Prefer a call or email from us instead?
//             </h4>
//       <Form />
//       <h4 className="p my-4">Insurance Accepted. Privacy Guaranteed.</h4>
//       <p className="p3">
//         We won’t sell your information and will treat your information in
//               accordance with our{' '}
//         <a href={`${onlinePolicy}`} target="blank">
//           privacy policy
//               </a>.
//             </p>
//     </div>
//   </HiddenOnMobile>
//   {/*</div>*/}
// </div>
// {/* mobile form */ }
// <div className="bg-grey-100 px-4 py-8 text-center lg:hidden">
//   <h4 className="h4 text-navy mb-4">
//     Prefer a call or email from us instead?
//         </h4>
//   <Form />
//   <h4 className="h4 my-4">Insurance Accepted. Privacy Guaranteed.</h4>
//   <p className="p3">
//     We won’t sell your information and will treat your information in
//           accordance with our{' '}
//     <a
//       href={`${onlinePolicy}`}
//       target="blank"
//       alt="Privacy Policy"
//     >
//       privacy policy
//           </a>.
//         </p>
// </div>