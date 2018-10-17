import React from "react";

export default function HeroImage(props) {
  return (
    <div
      style={props.style}
      className={props.className ? props.className : `background-image`}>
      {props.children}
    </div>
  )
}
