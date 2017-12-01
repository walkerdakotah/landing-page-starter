import React from 'react'
import Seal from './seal-guarantee.png'
import './ProgramGuarantee.scss'

const ProgramGuarantee = () => (
    <div className='container--guarantee bg-gray'>
        <div className='container--ruler'>
            <div className='guarantee__content'>
                <img src={Seal} className='guarantee__logo' />
                <div className='guarantee__text font-medium'>If you successfully complete our 90-day program, we guarantee you’ll stay clean and sober, or you can return for a complimentary 30 days of treatment.</div>
            </div>
        </div>
    </div>
)

export default ProgramGuarantee