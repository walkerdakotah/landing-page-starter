import React from 'react'

class Button extends React.Component {
    render() {
        return <a onClick={this.handleClick} id='liveagent_button_online_573G0000000TXry' className='cta__button font-white bg-orange' href='javascript://Chat' style={{ display: 'none' }}>Chat now!</a>
    }
    handleClick() {
        liveagent.startChat('573G0000000TXry')
    }
}

export default Button


