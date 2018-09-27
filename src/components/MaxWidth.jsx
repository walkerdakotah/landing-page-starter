import React from 'react'

export default function MaxWidth(props) {
  return (
    <div className="mx-auto max-w-breakpoint lg:px-10">
      {props.children}
    </div>
  )
}