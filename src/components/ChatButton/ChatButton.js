import React from 'react'
import config from '../../data/site-config'

class ChatButton extends React.Component {
    render() {
        return <a onClick={this.handleClick} id={`liveagent_button_online_${config.SALESFORCE.DEPLOYMENT_ID}`} className='cta__button font-white bg-orange' href='javascript://Chat' style={{ display: '' }}>Chat now!</a>
    }
    handleClick() {
        liveagent.startChat(`${config.SALESFORCE.DEPLOYMENT_ID}`)
    }
}

export default ChatButton
