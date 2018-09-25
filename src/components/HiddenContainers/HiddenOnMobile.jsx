import React from 'react';

export default function HiddenOnMobile(props) {
  return (
    <div className="content-block hidden lg:flex">
      {props.children}
    </div>
  )
}