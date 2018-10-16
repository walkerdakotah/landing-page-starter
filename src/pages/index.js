import React from 'react';
import { project } from "../lib/project-config"
import Hero from '../components/Hero/Hero';
import FacilityFeatures from '../components/FacilityFeatures';
import Insurance from "../components/Insurance"
import { heroDefault } from "../lib/content-config"

export default function IndexPage() {
  return (
    <div>

      <FacilityFeatures theme={project} />
      <Insurance />
    </div>
  );
}
