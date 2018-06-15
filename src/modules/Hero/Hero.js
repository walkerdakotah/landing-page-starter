import React from 'react';

import HeroCTA from '../../components/cta/HeroCTA';
import Form from '../../components/form/Form';

import { Content } from '../../../project-config.js';
const { hero } = Content;

import HeroImg from '../../assets/background-images/hero--mobile.jpg';

const HeroBg = {
  backgroundImage: `url(${HeroImg})`,
  backgroundRepeat: `no-repeat`,
  backgroundCover: `cover`,
};

const Hero = () => (
  <section>
    <div className="atf hero lg:flex">
      <div className="container m-auto lg:flex">
        <div className="container px-10 lg:px-0 pt-80 lg:pt-0 xl:pt-40">
          <div className="text-white text-center sm:text-left">
            <h1 className="mb-20 sm:pt-80 lg:pt-40 text-36 lg:text-50 font-400 leading-tight">
              {hero.title}
            </h1>
            <p className="hidden md:block pb-20 text-18 lg:text-26 font-300 leading-loose md:leading-normal">
              {hero.content}
            </p>
            <p className="pb-20 text-18 lg:text-26 font-300 leading-loose md:leading-normal">
              {hero.subline}
            </p>
          </div>
        </div>

        <div className="desktop-form hidden lg:block">
          <Form />
        </div>
      </div>

      <div className="md:hidden">
        <HeroCTA />
      </div>
    </div>

    <div className="mobile-form lg:hidden">
      <Form />
    </div>
  </section>
);

export default Hero;
