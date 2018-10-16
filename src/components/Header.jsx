import React from 'react';
import MaxWidth from "./MaxWidth"
import { callTrackingNumber } from '../lib/globals.js';
import CallTrackingNumber from "./CallTrackingNumber"
import Button from './Button';


export default function Header(props) {

  const Logo = require(`../assets/logo/logo-${props.theme.siteName}.png`)
  return (
    <header className="py-20">
      <MaxWidth maxWidth='header-max-w'>
        <div className="flex flex-col justify-between items-center lg:flex-row">
          <div className="mb-20 lg:mb-0">
            <a>
              <img className="px-10 w-full" style={{ maxWidth: '350px' }} src={Logo} alt={props.theme.siteName} />
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