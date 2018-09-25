import React from "react";
import KeywordPrimary from "./KeywordPrimary";
import KeywordSecondary from "./KeywordSecondary";

export default function KeywordContent(props) {
  return (
    <section className="section">
      <KeywordPrimary
        titlePrimary={props.titlePrimary}
        bodyPrimary={props.bodyPrimary}
      />
      <KeywordSecondary
        titleSecondary={props.titleSecondary}
        bodySecondary={props.bodySecondary}
      />
    </section>
  );
};

