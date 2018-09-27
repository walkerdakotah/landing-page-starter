import React from 'react'

export default function Button(props) {
  console.log('button', props)
  return (
    <button className={props.theme}>
      {props.children}
    </button>
  )
}