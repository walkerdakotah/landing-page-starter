import React from 'react';
import '../styles/app.scss';
import Helmet from 'react-helmet';
import {
  Project,
  MetaAuthor,
  MetaRobots,
  Fingerprint,
  Fonts,
  jQuery
} from '../../project-config';
import Header from '../modules/Header/Header';

export default ({ children }) => (
  <div className="app-wrap">
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
    {/* {children()} */}
  </div>
);
