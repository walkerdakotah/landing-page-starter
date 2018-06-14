import React from 'react';
import HeroCTA from '../../components/cta/HeroCTA';

import Form from '../../components/form/Form';
import { Content } from '../../../project-config.js';

const { hero } = Content;

const Hero = () => (
  <section>
    <div className="atf better-chance">
      <div className="m-auto container pt-80 ">
        <div className="text-white text-center sm:text-left lg:w-2/3">
          <h1 className="mb-20 sm:pt-80 text-36 font-400 leading-tight">
            {hero.title}
          </h1>
          <p className="hidden md:block pb-20 text-26 font-300 leading-loose md:leading-normal">
            {hero.content}
          </p>
          <p className="pb-20 text-18 md:text-26 font-300 leading-loose md:leading-normal">
            {hero.subline}
          </p>
        </div>
      </div>
      <HeroCTA />
    </div>
    <Form />
  </section>
);

export default Hero;
