import React from 'react';
import MaxWidth from "./MaxWidth";

import ameriHealth from '../assets/logo/amerihealth-logo.png';
import bcbs from '../assets/logo/bluecross-blueshield-logo.png';
import cigna from '../assets/logo/cigna-logo.png';
import hphc from '../assets/logo/hphc-logo.png';
import humana from '../assets/logo/humana-logo.png';
import unitedHealth from '../assets/logo/united-healthcare-logo.png';
import upmc from '../assets/logo/upmc-logo.png';
import aetna from '../assets/logo/aetna-logo.png';

export default function InsuranceProviders() {
  return (
    <section className="lg:py-40">
      <MaxWidth>
        <h2 className="h2 text-navy text-center mb-4 lg:mb-8">
          We Work with Many Insurance Companies, including: *</h2>
        <div className="flex flex-wrap justify-around items-center mx-auto py-20">
          <InsuranceLogo src={humana} />
          <InsuranceLogo src={bcbs} />
          <InsuranceLogo src={cigna} />
          <InsuranceLogo src={upmc} />
          <InsuranceLogo src={hphc} />
          <InsuranceLogo src={unitedHealth} />
          <InsuranceLogo src={ameriHealth} />
          <InsuranceLogo src={aetna} style={{ width: `200px` }} />
        </div>
      </MaxWidth>
    </section>
  );
}

function InsuranceLogo(props) {
  return (
    <div className="m-10">
      <img
        src={props.src}
        style={props.style}
        className={props.className ? props.className : 'inline-block max-w-full w-auto h-auto align-top'}
        alt={props.alt || 'american addiction centers photo'}
      />
    </div>
  )
}