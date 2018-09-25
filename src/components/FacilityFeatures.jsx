import React from 'react';
import { facility } from '../lib/project-config';
import { FacilityFeatures as Features } from '../lib/content-config.json';
import { CareIcon, LocationIcon, InsuranceIcon } from './svgs/Icons.js';

export default function FacilityFeatures() {
  return (
    <section className="section">
      <h2 className="h2 text-navy text-center mb-4 lg:mb-8 lg:w-3/4 lg:m-auto">
        {Features.title}
      </h2>
      <ul className="content-block list-reset text-center flex flex-col items-center lg:flex-row lg:items-start lg:justify-around">
        <li className="py-8 w-290">
          <CareIcon color={facility.theme} className="h-24 mb-2" />
          <h4 className="h4 pb-2">{Features.contentList[0].title}</h4>
          <p className="p">{Features.contentList[0].content}</p>
        </li>

        <li className="py-8 w-290">
          <LocationIcon color={facility.theme} className="h-24 mb-2" />
          <h4 className="h4 pb-2">{Features.contentList[1].title}</h4>
          <p className="p">{Features.contentList[1].content}</p>
        </li>

        <li className="py-8 w-290">
          <InsuranceIcon
            color={facility.theme}
            className="h-24 mb-2"
          />
          <h4 className="h4 pb-2">{Features.contentList[2].title}</h4>
          <p className="p">{Features.contentList[2].content}</p>
        </li>
      </ul>
    </section>
  );
}
