import React from 'react'
import config from '../../data/SiteConfig'
import './StickyFooter.scss'

const StickyFooter = () => (
  <div className="cta-footer is-sticky bg-orange">
    <div className="container--ruler">
      <div className="cta-footer__content">
        <a href={`tel:+1${config.CallRail}`}>
          <div className="cta-footer__cta--phone font-heavy">Call {config.CallRail}</div>
        </a>
        <div className="cta-footer__cta--guarantee font-heavy">
          Insurance Accepted. Privacy Guaranteed.
        </div>
      </div>
    </div>
  </div>
);

export default StickyFooter