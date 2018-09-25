import React from 'react';
import { facility, callRail } from '../lib/project-config.js';

export default function Header(props) {
  return (
    <header className="border-grey-100 border-b px-8 py-4 lg:px-16">
      <nav className="flex justify-center content-block lg:justify-between">
        <a className="flex" href="/" target="blank">
          <img
            src={require(`../assets/logos/logo-${facility.name}.svg`)}
            className="header-logo"
          />
        </a>
        <div className="hidden lg:flex lg:flex-col">
          <a className="flex no-underline" href={`tel:+1${callRail.phone}`}>
            <button className="text-24 text-orange">
              Call {callRail.phone}
            </button>
          </a>
          <p className="p text-grey text-right">Privacy Guaranteed</p>
        </div>
      </nav>
    </header>
  );
}
