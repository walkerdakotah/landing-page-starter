import React from 'react';

import Hero from '../components/Hero/Hero';
import FacilityFeatures from '../components/FacilityFeatures1';

import { heroDefault } from "../lib/content-config"

export default function IndexPage() {
  return (
    <div>
      <Hero
        title={heroDefault.title}
        body={heroDefault.body}
        subline={heroDefault.subline}
      />
      <FacilityFeatures />
    </div>
  );
}
