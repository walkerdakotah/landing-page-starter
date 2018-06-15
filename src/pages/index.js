import React from 'react';

import Hero from '../modules/Hero/Hero';
import InsuranceBlock from '../modules/InsuranceBlock/InsuranceBlock';
import YouAreNotAlone from '../modules/YouAreNotAlone/YouAreNotAlone';
import WhatHappens from '../modules/WhatHappens/WhatHappens';
import OurApproach from '../modules/OurApproach/OurApproach';
import Outcomes from '../modules/Outcomes/Outcomes';
import BrandPromise from '../modules/BrandPromise/BrandPromise';
import Testimonials from '../modules/Testimonials/Testimonials';
import ThreeSteps from '../modules/ThreeSteps/ThreeSteps';
import Footer from '../modules/Footer/Footer';

const IndexPage = () => (
  <div className="pt-14 md:pt-18 lg:pt-22">
    <Hero />
    <InsuranceBlock />
    <YouAreNotAlone />
    <WhatHappens />
    <OurApproach />
    <Outcomes />
    <BrandPromise />
    <Testimonials />
    <ThreeSteps />
    <Footer />
  </div>
);

export default IndexPage;
