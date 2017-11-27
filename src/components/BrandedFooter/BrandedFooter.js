import React from 'react'
import Logo from './logo-white.png'

const Footer = () => (
    <div className='branded-footer bg-blue'>
        <div className='container--ruler'>
            <div className='footer__content'>
                <a className='logo--link' href='/' target='blank'>
                    <img className='footer__logo' src={Logo}/>
                </a>
                <div className='footer__contact font-grey-blue'>
                    <p className='contact--address'>200 Powell Pl.</p>
                    <p className='contact--address'>Brentwood, TN 37027</p>
                    <p className='contact--address'>(888) 970-8544</p>
                </div>
                <a href="tel:+18889668152">
                    <div className='footer__cta--phone font-heavy font-white'>Call 888-966-8152</div>
                </a>
            </div>
        </div>
    </div>
)

export default Footer