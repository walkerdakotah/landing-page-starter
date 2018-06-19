import React from 'react';
import { Project } from '../../../project-config';

const LogoPrimary = () => (
  <a className="flex items-center" href="/" target="blank">
    <img
      src={require(`../../assets/logos/${Project.short_name}-horiz.svg`)}
      alt="american addiction centers logo"
      className="h-8 lg:h-12"
    />
  </a>
);

export default LogoPrimary;
