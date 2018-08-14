import { facilityInfo } from './project-config';

export const hero = {
  title: 'Help can start in just 24 hours.',
  content:
    'Long-term recovery from drug and alcohol addiction is not only possible, it’s within your reach. We’ve helped thousands of people stop using for good through proven clinical treatment and positive changes in attitude, behavior, lifestyle and values.',
  subline: "We're here to help you get your life back. Are you ready?"
};

export const facilityFeatures = {
  title:
    'Alcohol detox can be dangerous, requiring immediate medical attention.',
  features: [
    {
      title: 'EarlySense® Technology',
      img: `early-sense-${facilityInfo.iconColor}`,
      description:
        'Monitors vital signs and alerts nurses of changes that may signal an impending medical emergency during detox.'
    },
    {
      title: 'Hospital Setting',
      img: `hospital-${facilityInfo.iconColor}`,
      description:
        'More than just a building, we employ doctors and nurses who understand addiction and the needs of a patient in withdrawal.'
    },
    {
      title: 'Medication-Assisted Treatment',
      img: `medical-suitcase-${facilityInfo.iconColor}`,
      description:
        'After detox, we may use medication along with therapy to treat your alcohol use disorder. This does not replace one addiction with another, but rather helps decrease cravings and deter individuals from consuming alcohol.'
    }
  ]
};

export const corpAddress = {
  street: '200 Powell Pl',
  city: 'Brentwood',
  state: 'TN',
  zipcode: '37027'
};

export const corpPhone = '(888) 987-1784';