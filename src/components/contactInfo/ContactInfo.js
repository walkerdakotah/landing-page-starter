import React from 'react';

import { corpAddress, corpPhone } from '../../lib/content-config.js';

import SocialList from '../lists/SocialList.js';

const ContactInfo = () => (
  <div className="pb-20">
    <div className="text-16 lg:text-18 font-500 text-white leading-normal lg:pb-10">
      <p className="mb-10">{corpPhone}</p>
      <p className="mb-10">{corpAddress.street}</p>
      <p className="mb-10">
        {corpAddress.city}, {corpAddress.state} {corpAddress.zipcode}
      </p>
    </div>
    <SocialList />
  </div>
);

export default ContactInfo;
