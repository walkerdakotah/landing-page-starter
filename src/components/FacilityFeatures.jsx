import React from 'react';
import { project } from '../lib/project-config';
import { facilityFeatures } from '../lib/content-config';
import { CareIcon, LocationIcon, InsuranceIcon } from './svgs/Icons.js';

function blockTitle(name) {
  const re = /-/g;
  return name.replace(re, ' ');
}

export default function FacilityFeatures(props) {
  console.log(props)
  return (
    <section className="section">
      <h1 className="h1 text-navy text-center mb-4 lg:mb-8 lg:w-3/4 lg:m-auto capitalize">{blockTitle(props.facility)}</h1>
      <h2 className="h2 text-navy text-center mb-4 lg:mb-8 lg:w-3/4 lg:m-auto">
        {facilityFeatures.title}
      </h2>
      <ul className="description-block list-reset text-center flex flex-col items-center lg:flex-row lg:items-start lg:justify-around">
        <li className="py-8 w-290">
          <CareIcon color={project.theme} className="h-24 mb-2" />
          <h4 className="h4 pb-2">{facilityFeatures.features[0].title}</h4>
          <p className="p">{facilityFeatures.features[0].description}</p>
        </li>

        <li className="py-8 w-290">
          <LocationIcon color={project.theme} className="h-24 mb-2" />
          <h4 className="h4 pb-2">{facilityFeatures.features[1].title}</h4>
          <p className="p">{facilityFeatures.features[1].description}</p>
        </li>

        <li className="py-8 w-290">
          <InsuranceIcon
            color={project.theme}
            className="h-24 mb-2"
          />
          <h4 className="h4 pb-2">{facilityFeatures.features[2].title}</h4>
          <p className="p">{facilityFeatures.features[2].description}</p>
        </li>
      </ul>
    </section>
  );
}
