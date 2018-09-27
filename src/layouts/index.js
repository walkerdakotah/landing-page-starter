import React from 'react';
import Helmet from 'react-helmet';
import { project, fingerprint, fonts } from '../lib/project-config';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../index.css';

export default ({ children }) => (
  <div className="font-sans">
    <Helmet
      title={`${project.title}`}
      meta={[
        { name: 'description', content: `${project.title}` },
        { name: 'author', content: `${project.name}` },
        { name: 'robots', content: 'noindex,nofollow' }
      ]}
      script={[
        {
          src: `${fingerprint.src}`
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
    <Footer />
  </div>
);
