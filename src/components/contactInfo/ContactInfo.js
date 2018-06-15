import React from 'react';

import { Content } from '../../../project-config.js';
const { contact } = Content;

import SocialList from '../lists/SocialList';

const ContactInfo = () => (
  <div className="pb-20">
    <div className="text-16 lg:text-18 font-300 text-white leading-normal lg:pb-10">
      <p className="mb-10">{contact.phone}</p>
      <p className="mb-10">{contact.street_address}</p>
      <p className="mb-10">
        {contact.city}, {contact.state_abv} {contact.zipcode}
      </p>
    </div>
    <SocialList />
  </div>
);

export default ContactInfo;
