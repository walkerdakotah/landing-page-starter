import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header/Header'
import StickyFooter from '../components/StickyFooter/StickyFooter'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Gatsby - Help For Addiction'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'author', content: 'American Addiction Center' },
        { name: 'robots', content: 'noindex,nofollow' }
      ]}
      script={[
        { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js', type: 'text/javascript'},
        { src: 'https://americanaddictioncenters.org/wp-content/plugins/aacattribution/dist/attrlib.min.js', type: 'text/javascript'},
        { src: 'https://americanaddictioncenters.org/wp-content/plugins/aacattribution/dist/sfvar.min.js', type: 'text/javascript'},
        { src: 'https://cdn.jsdelivr.net/fingerprintjs2/1.1.4/fingerprint2.min.js', type: 'text/javascript'},
        { src: 'https://cdn.jsdelivr.net/jquery.validation/1.15.0/jquery.validate.min.js', type: 'text/javascript'},
        { src: 'https://cdn.jsdelivr.net/jquery.validation/1.15.0/additional-methods.min.js', type: 'text/javascript'},
      ]}
      link={[
        { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', integrity: 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato' }
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
    <StickyFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
