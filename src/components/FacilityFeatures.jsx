import React from 'react';

import { facilityFeatures } from '../lib/content-config';
import { formatText } from "../lib/utils"
import { CareIcon, LocationIcon, InsuranceIcon } from './svgs/FeatureIcons.js';
import MaxWidth from './MaxWidth';

export default function FacilityFeatures(props) {
  return (
    <section className="section">
      <h1 style={{ color: props.theme.color }} className="h1 text-center mb-4 lg:mb-8 lg:w-3/4 lg:m-auto capitalize">{formatText(props.theme.siteName)}</h1>
      <h2 className="h2 text-navy text-center mb-4 lg:mb-8 lg:w-3/4 lg:m-auto">
        {facilityFeatures.title}
      </h2>
      <MaxWidth>
        <ul className="description-block list-reset text-center flex flex-col items-center lg:flex-row lg:items-start lg:justify-around">
          <li className="py-8 flex-1">
            <CareIcon color={props.theme.color} className="h-24 mb-2" />
            <h4 className="h4 pb-2">{facilityFeatures.features[0].title}</h4>
            <p className="p">{facilityFeatures.features[0].description}</p>
          </li>

          <li className="py-8 lg:mx-8 flex-1">
            <LocationIcon color={props.theme.color} className="h-24 mb-2" />
            <h4 className="h4 pb-2">{facilityFeatures.features[1].title}</h4>
            <p className="p">{facilityFeatures.features[1].description}</p>
          </li>

          <li className="py-8 flex-1">
            <InsuranceIcon
              color={props.theme.color}
              className="h-24 mb-2"
            />
            <h4 className="h4 pb-2">{facilityFeatures.features[2].title}</h4>
            <p className="p">{facilityFeatures.features[2].description}</p>
          </li>
        </ul>
      </MaxWidth>
    </section>
  );
}
