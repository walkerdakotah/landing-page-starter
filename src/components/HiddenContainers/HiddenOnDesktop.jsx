import React from 'react';

export default function HiddenOnDesktop(props) {
  return (
    <div className="text-center px-4 pb-8 absolute pin-b-center lg:hidden">
      {props.children}
    </div>
  )
}