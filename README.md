# Marketing Landing Page Generator

The Marketing Landing Page Generator is based on [Gatsby](https://github.com/gatsbyjs), a "blazing-fast" static-site generator for React.

## Getting Started

Make sure that you have the Gatsby CLI program installed

`npm install --global gatsby-cli`

## Features

#### Basic project directory structure

```
  {project-name}/               # – Project
  ├── src                       # - Environment variables
  │   ├── assets/       		# - Project assets
  │   ├── components/       	# - Shared components (i.e.) buttons, lists, forms
  │   ├── data/       	        # - Manage content and style options for dynamic modules
  │   ├── layouts/       	    # - Wrapper component for shared elements across pages (i.e.) header, footer
  │   ├── modules/       	    # - Components that make up content blocks
  │   ├── pages/            	# - Components automatically become pages with paths based on their file name
  │   ├── styles/       	    # - Contains build stylesheets and Sass partials
  │   └── html.js		        # - HTML component is responsible for everything other than where Gatsby lives in the <body />
  ├── gatsby-config.js          # - Manage siteMetadata (object), plugins (array), pathPrefix (string)
  ├── package.json              # - Manage versions of dependencies and custom npm scripts
  ├── postcss.config.js	        # - Manage PostCSS options, transform Tailwind directives into pure CSS
  ├── project-config.js			# - Manage project options, site-specific meta data, & third-party scripts
  └── tailwind.config.js		# - Manage Tailwind config
```

#### Project Component Heirarchy:

```
html.js/
└── layouts/ {this.props.postBodyComponents}
    └── index.js
        └── pages/ {children()}
        	   ├── 404.js
        	   └── index.js
					 └── modules/ (<Hero />)
					 		└── components/ (<form />)
```

#### Styles Directory

Loosely based off of the structure described this this Stack Overflow [solution](https://stackoverflow.com/questions/48272554/how-to-get-tailwind-css-working-with-gatsby-js).

```
styles/
├── builds/
│   ├── after-postcss/
│   │   ├── main.css
│   │   └── main.css.map
│   └── after-sass/
│       ├── main.css
│       └── main.css.map
├── sass/
│   ├── components/
│   ├── config/
│   ├── utilities/
│   │   ├── functions/
│   │   ├── mixins/
│   └── index.scss
└── main.scss
```

## Project Configuration

The Gatsby Marketing Page Generator allows the user the ability to add custom configuration to their project where they see fit. In most common cases, this includes third-party scripts & data, content, and styles.

### Third Party Scripts & Data

Project configuration options for a landing page are placed in a file at the root of the project folder called `project-config.js`.

#### Configuration Options

Commons options available to set within `project-config.js` include:

1.  Project Metadata
2.  Site Lead Attribution
3.  Salesforce Liveagent
4.  CallRail
5.  Misc. Third-Party Libraries

#### Project Metadata

The Marketin Page generator is meant to be flexible and utilizes across all sites in AAC's portfolio. When working with many sites, it's helpful to store all project-specific metadata in one location:

```
module.exports = {
  Project: {
    url: `americanaddictioncenters.org`,
    name: `American Addiction Centers - Social Paid Campaigns`,
    short_name: `aac`,
    title: `American Addiction Centers - Help For Addiction`,
    online_policy_link: `https://americanaddictioncenters.org/policy`,
    private_policy_link: `https://americanaddictioncenters.org/notice-of-privacy-practices`,
    terms_link: `https://americanaddictioncenters.org/term-of-use`,
    facebook_link: `https://www.facebook.com/AmericanAddictionCenters`,
    instagram_link: `https://www.instagram.com/soberusa`,
    linkedin_link: `https://www.linkedin.com/company/american-addiction-centers`,
    twitter_link: `https://twitter.com/AAC_Tweet`,
  },
 };
```

If you ever need to update the info, you only have to change it here.

#### Site Lead Attribution

AAC has authored a custom lead attriubition plugin to integrate with Salesforce.

```
module.exports = {
  Attribution: {
    leadsource: `lsv = 'WEB-AAC-MAIN';`,
    attr: `https://americanaddictioncenters.org/wp-content/plugins/aacattribution/dist/attrlib.min.js`,
    sf: `https://americanaddictioncenters.org/wp-content/plugins/aacattribution/dist/sfvar.min.js`,
  },
};
```

In most cases, the `attr` and `sf` properties will remain constant, however each site is assigned its own `leadsource`. This is where you will want to set or update that value. To learn more about the custom plugin, please visit its [repo](https://github.com/American-Addiction-Centers/aac-attribution/).

#### Salesforce Live Agent

Some marketing pages may call for a live chat feature in which case we use Salesforce LiveAgent. While some properties like `prefetch` and `org_id` may persist across sites, most are site-specific and require their own unique values.

```
module.exports = {
  Salesforce: {
	prefetch: `https://c.la1c1.Salesforceliveagent.com`,
    org_id: `00DG0000000CLl1`,
    deployment_id: `572G0000000TXdG`,
    deployment_src: `https://c.la1c1.Salesforceliveagent.com/content/g/js/36.0/deployment.js`,
    button_id: `573G0000000TXry`,
    chat_url: `https://d.la1c1.Salesforceliveagent.com/chat`,
  },
};
```

You will find all site-specific code snippets to use in your project in our Salesforce [documentation](https://github.com/American-Addiction-Centers/documents/blob/master/scripts/salesforce-live-agent.md).

#### CallRail

Our marketing pages utililze CallRail's Dynamic Number Insertion (DNI) to swap the phone number visible on the page depending on the source of traffic. The full code snippet is generated from our organization's account, and most often will be provided for you. At the very least, you will be provided with a phone number to update the CallRail object, as seen below.

```
module.exports = {
  CallRail: {
    src: `//cdn.callrail.com/companies/154422313/c8d5c08142940b7cb1ac/12/swap.js`,
    phone: `888-966-8152`,
    snippet_slug_1: `154422313`,
    snippet_slug_2: `c8d5c08142940b7cb1ac`,
  },
};
```

#### Third-Party Libraries

Marketing pages often rely on other external third-party libraries to add functionality. You have the ability to add them here. Commonly used libraries include:

- Fingerprintjs2
- jQuery
- Google Fonts

## Content Configuration

The Gatsby Marketing Page Generator also allows the user the ability to define content configurations for creating unique user experiences. In most cases, our landing pages will comprise of static content modules that are shared across projects and sites. However, we may want to serve users custom experiences depending on a set of pay-per-click campaign URL parameters.

### Assigning Content Variations

From the project root, you will find the `data/` directory containing a `content-config.js` file where you can assign specific copy and/or image variations to your liking.

```
module.exports = {
  hero: {
    background_image: {
      default: {
        backgroundImage: require(`../assets/background-images/hero--default.jpg`),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'unset',
      },
      avocado: {
        backgroundImage: require(`../assets/background-images/hero--avocado.jpg`),
      },
      banana: {
        backgroundImage: require(`../assets/background-images/hero--banana.jpg`),
      },
      cranberry: {
        backgroundImage: require(`../assets/background-images/hero--cranberry.jpg`),
      },
      dragonfruit: {
        backgroundImage: require(`../assets/background-images/hero--dragonfruit.jpg`),
      },
    },
  },
};
```

This basic example case assigns a number image variations to serve within a hero content module. Here, we have a default fallback image along with four variations simply named:

- default
- avocado
- banana
- cranberry
- dragonfruit

To help our app determine which hero image to serve, the library [React URL Query](https://github.com/pbeshai/react-url-query/) is imported into `pages/index.js`, along with the higher order component `addUrlProps` and config object `UrlQueryParamTypes`.

#### Example Usage

```
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';

import Hero from '../modules/Hero/Hero';
import { hero } from '../data/content-config';

/**
* Specify how the URL gets decoded here. This is an object that takes the prop name `keyParam` and the
* query param specifier 'variation' of type 'string' as the value. React URL Query will interpret URLs
* like: `/app?variation=avocado` and pass the prop `{keyParam: "avoacdo"}`
*/

const urlPropsQueryConfig = {
	keyParam: {
		type: UrlQueryParamTypes.string,
		queryParam: `variation`,
	},
};

class IndexPage extends Component {

	/**
	* The initial state of the IndexPage is set with default background image properties
	*/

	state = {
		backgroundImage: hero.background_image.default.backgroundImage,
		backgroundPosition: hero.background_image.default.backgroundPosition,
		backgroundRepeat: hero.background_image.default.backgroundRepeat,
    	backgroundSize: hero.background_image.default.backgroundSize,
	};

	/**
	* On mount if there is a URL query param present we check to see if its decoded value matches one
	* of the hero image variations defined in our content-config.js file. If yes, the IndexPage's state is
	* updated with the associated hero image properties. Otherwise, the default hero image properties
	* persist
	*/

	componentDidMount() {

		const { keyParam } = this.props;

    	const getBackgroundKey = Object.keys(hero.background_image).find(
    		key => key === keyParam
		);

		if (getBackgroundKey) {
			this.setState({
				backgroundImage: hero.background_image[keyParam].backgroundImage,
			});
		}
	}

  	/**
  	* On render, the IndexPage's state is passed into the Hero content module as props
  	*/
  	render() {
  		const {
			backgroundImage,
      		backgroundPosition,
      		backgroundRepeat,
      		backgroundSize,
    	} = this.state;

    	return (
    		<div>
    			<Hero
    				backgroundImage={backgroundImage}
    				backgroundPosition={backgroundPosition}
    				backgroundRepeat={backgroundRepeat}
    				backgroundSize={backgroundSize}
	    		/>
	    	</div>
    	);
	}
}

IndexPage.propTypes = {
	keyParam: PropTypes.string,
};

IndexPage.defaultProps = {
	keyParam: '',
};

/**
 * Use the addUrlProps higher-order component to hook-in react-url-query.
 */
export default addUrlProps({ urlPropsQueryConfig })(IndexPage);
```

## How to use

Run `gatsby --help` for full help.

See the [Gatsby docs](https://www.gatsbyjs.org/docs/) for more.

#### In Development

At the root of a Gatsby site run `npm run develop`. The `watch:` scripts will run Sass & PostCSS (in this order) whenever a change is made to `styles/main.scss` or any of its partials.

#### Build

At the root of a Gatsby site run `npm run build`. The `build:` scripts will run Sass, PostCSS (without the watch tasks) and pathPrefix as defined in `gatsby-config.js`.

#### Serve

At the root of a Gatsby site run `gatsby serve` to serve the production build of the site for local testing.

