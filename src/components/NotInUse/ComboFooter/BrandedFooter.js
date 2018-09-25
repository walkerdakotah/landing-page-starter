import React from "react";
// import CorpLogo from "../../components/Logos/CorpLogo";
import CorpLogoWhite from "../../assets/logos/aac-horiz-white.png";
import CarfLogo from "../../assets/logos/carf-white.png";
import JointCommissionLogo from "../../assets/logos/joint-commission-white.png";

const BackgroundCarf = {
  backgroundImage: `url(${CarfLogo})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "87px",
  width: "87px",
};
const BackgroundJointCommission = {
  backgroundImage: `url(${JointCommissionLogo})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "87px",
  width: "87px",
  marginLeft: "1rem",
};

const BrandedFooter = () => (
  <div className="content-70 text-right">
    <h1>
      <CorpLogoWhite />
    </h1>
    <div className="content__text pad-top-1">
      200 Powell Pl
      <br />
      Brentwood, TN 37027
      <br />
      (888) 970-8544
    </div>

    <div className="seal-wrap pad-v-1">
      <div style={BackgroundCarf} />
      <div style={BackgroundJointCommission} />
    </div>

    <div className="content__text">
      Privacy:<br />
      <a href="/notice-of-privacy-practices/">Notice of Privacy Practices</a>
      <br />
      <a href="/policy/">Online Privacy Policy</a>
      <br />
      <a href="/terms-of-use/">Terms of Use</a>
    </div>
  </div>
);

export default BrandedFooter;
