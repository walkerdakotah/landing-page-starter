import React from "react"
import { callTrackingNumber, callTrackingNumberLink } from '../lib/globals';

export default function Button(props) {
  return (
    <a href={callTrackingNumberLink} style={props.style}>
      {props.children || callTrackingNumber}
    </a>
  )
}