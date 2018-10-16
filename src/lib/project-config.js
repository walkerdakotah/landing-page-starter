import facility from './facility-info.json';
import { defaultFacebook, defaultInstagram, defaultLinkedin, defaultTwitter } from './globals';

// const name = 'american-addiction-centers'
const name = 'laguna-treatment-hospital'
// const name = 'townsend-treatment-center'
// const name = 'oxford-treatment-center'

export const project = {
  title: 'Help for Addiction',
  siteName: name,
  color: facility[name].color,
  logo: facility[name].logo,
  icon: facility[name].icon,
  url: facility[name].url,
  phone: facility[name].phone,
  street: facility[name].location.street,
  cityStateZip: `${facility[name].location.city}, ${facility[name].location.state} ${facility[name].location.zip}`,
  facebook: facility[name].social.facebook || defaultFacebook,
  instagram: facility[name].social.instagram || defaultInstagram,
  linkedin: facility[name].social.linkedin || defaultLinkedin,
  twitter: facility[name].social.twitter || defaultTwitter,
}

export const attribution = {
  leadsource: 'lsv = `WEB-AAC-MAIN`;',
  attr:
    'https://americanaddictioncenters.org/wp-content/plugins/aacattribution/dist/attrlib.min.js',
  sf:
    'https://americanaddictioncenters.org/wp-content/plugins/aacattribution/dist/sfvar.min.js'
};

export const fingerprint = {
  src: 'https://cdn.jsdelivr.net/fingerprintjs2/1.1.4/fingerprint2.min.js'
};

export const fonts = {
  rel: 'stylesheet',
  href:
    'https://fonts.googleapis.com/css?family=Lato:300,300i,400,700,700i,900|Playfair+Display:400,400i,700'
};

export const callRail = {
  src: '//cdn.callRail.com/companies/154422313/c8d5c08142940b7cb1ac/12/swap.js',
  phone: '877-848-4528',
  snippetSlug1: '154422313',
  snippetSlug2: 'c8d5c08142940b7cb1ac'
};

export const salesforce = {
  prefetch: 'https://c.la1c1.Salesforceliveagent.com',
  orgId: '00DG0000000CLl1',
  deploymentId: '572G0000000TXdG',
  deploymentSrc:
    'https://c.la1c1.Salesforceliveagent.com/content/g/js/36.0/deployment.js',
  buttonId: '573G0000000TXry',
  chatUrl: 'https://d.la1c1.Salesforceliveagent.com/chat'
};

export const jQuery = {
  core: 'https://cdn.jsdelivr.net/npm/jquery@3.2/dist/jquery.min.js',
  validation:
    'https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.min.js',
  additionalMethods:
    'https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/additional-methods.min.js'
};