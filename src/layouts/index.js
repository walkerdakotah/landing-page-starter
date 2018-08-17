import React from 'react';
import Helmet from 'react-helmet';
import {
  facilityInfo,
  fingerprint,
  fonts,
  jQuery
} from '../lib/project-config';
import Header from '../components/Header';

import '../index.css';

export default ({ children }) => (
  <div className="font-sans">
    <Helmet
      title={`${facilityInfo.title}`}
      meta={[
        { name: 'description', content: `${facilityInfo.title}` },
        { name: 'author', content: `${facilityInfo.name}` },
        { name: 'robots', content: 'noindex,nofollow' }
      ]}
      script={[
        {
          src: `${fingerprint.src}`
        },
        {
          src: `${jQuery.core}`
        },
        {
          src: `${jQuery.validation}`
        },
        {
          src: `${jQuery.additionalMethods}`
        }
      ]}
      link={[
        {
          rel: `${fonts.rel}`,
          href: `${fonts.href}`
        }
      ]}
    />
    <Header />
    {children()}
  </div>
);
