import React from 'react';

import '../styles/main.scss';

import Helmet from 'react-helmet';
import { Project, Fingerprint, Fonts, jQuery } from '../../project-config';
import Header from '../modules/Header/Header';

switch (process.env.NODE_ENV) {
  case `development`:
    require('../styles/after-postcss/main.css');
    break;
  case `production`:
    require('../styles/after-purgecss/main.css');
    break;
}

export default ({ children }) => (
  <div className="font-sans">
    <Helmet
      title={`${Project.title}`}
      meta={[
        { name: 'description', content: `${Project.title}` },
        { name: 'author', content: `${Project.name}` },
        { name: 'robots', content: 'noindex,nofollow' },
      ]}
      script={[
        {
          src: `${Fingerprint.src}`,
        },
        {
          src: `${jQuery.core}`,
        },
        {
          src: `${jQuery.validation}`,
        },
        {
          src: `${jQuery.additional_methods}`,
        },
      ]}
      link={[
        {
          rel: `${Fonts.rel}`,
          href: `${Fonts.href}`,
        },
      ]}
    />
    <Header />
    {children()}
  </div>
);
