import React from 'react'
import config from '../../data/SiteConfig'

class ChatButton extends React.Component {
    render() {
        return <a onClick={this.handleClick} id={`liveagent_button_online_${config.LIVEAGENT_ID}`} className='cta__button font-white bg-orange' href='javascript://Chat' style={{ display: '' }}>Chat now!</a>
    }
    handleClick() {
        liveagent.startChat(`${config.LIVEAGENT_ID}`)
    }
}

export default ChatButton
