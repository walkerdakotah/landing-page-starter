import React from 'react'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
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
            dangerouslySetInnerHTML={{ __html: `lsv = 'WEB-AAC-MAIN';`}}
          />
          <script 
            src="https://americanaddictioncenters.org/wp-content/plugins/aacattribution/dist/attrlib.min.js" 
          />
          <script 
            src="https://americanaddictioncenters.org/wp-content/plugins/aacattribution/dist/sfvar.min.js" 
          />
          <script 
            src="//cdn.callrail.com/companies/154422313/c8d5c08142940b7cb1ac/12/swap.js"
          />
          <script
            src='https://c.la1c1.salesforceliveagent.com/content/g/js/36.0/deployment.js'/>
          <script
            dangerouslySetInnerHTML={{ __html: `liveagent.init('https://d.la1c1.salesforceliveagent.com/chat', '572G0000000TXdG', '00DG0000000CLl1');`}} 
          />
        </body>
      </html>
    )
  }
}
