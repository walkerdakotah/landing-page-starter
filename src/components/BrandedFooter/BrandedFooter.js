import React from "react";
import Logo from "./logo-white.png";
import config from "../../data/SiteConfig";
import "./BrandedFooter.scss";

const Footer = () => (
  <div className="branded-footer bg-blue">
    <div className="container--ruler">
      <div className="footer__content">
        <a className="logo--link" href="/" target="blank">
          <img className="footer__logo" src={Logo} />
        </a>
        <div className="footer__contact font-grey-blue">
          <p className="contact--address">200 Powell Pl.</p>
          <p className="contact--address">Brentwood, TN 37027</p>
        </div>
        <a href={`tel:+1${config.CALLRAIL.PHONE}`}>
          <div className="footer__cta--phone font-heavy font-white">
            Call {config.CALLRAIL.PHONE}
          </div>
        </a>
      </div>
      <div className="footer__terms">
        <a
          href="https://americanaddictioncenters.org/policy/"
          className="font-grey-blue term"
          target="_blank"
        >
          Online Private Policy
        </a>
        <a
          href="https://americanaddictioncenters.org/term-of-use/"
          className="font-grey-blue term"
          target="_blank"
        >
          Terms of Use
        </a>
      </div>
      <div className="footer__disclaimer">
        <p className="font-grey-blue disclaimer">*Not all insurance policies are the same. Insurance coverage varies based on individual policies. All logos and trademarks are the sole and exclusive rights of their respective owners.</p>
        <p className="font-grey-blue disclaimer">**Please call for an insurance verification</p>
      </div>
    </div>
  </div>
);

export default Footer;
