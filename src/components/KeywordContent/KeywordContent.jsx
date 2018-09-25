import React from "react";
import KeywordPrimary from "./KeywordPrimary";
import KeywordSecondary from "./KeywordSecondary";

export default function KeywordContent(props) {
  return (
    <section className="section">
      <KeywordPrimary
        theme={props.theme}
        titlePrimary={props.titlePrimary}
        bodyPrimary={props.bodyPrimary}
      />
      <KeywordSecondary
        theme={props.theme}
        titleSecondary={props.titleSecondary}
        bodySecondary={props.bodySecondary}
      />
    </section>
  );
};

