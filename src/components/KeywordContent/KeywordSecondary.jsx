import React from "react";

export default function KeywordSecondary(props) {
  return (
    <div className="content-block">
      <div className="px-8 mb-8">
        <h2 style={{ color: props.theme }} className="h2 text-center mb-4 lg:mb-8 lg:w-3/4 lg:m-auto">{props.titleSecondary}</h2>
        <p className="p">{props.bodySecondary}</p>
      </div>
    </div>
  );
};
