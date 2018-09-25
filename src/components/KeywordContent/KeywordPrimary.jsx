import React from "react";

export default function KeywordPrimary(props) {
  return (
    <div className="content-block">
      <div className="px-8 mb-8">
        <h2 className="h2 text-navy text-center mb-4 lg:mb-8 lg:w-3/4 lg:m-auto">{props.titlePrimary}</h2>
        <p className="p">{props.bodyPrimary}</p>

      </div>
    </div>
  );
};