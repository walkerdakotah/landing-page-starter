import React from 'react'
import CallRail from '../../utils/CallRail'

const ContactForm = () => (
    <div className='container--form bg-beige'>
        <div className='container--ruler'>
            <div className='form__content'>
                <div className='form__header'>
                    <div className='form__title font-grey font-medium'>Call 24/7, 365 Days a Year:</div>
                    <div className='form__cta font-teal'>
                        <a href={`tel:+1${CallRail}`}>
                            <div className='form__cta--phone font-heavy'>Call {CallRail}</div>
                        </a>
                        <div className='form__cta--tease font-heavy'>Prefer a call or email from us instead?</div>
                    </div>
                </div>
                <div className='form__body'>
                    <form className='mktgform' id='ppcPage' method='POST' noValidate='noValidate'>
                        <input name='oid' type='hidden' value='00DG0000000CLl1' />
                        <div className='form__input'>
                            <input required id='first_name' placeholder='First Name *' maxLength='40' name='first_name' type='text' />
                        </div>
                        <div className='form__input'>
                            <input required id='last_name' placeholder='Last Name *' maxLength='80' name='last_name' size='20' type='text' />
                        </div>
                        <div className='form__input'>
                            <input required id='email' placeholder='Email *' name='email' size='20' type='text' />
                        </div>
                        <div className='form__input'>
                            <input id='phone' placeholder='Phone (Optional)' name='phone' size='20' type='number' />
                        </div>
                        <div className='form__input form__input--text'>
                            <textarea required name='description' rows='8' cols='80' placeholder='What can we help you with? *'></textarea>
                        </div>
                        <input name='retURL' type='hidden' value='https://americanaddictioncenters.org/thank-you-2/' />
                        <input id='lead_source' name='lead_source' className='lead_source' type='hidden' />
                        <input id='OwnerId' name='OwnerId' type='hidden' value='00GG0000001MB0uMAG' />
                        <input id='recordType' name='recordType' type='hidden' value='012G0000001QDubIAG' />
                        <input id='00NG000000F5Zwk' type='hidden' name='00NG000000F5Zwk' />
                        <input id='00NG000000EZS9c' type='hidden' name='00NG000000EZS9c' />
                        <input id='00NG000000F5Zx9' type='hidden' name='00NG000000F5Zx9' />
                        <input id='00NG000000F5Zy2' type='hidden' name='00NG000000F5Zy2' />
                        <input id='00NG000000F5ZyC' type='hidden' name='00NG000000F5ZyC' />
                        <input id='00NG000000F5ZyH' type='hidden' name='00NG000000F5ZyH' />
                        <input id='00NG000000F5Pip' type='hidden' name='00NG000000F5Pip' />
                        <input id='00NG000000F5Zwp' type='hidden' name='00NG000000F5Zwp' />
                        <input id='00NG000000EZK7K' type='hidden' name='00NG000000EZK7K' />
                        <input id='00NG000000CrJNi' type='hidden' name='00NG000000CrJNi' />
                        <input id='00NG000000F1UD4' type='hidden' name='00NG000000F1UD4' />
                        <input id='00NG000000F5Zxx' type='hidden' name='00NG000000F5Zxx' />
                        <input className='form__btn bg-orange' type='submit' value='Contact Me' />
                    </form>
                </div>
                <div className='form__footer'>
                    <div className='form__cta--guarantee font-grey font-medium'>Insurance Accepted. Privacy Guaranteed.</div>
                    <ul className='font-light form__footer--list'>
                        <li className='font-medium form__footer--list-item search'>FREE Insurance Verification</li>
                        <li className='font-medium form__footer--list-item plane'>Travel Arrangements Included</li>
                        <li className='font-medium form__footer--list-item clock'>Help Available 24/7</li>
                    </ul>
                    <div className='form__footer--disclaimer font-medium'>By submitting this form, I agree to be contacted by American Addiction Centers, Inc. at the phone number provided above, including my wireless numbers if provided. We won’t sell your information and will treat your information in accordance with our <a href='/policy' target='_blank' alt='Privacy Policy'>privacy policy</a>.</div>
                </div>
            </div>
        </div>
    </div>
)

export default ContactForm