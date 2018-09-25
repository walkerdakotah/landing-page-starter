import React from 'react';
import { EarlySenseIcon, MedicalCareIcon, HospitalIcon } from './svgs/Svgs';

import EarlySense from '../assets/icons/early-sense-navy.svg';
import Hospital from '../assets/icons/hospital-navy.svg';
import MedicalCare from '../assets/icons/medical-suitcase-navy.svg';

/**
 * Maybe store content elsewhere to import along with logo / rating images?
 * We create a function to map over the data and output the list contents.
 * The content updates dynamically according to changes made in the external data file.
 * Separate concerns / touch only one file to update.
 *
*/
const features = [
  {
    title: 'EarlySense® Technology',
    img: 'early-sense-navy',
    description:
      'Monitors vital signs and alerts nurses of changes that may signal an impending medical emergency during detox.'
  },
  {
    title: 'Hospital Setting',
    img: 'hospital-navy',
    description:
      'More than just a building, we employ doctors and nurses who understand addiction and the needs of a patient in withdrawal.'
  },
  {
    title: 'Medication-Assisted Treatment',
    img: 'medical-suitcase-navy',
    description:
      'After detox, we may use medication along with therapy to treat your alcohol use disorder. This does not replace one addiction with another, but rather helps decrease cravings and deter individuals from consuming alcohol.'
  }
];

export default function FacilityFeatures() {
  return (
    <section className="section">
      <h2 className="h2 text-navy text-center mb-4 lg:mb-8 lg:w-3/4 lg:m-auto">
        Alcohol detox can be dangerous, requiring immediate medical attention.
      </h2>
      <ul className="content-block list-reset text-center flex flex-col items-center lg:flex-row lg:items-start lg:justify-around">
        <li className="py-8 w-290">
          <div className="mb-8 h-24 w-24 bg-aqua-100 flex items-center justify-center rounded-full m-auto">
            <img src={EarlySense} className="h-12" />
          </div>

          <h4 className="h4 text-navy pb-2">EarlySense® Technology</h4>
          <p className="p">
            Monitors vital signs and alerts nurses of changes that may signal an
            impending medical emergency during detox.
          </p>
        </li>

        <li className="py-8 w-290">
          <div className="mb-8 h-24 w-24 bg-aqua-100 flex items-center justify-center rounded-full m-auto">
            <img src={MedicalCare} className="h-12" />
          </div>

          <h4 className="h4 text-navy pb-2">Medication-Assisted Treatment</h4>
          <p className="p">
            After detox, we may use medication along with therapy to treat your
            alcohol use disorder. This does not replace one addiction with
            another, but rather helps decrease cravings and deter individuals
            from consuming alcohol.
          </p>
        </li>

        <li className="py-8 w-290">
          <div className="mb-8 h-24 w-24 bg-aqua-100 flex items-center justify-center rounded-full m-auto">
            <img src={Hospital} className="h-12" />
          </div>

          <h4 className="h4 text-navy pb-2">Hospital Setting</h4>
          <p className="p">
            More than just a building, we employ doctors and nurses who
            understand addiction and the needs of a patient in withdrawal.
          </p>
        </li>
      </ul>
    </section>
  );
}
