import React from 'react';
import Helmet from 'react-helmet';
import { Project, Fingerprint, Fonts, jQuery } from '../../project-config';
import Header from '../modules/Header/Header';

import '../styles/builds/after-postcss/main.css';

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
