import React from "react";
import BackgroundImage from "/Users/dakotahwalker/Sites/landing-page-starter/src/assets/background-images/payment-options.jpg";

const background = {
  backgroundImage: `url(${BackgroundImage})`,
};

const PaymentOptions = () => (
  <section className="content__section no-pad">
    <div style={background} className="bg-chevron-down" />
    <div className="content__section--content content--banner">
      <h1 className="font-300 font-teal">You Can Afford Addiction Treatment</h1>
      <div className="pad-v-1">
        <div className="content__text">
          Many people assume they cannot afford treatment or are under the
          impression that getting addition treatment is out of their reach
          financially. However, our treatment costs are covered by many
          insurance plans. When you first call our Treatment Consultants, they
          will help you determine what percentage, if any, of the treatment
          costs are covered by your insurance plan.
        </div>
      </div>
      <div className="pad-v-1">
        <h3 className="margin-v-half">Insurance Coverage</h3>
        <div className="content__text">
          Treatment Consultants can help you verify a potential client's
          insurance benefits at no cost and without obligation.
        </div>
      </div>
      <div className="pad-v-1">
        <h3 className="margin-v-half">Private Pay</h3>
        <div className="content__text">
          We are committed to protecting your health information and privacy
          according to applicable law. Some clients prefer to pay out of pocket
          for services rather than going through their health plan. All methods
          of payment are confidential.
        </div>
      </div>
      <div className="pad-v-1">
        <h3 className="margin-v-half">Payment Plan</h3>
        <div className="content__text">
          To assistant in determining the most suitable option for treatment
          payment for your particular situation, our highly trained Treatment
          Consultants will help you choose one of our affordable payment plan
          options.
        </div>
      </div>
    </div>
  </section>
);

export default PaymentOptions;
