import React from 'react';
import { project } from "../lib/project-config"
import Hero from '../components/Hero/Hero';
import FacilityFeatures from '../components/FacilityFeatures';
import Insurance from "../components/Insurance"
import ThreeSteps from "../components/ThreeSteps"
import { heroDefault } from "../lib/content-config"

export default function IndexPage() {
  const { title, body, subline } = heroDefault
  return (
    <div>
      <Hero title={title} body={body} subline={subline} />
      <FacilityFeatures theme={project} />
      <Insurance />
      <ThreeSteps />
    </div>
  );
}
