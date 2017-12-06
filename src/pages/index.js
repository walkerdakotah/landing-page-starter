import React from 'react'
import Hero from '../components/Hero/Hero'
import Congrats from '../components/Congrats/Congrats'
import ContactForm from '../components/ContactForm/ContactForm'
import Response from '../components/Response/Response'
import InsuranceProviders from '../components/InsuranceProviders/InsuranceProviders'
import CareLevels from '../components/CareLevels/CareLevels'
import About from '../components/About/About'
import Testimonials from '../components/Testimonials/Testimonials'
import ProgramGuarantee from '../components/ProgramGuarantee/ProgramGuarantee'
import Footer from '../components/BrandedFooter/BrandedFooter'

const IndexPage = () => (
  <div className='content'>
    <Hero />
    <Congrats />
    <ContactForm />
    <Response />
    <InsuranceProviders />
    <CareLevels />
    <About />
    <Testimonials />
    <ProgramGuarantee />
    <Footer />
  </div>
)

export default IndexPage
