import React from 'react'
import Logo from './logo-multi.png'
import config from '../../data/SiteConfig'
import './Header.scss'

const Header = () => (
    <div className='header is-sticky'>
        <div className='container--ruler'>
            <div className='header__content'>
                <a className='logo--link' href='/' target='blank'>
                    <img className='header__logo' src={Logo}/>
                </a>
                <div className='header__cta font-teal'>
                    <a href={`tel:+1${config.CALLRAIL.PHONE}`}>
                        <div className='header__cta--phone font-heavy'>Call {config.CALLRAIL.PHONE}</div>
                    </a>
                    <div className='header__cta--guarantee font-heavy'>Insurance Accepted. Privacy Guaranteed.</div>
                </div>
            </div>
        </div>
    </div>
)

export default Header

