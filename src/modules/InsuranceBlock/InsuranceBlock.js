import React from 'react';
import ameriHealth from '../../assets/logos/ameri-health.png';
import blueCross from '../../assets/logos/blue-cross.png';
import cigna from '../../assets/logos/cigna.png';
import harvardHealth from '../../assets/logos/harvard-health.png';
import humana from '../../assets/logos/humana.png';
import unitedHealth from '../../assets/logos/united-health.png';
import upmc from '../../assets/logos/upmc.png';

const InsuranceProviders = () => (
  <section className="lg:py-40">
    <div className="m-auto container py-40 px-10 text-center">
      <h2 className="font-serif mb-20 lg:mb-40 lg:pb-20 text-center text-24 lg:text-40 text-navy font-700">
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
