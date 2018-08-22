import React from 'react';
import Form from './Form';
import { PhoneIconSolid } from './svgs/Svgs';
import { facility, callRail } from '../lib/project-config';

export default function Hero() {
  return (
    <section>
      <div className="hero bg-img alcohol-abuse relative lg:static lg:flex">
        {/* mobile hero -- content only */}
        <div className="text-center px-4 pb-8 absolute pin-b-center lg:hidden">
          <h1 className="h1 text-white mb-8">
            Help can start in just 24 hours.
          </h1>
          <p className="tagline text-white mb-8">
            We're here to help you get your life back. Are you ready?
          </p>
          <a className="relative" href={`tel:+1${callRail.phone}`}>
            <button className="btn btn-orange">
              <PhoneIconSolid
                style={{ position: 'absolute', bottom: '-12px', left: '25px' }}
              />
              <span style={{ marginRight: '-55px' }}>{callRail.phone}</span>
            </button>
          </a>
        </div>
        {/* desktop hero -- content & form */}
        <div className="hidden content-block lg:flex">
          <div className="flex flex-col justify-end px-2">
            <h1 className="h1 text-white mb-8">
              Help can start in just 24 hours.
            </h1>
            <p className="tagline text-white mb-8">
              Long-term recovery from drug and alcohol addiction is not only
              possible, it’s within your reach. We’ve helped thousands of people
              stop using for good through proven clinical treatment and positive
              changes in attitude, behavior, lifestyle and values.
            </p>
            <p className="tagline text-white mb-8 text-bold">
              We're here to help you get your life back. Are you ready?
            </p>
          </div>
          <div className="bg-grey-100 text-center mx-2 px-8 py-12">
            <a className="" href={`tel:+1${callRail.phone}`}>
              <button className="btn btn-orange">Call {callRail.phone}</button>
            </a>
            <h4 className="p text-navy my-4">
              Prefer a call or email from us instead?
            </h4>
            <Form />
            <h4 className="p my-4">Insurance Accepted. Privacy Guaranteed.</h4>
            <p className="p3">
              We won’t sell your information and will treat your information in
              accordance with our{' '}
              <a href={`${facility.onlinePolicyLink}`} target="blank">
                privacy policy
              </a>.
            </p>
          </div>
        </div>
      </div>
      {/* mobile form */}
      <div className="bg-grey-100 px-4 py-8 text-center lg:hidden">
        <h4 className="h4 text-navy mb-4">
          Prefer a call or email from us instead?
        </h4>
        <Form />
        <h4 className="h4 my-4">Insurance Accepted. Privacy Guaranteed.</h4>
        <p className="p3">
          We won’t sell your information and will treat your information in
          accordance with our{' '}
          <a
            href={`${facility.onlinePolicyLink}`}
            target="blank"
            alt="Privacy Policy"
          >
            privacy policy
          </a>.
        </p>
      </div>
    </section>
  );
}
