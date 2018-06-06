import React from 'react';
import config from '../../data/site-config';

class ChatButton extends React.Component {
  render() {
    return (
      <a
        onClick={this.handleClick}
        id={`liveagent_button_online_${config.SALESFORCE.BUTTON_ID}`}
        className="cta__button font-white bg-orange"
        href="javascript://Chat"
      >
        Chat now!
      </a>
    );
  }
  handleClick() {
    liveagent.startChat(`${config.SALESFORCE.BUTTON_ID}`);
  }
}

export default ChatButton;
