import React from 'react'
import Logo from './logo-round.png'

const About = () => (
    <div className="container--about">
        <div className="container--ruler">
            <div className="about__content">
                <img className="about__logo" src={Logo} />
                <div className="about__title font-heavy">About American Addiction Centers</div>
                <div className="about__sub-text">
                    <p className="about__sub-text--text font-light">American Addiction Centers is a nationwide network of facilities and programs providing quality, compassionate, innovative care to adults struggling with addiction. Our whole-person approach considers lifestyle, environment, physical health, and mental-health disorders as well as individual strengths, motivation and desire to make positive changes in one’s life. We’ve helped thousands of clients around the country find a personalized path to lifelong recovery.</p>
                </div>
                <ul className="about__list font-light">
                    <li className="about__list-item">CARF-Accredited facilities</li>
                    <li className="about__list-item">Nationwide network</li>
                    <li className="about__list-item">Research-based therapies</li>
                    <li className="about__list-item">12-step based</li>
                    <li className="about__list-item">Experience, qualified staff</li>
                    <li className="about__list-item">Inpatient and outpatient programs</li>
                    <li className="about__list-item">Co-occurring care (Dual Diagnosis)</li>
                    <li className="about__list-item">Wellness-focused</li>
                    <li className="about__list-item">Nationwide alumni-support network</li>
                </ul>
            </div>
        </div>
    </div>
)

export default About