import React from 'react';

import HeroButton from './buttons/HeroButton';
// import CallButton from './buttons/CallButton';
import Form from './form/Form';

import { facilityInfo, callRail } from '../lib/project-config';
import { hero } from '../lib/content-config';

const Hero = () => (
  <section>
    <div className="hero alcohol-abuse flex flex-col lg:flex-row justify-end items-center lg:px-10 lg:py-40">
      <div className="lg:m-auto container lg:flex lg:justify-between">
        <div className="container px-20 lg:flex lg:flex-col lg:justify-end">
          <div className="text-white text-center lg:text-left">
            <h1 className="h1">{hero.title}</h1>
            <p className="hidden lg:block p">{hero.content}</p>
            <p className="p">{hero.subline}</p>
          </div>
        </div>

        <div className="desktop-form hidden lg:block max-w-sm">
          <div className="bg-grey-100">
            <div className="m-auto container text-center py-40 lg:py-10 xl:py-20 px-10 xl:px-20 lg:w-96 ">
              <a
                className="hidden md:block m-auto mb-20 px-40 py-10 w-72 no-underline bg-orange hover:bg-orange-500 text-white text-24 font-300 rounded-full"
                href={`tel:+1${callRail.phone}`}
              >
                Call {callRail.phone}
              </a>
              <div className="pb-20 text-18 font-700 text-grey-500">
                Prefer a call or email from us instead?
              </div>
              <Form />
              <div className="mt-5 lg:mt-0 pb-20 text-18 font-700 text-grey-500">
                Insurance Accepted. Privacy Guaranteed.
              </div>
              <div className="text-grey-500 text-14 font-500 leading-normal md:m-auto md:w-1/2 lg:w-auto">
                We won’t sell your information and will treat your information
                in accordance with our{' '}
                <a
                  href={`${facilityInfo.onlinePolicyLink}`}
                  target="blank"
                  alt="Privacy Policy"
                  className="text-grey-500"
                >
                  privacy policy
                </a>.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden py-40">
        <HeroButton />
      </div>
    </div>

    <div className="mobile-form lg:hidden">
      <div className="bg-grey-100">
        <div className="m-auto container text-center p-40 lg:w-96">
          <div className="pb-40 text-18 font-700 text-navy">
            Prefer a call or email from us instead?
          </div>
          <Form />
          <div className="mt-5 lg:mt-0 pb-20 text-18 font-700 text-grey-500">
            Insurance Accepted. Privacy Guaranteed.
          </div>
          <div className="text-grey-500 text-14 font-500 leading-normal md:m-auto md:w-1/2 lg:w-auto">
            We won’t sell your information and will treat your information in
            accordance with our{' '}
            <a
              href={`${facilityInfo.onlinePolicyLink}`}
              target="blank"
              alt="Privacy Policy"
              className="text-grey-500"
            >
              privacy policy
            </a>.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
