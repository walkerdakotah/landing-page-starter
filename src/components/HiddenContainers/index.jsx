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
    <div className="text-center px-4 pb-8 absolute pin-b-center lg:hidden">
      {props.children}
    </div>
  )
}