import React from 'react'
import Laguna from './laguna-treatment.png'
import RecoveryFirst from './recovery-first.png'
import RiverOaks from './river-oaks.png'
import SunriseHouse from './sunrise-house.png'
import FiveStar from './five-star.png'
import FourStar from './four-star.png'
import './Testimonials.scss'

const Testimonials = () => (
    <div className='container--testimonial'>
        <div className='testimonial__hero'>
            <div className='container--ruler'>
                <div className='testimonial__content'>
                    <ul className='featured__list'>
                        <li className='featured__list-item'>
                            <img src={RiverOaks} className='logo-ro' />
                            <img src={FourStar} className='star-review' />
                            <div className='testimonial__wrapper'>
                                <h3 className='testimonial--title font-heavy'>Sarah K.</h3>
                                <p className='testimonial--date font-light'>January 19, 2017</p>
                                <p className='testimonial--text font-light'>“This is a no nonsense treatment center, I have learned a lot here.”</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='container--ruler'>
            <div className='testimonial__content'>
                <div className='testimonial__content--title font-heavy'>Testimonials</div>
                <ul className='testimonial__list'>
                    <li className='testimonial__list-item'>
                        <img src={SunriseHouse} className='logo-sh' />
                        <img src={FourStar} className='star-review' />
                        <div className='testimonial__wrapper'>
                            <h3 className='testimonial--title font-heavy'>Greg S.</h3>
                            <p className='testimonial--date font-light'>January 19, 2017</p>
                            <p className='testimonial--text font-light'>“This is a no nonsense treatment center, I have learned a lot here.”</p>
                        </div>
                    </li>
                    <li className='testimonial__list-item'>
                        <img src={Laguna} className='logo-lth' />
                        <img src={FiveStar} className='star-review' />
                        <div className='testimonial__wrapper'>
                            <h3 className='testimonial--title font-heavy'>Joannie</h3>
                            <p className='testimonial--date font-light'>November 28, 2016</p>
                            <p className='testimonial--text font-light'>“The staff at LTH are amazing people. They definitely made the experience nice for me, thank you.”</p>
                        </div>
                    </li>
                    <li className='testimonial__list-item'>
                        <img src={RecoveryFirst}className='logo-rf' />
                        <img src={FourStar} className='star-review' />
                        <div className='testimonial__wrapper'>
                            <h3 className='testimonial--title font-heavy'>Joseph B.</h3>
                            <p className='testimonial--date font-light'>September 29, 2016</p>
                            <p className='testimonial--text font-light'>“My is experience here was great and the staff is willing to help when ever needed.”</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default Testimonials