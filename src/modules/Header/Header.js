import React from 'react';
import LogoPrimary from '../../components/logo/LogoPrimary';
import ButtonCta from '../../components/buttons/ButtonCta/ButtonCta';

const Header = () => (
  <header className="header bg-white">
    <nav className="nav header-content">
      <LogoPrimary />
      <ButtonCta />
    </nav>
  </header>
);

export default Header;
