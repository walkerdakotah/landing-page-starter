import React from 'react';
import LogoSecondary from './logo/LogoSecondary';
import ContactInfo from './contactInfo/ContactInfo';
import AccreditationList from './lists/AccreditationList';
import PoliciesList from './lists/PoliciesList';
import DisclaimersList from './lists/DisclaimersList';

const Footer = () => (
  <section className="bg-navy">
    <div className="m-auto container py-40 px-10 lg:px-40">
      <LogoSecondary />
      <div className="pt-20 lg:pb-20 flex flex-col lg:flex-row lg:justify-between">
        <ContactInfo />
        <div className="flex flex-col lg:items-end lg:justify-end">
          <AccreditationList />
          <PoliciesList />
        </div>
      </div>
      <DisclaimersList />
      <div className="py-40 text-center text-10 lg:text-14 text-grey">
        © American Addiction Centers Copyright 2018
      </div>
    </div>
  </section>
);

export default Footer;
