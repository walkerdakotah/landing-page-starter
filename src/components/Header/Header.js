import React from 'react'
// import Logo from '../../img/logos/logo-header.png'
import Logo from './logo-multi.png'

const Header = () => (
    <div className="header is-sticky">
        <div className="container--ruler">
            <div className="header__content">
                <a className="logo--link" href="/" target="blank">
                    <img className="header__logo" src={Logo}/>
                </a>
                <div className="header__cta font-teal">
                    <a href="tel:+18884559750">
                        <div className="header__cta--phone font-heavy">Call 888-455-9750</div>
                    </a>
                    <div className="header__cta--guarantee font-heavy">Insurance Accepted. Privacy Guaranteed.</div>
                </div>
            </div>
        </div>
    </div>
)

export default Header