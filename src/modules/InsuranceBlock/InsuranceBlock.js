import React from 'react';
import ameriHealth from '../../assets/logo/ameri-health.png';
import blueCross from '../../assets/logo/blue-cross.png';
import cigna from '../../assets/logo/cigna.png';
import harvardHealth from '../../assets/logo/harvard-health.png';
import humana from '../../assets/logo/humana.png';
import unitedHealth from '../../assets/logo/united-health.png';
import upmc from '../../assets/logo/upmc.png';

const InsuranceProviders = () => (
  <section className="lg:py-40">
    <div className="m-auto container py-40 px-10 text-center">
      <h2 className="mb-20 lg:mb-40 lg:pb-20 text-center text-24 lg:text-36 text-navy font-300 lg:font-400">
        We Work with Many Insurance Companies, including: *
      </h2>
      <div className="flex flex-wrap justify-center lg:m-auto lg:max-w-xl">
        <img src={humana} className="m-10" />
        <img src={blueCross} className="m-10" />
        <img src={cigna} className="m-10" />
        <img src={upmc} className="m-10" />
        <img src={harvardHealth} className="m-10" />
        <img src={unitedHealth} className="m-10" />
        <img src={ameriHealth} className="m-10" />
      </div>
    </div>
  </section>
);

export default InsuranceProviders;
