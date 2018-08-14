import React from 'react';

import { facilityFeatures } from '../lib/content-config.js';

import FeaturesList from './lists/FeaturesList.js';
const FacilityFeatures = () => (
  <section>
    <div className="features py-40 lg:py-80 px-10 lg:px-40">
      <div className="m-auto container">
        <h2 className="mb-20 lg:mb-40 lg:pb-20 text-center text-24 lg:text-40 text-navy font-serif font-700">
          {facilityFeatures.title}
        </h2>
        <FeaturesList />
      </div>
    </div>
  </section>
);

export default FacilityFeatures;
