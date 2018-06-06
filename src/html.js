import React from 'react';
import config from './data/site-config';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
            dangerouslySetInnerHTML={{
              __html: `lsv = '${config.SITE.LEADSOURCE}';`,
            }}
          />
          <script
            src={`//cdn.callrail.com/companies/${config.CALLRAIL
              .SNIPPET_SLUG_1}/${config.CALLRAIL.SNIPPET_SLUG_2}/12/swap.js`}
          />
          <script src={`https://${config.SALESFORCE.DEPLOYMENT_SCRIPT}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `liveagent.init('https://${config.SALESFORCE
                .CHAT_URL}', '${config.SALESFORCE.DEPLOYMENT_ID}', '${config
                .SALESFORCE.ORG_ID}');`,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `if(!window._laq){window._laq=[];}window._laq.push(function(){liveagent.showWhenOnline('${config
                .SALESFORCE
                .BUTTON_ID}',document.getElementById('liveagent_button_online_${config
                .SALESFORCE.BUTTON_ID}'));liveagent.showWhenOffline('${config
                .SALESFORCE
                .BUTTON_ID}',document.getElementById('liveagent_button_offline_${config
                .SALESFORCE.BUTTON_ID}'));})`,
            }}
          />
        </body>
      </html>
    );
  }
};
