import React from 'react';

import HeroCTA from '../../components/cta/HeroCTA';
import Form from '../../components/form/Form';

import { Project, Content, CallRail } from '../../../project-config.js';
const { hero } = Content;

const Hero = () => (
  <section>
    <div className="py-80 hero lg:flex lg:px-10 lg:py-40">
      <div className="container m-auto lg:flex lg:justify-between">
        <div className="container px-10 lg:px-0 max-w-md">
          <div className="text-white text-center sm:text-left lg:py-40">
            <h1 className="mb-20 text-36 lg:text-60 font-700 leading-tight">
              {hero.title}
            </h1>
            <p className="hidden md:block pb-20 text-18 lg:text-26 font-400 leading-loose md:leading-normal">
              {hero.content}
            </p>
            <p className="pb-20 text-18 lg:text-26 font-300 leading-loose md:leading-normal">
              {hero.subline}
            </p>
          </div>
        </div>

        <div className="desktop-form hidden lg:block max-w-sm">
          <div className="bg-grey-100">
            <div className="m-auto container text-center py-40 lg:py-10 xl:py-20 px-10 xl:px-20 lg:w-96 ">
              <a
                className="hidden md:block m-auto mb-20 px-40 py-10 w-72 no-underline bg-orange hover:bg-orange-500 text-white text-24 font-300 rounded-full"
                href={`tel:+1${CallRail.phone}`}
              >
                Call {CallRail.phone}
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
                  href={`${Project.online_policy_link}/`}
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

      <div className="md:hidden">
        <HeroCTA />
      </div>
    </div>

    <div className="mobile-form lg:hidden">
      <div className="bg-grey-100">
        <div className="m-auto container text-center py-40 lg:py-10 xl:py-20 px-10 xl:px-20 lg:w-96 xl:w-112">
          <div className="pb-20 text-18 font-700 text-grey-500">
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
              href={`${Project.online_policy_link}/`}
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
