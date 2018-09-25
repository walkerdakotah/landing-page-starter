import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { addUrlProps, UrlQueryParamTypes } from "react-url-query";

import HeroWithParams from "../components/HeroWithParams";
import KeywordContent from "../components/KeywordContent/KeywordContent";

import { campaignDefault } from "../lib/content-config";
import PrimaryKey from "../lib/service-level.json";
import SecondaryKey from "../lib/substance.json";

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

class DetoxPage extends PureComponent {
  state = {
    title: `${campaignDefault.hero.title}`,
    subline: `${campaignDefault.hero.subline}`,
    titlePrimary: `${campaignDefault.facilityFeatures.title}`,
    bodyPrimary: `${campaignDefault.facilityFeatures.body}`,
    titleSecondary: null,
    bodySecondary: null,
  };
  componentDidMount() {
    const {
      primaryKeyParam,
      secondaryKeyParam,
    } = this.props;

    const getPrimaryKey = PrimaryKey.find(
      keyword => keyword.slug === primaryKeyParam
    );

    const getSecondaryKey = SecondaryKey.find(
      keyword => keyword.slug === secondaryKeyParam
    );

    getPrimaryKey == undefined
      ? null
      : this.setState({
        title: getPrimaryKey.title,
        subline: getPrimaryKey.subline,
        titlePrimary: getPrimaryKey.header,
        bodyPrimary: getPrimaryKey.text,
      });
    getSecondaryKey == undefined
      ? null
      : this.setState({
        titleSecondary: getSecondaryKey.header,
        bodySecondary: getSecondaryKey.text,
      });
  }
  render() {
    const {
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
          titlePrimary={titlePrimary}
          bodyPrimary={bodyPrimary}
          titleSecondary={titleSecondary}
          bodySecondary={bodySecondary}
        />
      </div>
    );
  }
}

DetoxPage.propTypes = {
  primaryKeyParam: PropTypes.string,
  onChangeprimaryKeyParam: PropTypes.func,
  secondaryKeyParam: PropTypes.string,
  onChangesecondaryKeyParam: PropTypes.func,
};
DetoxPage.defaultProps = {
  primaryKeyParam: "",
  secondaryKeyParam: "",
};

export default addUrlProps({ urlPropsQueryConfig })(DetoxPage);