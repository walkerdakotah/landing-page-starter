import React from 'react'

export default function MaxWidth(props) {
  return (
    <div
      className={props.maxWidth
        ? props.maxWidth
        : "mx-auto max-w-breakpoint lg:px-10"
      }
      style={props.style}>
      {props.children}
    </div>
  )
}