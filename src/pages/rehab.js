import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { addUrlProps, UrlQueryParamTypes } from "react-url-query";

// imports facility theme settings to update the project skin according to the facility branding
import { facility } from "../lib/project-config"
// queues the content
import { campaignDefault } from "../lib/content-config";
import PrimaryKey from "../lib/service-level.json";
import SecondaryKey from "../lib/substance.json";

import HeroWithParams from "../components/HeroWithParams";
import KeywordContent from "../components/KeywordContent/KeywordContent";

/**
 * configures the url params and how to decode.
 * it is an plain  object that maps prop names
 * to objects that describe the query params
 */
const urlPropsQueryConfig = {
  primaryKeyParam: {
    type: UrlQueryParamTypes.string,
    queryParam: "utm_campaign",
  },
  secondaryKeyParam: {
    type: UrlQueryParamTypes.string,
    queryParam: "keyword",
  },
};

class RehabPage extends PureComponent {
  // initializes state with fallback contents
  state = {
    theme: `${facility.theme}`,
    title: `${campaignDefault.hero.title}`,
    subline: `${campaignDefault.hero.subline}`,
    titlePrimary: `${campaignDefault.facilityFeatures.title}`,
    bodyPrimary: `${campaignDefault.facilityFeatures.body}`,
    titleSecondary: null,
    bodySecondary: null,
  };

  // check the url for matched params, then update with the appropriate keyword content
  componentDidMount() {
    const {
      primaryKeyParam,
      secondaryKeyParam,
    } = this.props;

    // match the url params with a slug value from the imported json file
    const getPrimaryKey = PrimaryKey.find(
      keyword => keyword.slug === primaryKeyParam
    );

    const getSecondaryKey = SecondaryKey.find(
      keyword => keyword.slug === secondaryKeyParam
    );

    // if no match, do nothing
    getPrimaryKey == undefined
      ? null
      : this.setState({
        title: getPrimaryKey.heroTitle,
        subline: getPrimaryKey.subline,
        titlePrimary: getPrimaryKey.title,
        bodyPrimary: getPrimaryKey.body,
      });

    getSecondaryKey == undefined
      ? null
      : this.setState({
        titleSecondary: getSecondaryKey.title,
        bodySecondary: getSecondaryKey.body,
      });


  }
  render() {
    const {
      theme,
      title,
      subline,
      titlePrimary,
      bodyPrimary,
      titleSecondary,
      bodySecondary,
    } = this.state;

    return (
      <div>
        <HeroWithParams title={title} subline={subline} />
        <KeywordContent
          theme={theme}
          titlePrimary={titlePrimary}
          bodyPrimary={bodyPrimary}
          titleSecondary={titleSecondary}
          bodySecondary={bodySecondary}
        />
      </div>
    );
  }
}

RehabPage.propTypes = {
  primaryKeyParam: PropTypes.string,
  onChangeprimaryKeyParam: PropTypes.func,
  secondaryKeyParam: PropTypes.string,
  onChangesecondaryKeyParam: PropTypes.func,
};
RehabPage.defaultProps = {
  primaryKeyParam: "",
  secondaryKeyParam: "",
};

export default addUrlProps({ urlPropsQueryConfig })(RehabPage);