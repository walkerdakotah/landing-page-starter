import React from "react";
import Logo from "./logo-white.png";
import config from "../../data/site-config";
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
          href={`https://${config.SITE.NAME}/policy/`}
          className="font-grey-blue term"
          target="_blank"
        >
          Online Private Policy
        </a>
        <a
          href={`https://${config.SITE.NAME}/term-of-use/`}
          className="font-grey-blue term"
          target="_blank"
        >
          Terms of Use
        </a>
      </div>
      <div className="footer__disclaimer">
        <p className="font-grey-blue disclaimer">*Not all insurance policies are the same. Insurance coverage varies based on individual policies. All logos and trademarks are the sole and exclusive rights of their respective owners. Please call for an insurance verification.</p>
        <p className="font-grey-blue disclaimer">**Terms and conditions apply. To lean more about how you can qualify for our guarantee, visit <a href={`https://${config.SITE.NAME}/disclaimer/`} className="font-grey-blue" target="_blank">americanaddictioncenters.org/disclaimer/</a> for details.</p>
      </div>
    </div>
  </div>
);

export default Footer;
