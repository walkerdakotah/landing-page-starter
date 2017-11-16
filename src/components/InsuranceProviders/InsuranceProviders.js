import React from 'react'
import amerihealth from './ameri-health.png'
import bluecross from './blue-cross.png'
import cigna from './cigna.png'
import harvardhealth from './harvard-health.png'
import humana from './humana.png'
import unitedhealth from './united-health.png'
import upmc from './upmc.png'

const InsuranceProviders = () => (
    <div className='container--providers'>
    <div className='container--ruler'>
      <div className='providers__content'>
        <div className='providers__title font-heavy'>Insurance We Accept</div>
        <div className='providers__list'>
          <img src={humana} className='provider' />
          <img src={bluecross} className='provider' />
          <img src={cigna} className='provider' />
          <img src={upmc} className='provider' />
          <img src={harvardhealth} className='provider' />
          <img src={unitedhealth} className='provider' />
          <img src={amerihealth} className='provider' />
        </div>
      </div>
    </div>
  </div>  
)

export default InsuranceProviders