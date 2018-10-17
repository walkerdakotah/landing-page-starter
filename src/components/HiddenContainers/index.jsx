import React from 'react';

export function HiddenOnMobile(props) {
  return (
    <div className="content-block hidden lg:flex">
      {props.children}
    </div>
  )
}

export function HiddenOnDesktop(props) {
  return (
    <div className="lg:hidden">
      {props.children}
    </div>
  )
}