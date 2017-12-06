import React from 'react'
import Detox from './care-detox.png'
import Iop from './care-iop.png'
import Op from './care-outpatient.png'
import Php from './care-php.png'
import Residential from './care-residential.png'
import './CareLevels.scss'

const CareLevels = () => (
    <div className='container--care bg-aqua'>
        <div className='container--ruler'>
            <div className='care__content'>
                <div className='care__title font-heavy font-teal'>Levels of Care</div>
                <ul className='care__list'>
                    <li className='care__list-item grey-bottom'>
                        <img className='care__img' src={Detox} />
                        <div className='care__list-item--wrapper'>
                            <h3 className='care__list-item--title font-heavy'>Medical Detox</h3>
                            <p className='care__list-item--content font-light'>Our Medical Detox services provide medical monitoring and 24/7 supervision, compassionate withdrawal management, and personalized referrals for the next step in your recovery. A typical stay in Medical Detox lasts 5-7 days.</p>
                        </div>
                    </li>
                    <li className='care__list-item grey-bottom'>
                        <img className='care__img' src={Residential} />
                        <div className='care__list-item--wrapper'>
                            <h3 className='care__list-item--title font-heavy'>Residential Treatment</h3>
                            <p className='care__list-item--content font-light'>For some clients, a structured residential treatment option can have a dramatic impact on successful recovery. In residential treatment (also known as “inpatient treatment”), the facility becomes the client’s home and treatment center for the duration of their stay; clients attend scheduled groups and therapy sessions most of the day and have limited outside contact. Intensive residential treatment aims to remove the client from the triggers and stressors of daily life in order to focus completely on recovery.</p>
                        </div>
                    </li>
                    <li className='care__list-item grey-bottom'>
                        <img className='care__img' src={Op} />
                        <div className='care__list-item--wrapper'>
                            <h3 className='care__list-item--title font-heavy'>Outpatient Program</h3>
                            <p className='care__list-item--content font-light'>Our Intensive Outpatient (IOP) programs require less supervision than residential treatment and provide a flexible but effective treatment option. Clients in the IOP program are committed to a structured schedule of 3-hour onsite treatment sessions anywhere from 3-7 days per week, depending on the client, with morning and evening sessions available. IOP can be an effective way to work toward recovery while still living at home, or a vital step-down from residential treatment as clients learn to integrate sobriety into community life.</p>
                        </div>
                    </li>
                    <li className='care__list-item grey-bottom'>
                        <img className='care__img' src={Iop} />
                        <div className='care__list-item--wrapper'>
                            <h3 className='care__list-item--title font-heavy'>Intensive Outpatient Program (IOP)</h3>
                            <p className='care__list-item--content font-light'>Our Intensive Outpatient (IOP) programs require less supervision than residential treatment and provide a flexible but effective treatment option. Clients in the IOP program are committed to a structured schedule of 3-hour onsite treatment sessions anywhere from 3-7 days per week, depending on the client, with morning and evening sessions available. IOP can be an effective way to work toward recovery while still living at home, or a vital step-down from residential treatment as clients learn to integrate sobriety into community life.</p>
                        </div>
                    </li>
                    <li className='care__list-item'>
                        <img className='care__img' src={Php} />
                        <div className='care__list-item--wrapper'>
                            <h3 className='care__list-item--title font-heavy'>Partial Hospitalization Program (PHP)</h3>
                            <p className='care__list-item--content font-light'>PHP is a structured program providing care at least 5 days a week for 6 or more hours per day. Clients attend daily programming, structured group therapy and weekly individual therapy sessions, plus recreational activities, outside support group meetings, and and experiential therapies. Clients in a PHP program are moving away from around-the-clock supervision and gaining more real-life experience in the community.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default CareLevels