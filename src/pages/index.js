import React from "react";
import Hero from "../components/Hero/Hero";
import MakeTheCall from "../components/MakeTheCall/MakeTheCall";
import ContactForm from "../components/ContactForm/ContactForm";
import WhatHappens from "../components/WhatHappens/WhatHappens";
import InsuranceProviders from "../components/InsuranceProviders/InsuranceProviders";
import CareLevels from "../components/CareLevels/CareLevels";
import AboutAAC from "../components/AboutAAC/AboutAAC";
import Testimonials from "../components/Testimonials/Testimonials";
import ProgramGuarantee from "../components/ProgramGuarantee/ProgramGuarantee";
import Footer from "../components/BrandedFooter/BrandedFooter";

const IndexPage = () => (
  <div className="content">
    <Hero />
    <MakeTheCall />
    <ContactForm />
    <WhatHappens />
    <InsuranceProviders />
    <CareLevels />
    <AboutAAC />
    <Testimonials />
    <ProgramGuarantee />
    <Footer />
  </div>
);

export default IndexPage;
