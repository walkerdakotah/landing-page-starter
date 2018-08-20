import React from 'react';

import Hero from '../components/Hero';
import FacilityFeatures from '../components/FacilityFeatures';
import YouAreNotAlone from '../components/YouAreNotAlone';
import WhatHappens from '../components/WhatHappens';
import OurApproach from '../components/OurApproach';
import Outcomes from '../components/Outcomes';
import BrandPromise from '../components/BrandPromise';
import Testimonials from '../components/Testimonials';
import ThreeSteps from '../components/ThreeSteps';
import Footer from '../components/Footer';

const IndexPage = () => (
  // <div className="pt-14 md:pt-18 lg:pt-22">
  <div>
    {/*
    <Hero />
    <FacilityFeatures />
  */}
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
