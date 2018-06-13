import React from 'react';
import LogoPrimary from '../../components/logo/LogoPrimary';
import HeaderCTA from '../../components/cta/HeaderCTA';

const Header = () => (
  <header className="bg-white py-10 flex justify-center lg:py-20">
    <nav className="m-auto container flex justify-center sm:justify-between">
      <LogoPrimary />
      <HeaderCTA />
    </nav>
  </header>
);

export default Header;
