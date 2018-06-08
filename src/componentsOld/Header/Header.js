import React from 'react';
import Logo from '../../assets/aac/logo/logo-multi.png';
import config, { CALLRAIL } from '../../data/site-config';

const Header = () => {
  return (
    <div className="header is-sticky">
      <div className="container--ruler">
        <div className="header__content">
          <a className="logo--link" href="/" target="blank">
            <img className="header__logo" src={Logo} />
          </a>
          <div className="header__cta font-teal">
            <a href={`tel:+1${CALLRAIL.PHONE}`}>
              <div className="header__cta--phone font-heavy">
                Call {CALLRAIL.PHONE}
              </div>
            </a>
            <div className="header__cta--guarantee font-heavy">
              Insurance Accepted. Privacy Guaranteed.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
