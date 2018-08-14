import React from 'react';
import { facilityFeatures } from '../../lib/content-config.js';

const list = facilityFeatures.features.map(feature => (
  <li
    key={feature.title}
    className="flex flex-col items-center lg:px-20 max-w-sm lg:w-1/3 m-auto lg:m-0"
  >
    <div className="my-40 h-24 w-24 bg-aqua-100 flex items-center justify-center rounded-full">
      <img
        src={require(`../../assets/icons/${feature.img}.svg`)}
        alt="handshake"
        className="h-12"
      />
    </div>
    <div className="text-center">
      <h4 className="mb-10 text-18 lg:text-24 font-700 text-grey-500">
        {feature.title}
      </h4>
      <p className="mb-20 text-14 lg:text-18 font-500 text-grey-500 leading-normal">
        {feature.description}
      </p>
    </div>
  </li>
));

const FeaturesList = () => <ul className="list-reset pt-20 lg:flex">{list}</ul>;

export default FeaturesList;
