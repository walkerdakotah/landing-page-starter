import React from 'react';

import { corp_contact } from '../../data/content-config.js';

import SocialList from '../lists/SocialList';

const ContactInfo = () => (
  <div className="pb-20">
    <div className="text-16 lg:text-18 font-500 text-white leading-normal lg:pb-10">
      <p className="mb-10">{corp_contact.phone}</p>
      <p className="mb-10">{corp_contact.street_address}</p>
      <p className="mb-10">
        {corp_contact.city}, {corp_contact.state_abv} {corp_contact.zipcode}
      </p>
    </div>
    <SocialList />
  </div>
);

export default ContactInfo;
