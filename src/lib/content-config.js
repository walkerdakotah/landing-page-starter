import { facility } from './project-config';

export const heroDefault = {
  title: 'Help can start in just 24 hours.',
  body:
    'Long-term recovery from drug and alcohol addiction is not only possible, it’s within your reach. We’ve helped thousands of people stop using for good through proven clinical treatment and positive changes in attitude, behavior, lifestyle and values.',
  subline: "We're here to help you get your life back. Are you ready?"
};

export const facilityFeatures = {
  title:
    'Alcohol detox can be dangerous, requiring immediate medical attention.',
  features: [
    {
      title: 'EarlySense® Technology',
      img: `early-sense-${facility.iconColor}`,
      description:
        'Monitors vital signs and alerts nurses of changes that may signal an impending medical emergency during detox.'
    },
    {
      title: 'Hospital Setting',
      img: `hospital-${facility.iconColor}`,
      description:
        'More than just a building, we employ doctors and nurses who understand addiction and the needs of a patient in withdrawal.'
    },
    {
      title: 'Medication-Assisted Treatment',
      img: `medical-suitcase-${facility.iconColor}`,
      description:
        'After detox, we may use medication along with therapy to treat your alcohol use disorder. This does not replace one addiction with another, but rather helps decrease cravings and deter individuals from consuming alcohol.'
    }
  ]
};

export const campaignDefault = {
  hero: {
    title: 'Struggling with addiction?',
    subline: 'Real help can start in just 24 hours.',
  },
  facilityFeatures: {
    title: 'American Addiction Centers is your first step toward recovery.',
    body: 'With coast-to-coast treatment options and a “whole person” approach to long-term recovery, American Addiction Centers can help you get sober for good. We’ve spent decades helping people recover from drug and alcohol addiction in specialized healing environments across the country, and we’re here to help you start your journey today.',
  }
}