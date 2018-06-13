import React from 'react';

import Hero from '../modules/Hero/Hero';
import InsuranceBlock from '../modules/InsuranceBlock/InsuranceBlock';
import YouAreNotAlone from '../modules/YouAreNotAlone/YouAreNotAlone';
import WhatHappens from '../modules/WhatHappens/WhatHappens';
import TreatmentApproach from '../modules/TreatmentApproach/TreatmentApproach';

// import MakeTheCall from '../modules`/MakeTheCall/MakeTheCall';
// import ContactForm from '../modules`/ContactForm/ContactForm';
// import CareLevels from '../modules`/CareLevels/CareLevels';
// import AboutAAC from '../modules`/AboutAAC/AboutAAC';
// import Testimonials from '../modules`/Testimonials/Testimonials';
// import ProgramGuarantee from '../modules`/ProgramGuarantee/ProgramGuarantee';
// import Footer from '../modules`/BrandedFooter/BrandedFooter';

const IndexPage = () => (
  <div className="pt-14 md:pt-18 lg:pt-22">
    <Hero />
    <InsuranceBlock />
    <YouAreNotAlone />
    <WhatHappens />
    <TreatmentApproach />
    {/*
    <MakeTheCall />
    <ContactForm />
    <CareLevels />
    <AboutAAC />
    <Testimonials />
    <ProgramGuarantee />
    <Footer /> */}
  </div>
);

export default IndexPage;
