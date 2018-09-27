import React from 'react';
import { facility, callRail } from '../lib/project-config.js';
import MaxWidth from "./MaxWidth"
import { callTrackingNumber } from '../lib/globals.js';
import CallTrackingNumber from "./CallTrackingNumber"
import Button from './Button';

export default function Header(props) {
  return (
    <header className="py-20">
      <MaxWidth>
        <div className="flex flex-col justify-between items-center lg:flex-row">
          <div className="mb-20 lg:mb-0">
            <a>
              <img className="px-10 w-full" style={{ maxWidth: '350px' }} src={require(`../assets/logos/logo-${facility.name}.png`)} alt={facility.name} />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <CallTrackingNumber>
                <Button theme="orange">
                  {callTrackingNumber}
                </Button>
              </CallTrackingNumber>
            </div>
            <div className="subtext text-navy text-center mt-10">
              Privacy Guaranteed
            </div>
          </div>
        </div>
      </MaxWidth>
    </header>
  )
}


// export default function Header(props) {
//   return (
//     <header className="border-grey-100 border-b px-8 py-4 lg:px-16">
//       <nav className="flex justify-center content-block lg:justify-between">
//         <a className="flex" href="/" target="blank">
//           <img
//             src={require(`../assets/logos/logo-${facility.name}.svg`)}
//             className="header-logo"
//           />
//         </a>
//         <div className="hidden lg:flex lg:flex-col">
//           <a className="flex no-underline" href={`tel:+1${callRail.phone}`}>
//             <button className="text-24 text-orange">
//               Call {callRail.phone}
//             </button>
//           </a>
//           <p className="p text-grey text-right">Privacy Guaranteed</p>
//         </div>
//       </nav>
//     </header>
//   );
// }
