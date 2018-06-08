import React from 'react';
import config from '../../data/site-config';
import backgroundImage from '../../assets/aac/hero/hero-mobile-aac.jpg';

const Hero = () => (
  <div className="container--hero">
    <div className="container--ruler">
      <div className="hero__content">
        <div className="hero__title">
          <h1 className="hero__title--pre-title font-lightest">
            Struggling with addiction?
          </h1>
          <div className="hero__title--title font-light">
            Real help can start in just 24 hours.
          </div>
        </div>
        <div className="hero__sub-text">
          <p className="hero__sub-text--text font-light">
            Long-term recovery from drug and alcohol addiction is not only
            possible, it’s within your reach. We’ve helped thousands of people
            stop using for good through proven clinical treatment and positive
            changes in attitude, behavior, lifestyle and values.{' '}
            <strong>
              We’re here to help you get your life back. Are you ready?
            </strong>
          </p>
          <div className="hero__sub-text--cta">
            <a href={`tel:+1${config.CALLRAIL.PHONE}`}>
              <div className="cta__phone font-heavy">
                Call {config.CALLRAIL.PHONE}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
