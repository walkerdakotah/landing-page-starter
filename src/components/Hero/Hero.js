import React from 'react'
import ChatButton from '../ChatButton/ChatButton'
import config from '../../data/SiteConfig'
import './Hero.scss'

const Hero = () => (
  <div className="container--hero">
    <div className="container--ruler">
      <div className="hero__content">
        <div className="hero__title">
          <h1 className="hero__title--pre-title font-lightest">
            Strugging with addiction?
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
            changes in attitude, behavior, lifestyle and values.{" "}
            <strong>
              We’re here to help you get your life back. Are you ready?
            </strong>
          </p>
          <div className="hero__sub-text--cta">
              <a href={`tel:+1${config.CallRail}`}>
              <div className="cta__phone font-heavy">Call {config.CallRail}</div>
            </a>
            <ChatButton />
            <script
              dangerouslySetInnerHTML={{
                __html: `if (!window._laq) { window._laq = []; }
                            window._laq.push(function () {
                                liveagent.showWhenOnline(
                                    '573G0000000TXry',
                                    document.getElementById('liveagent_button_online_573G0000000TXry')
                                );
                                liveagent.showWhenOffline(
                                    '573G0000000TXry',
                                    document.getElementById('liveagent_button_offline_573G0000000TXry')
                                );
                            });`
              }}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="hero__sub">
      <p className="hero__sub--title font-medium font-white">
        A complete spectrum of options. Treatment tailored to YOU.
      </p>
      <ul className="hero__sub--list font-light font-white">
        <li className="hero__sub--list-item">
          Adult Addiction Treatment Programs{" "}
        </li>
        <li className="hero__sub--list-item">
          Dual Diagnosis Treatment Curriculum{" "}
        </li>
        <li className="hero__sub--list-item">
          Systemic Family Intervention Program{" "}
        </li>
        <li className="hero__sub--list-item">Drug Recovery — Aftercare </li>
        <li className="hero__sub--list-item">
          Fire Services & Law Enforcement{" "}
        </li>
      </ul>
    </div>
  </div>
);

export default Hero