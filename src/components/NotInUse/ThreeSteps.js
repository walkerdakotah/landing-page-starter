import React from 'react';

export default function ThreeSteps() {
  return (
    <section className="py-8 bg-aqua text-navy lg:py-16">
      <ul className="content-block list-reset text-center flex flex-col items-center lg:flex-row lg:items-start lg:justify-around">
        <li className="w-290 py-8">
          <h2 className="h2 mb-4">Free.</h2>
          <p className="p">
            Your 1-on-1 consultation and insurance verification are 100% free.
          </p>
        </li>
        <li className="w-290 py-8">
          <h2 className="h2 mb-4">Easy.</h2>
          <p className="p">
            All you have to do is pick up the phone and call or chat now.
          </p>
        </li>
        <li className="w-290 py-8">
          <h2 className="h2 mb-4">Confidential.</h2>
          <p className="p">
            We will never share your information with a third party without your
            explicit consent.
          </p>
        </li>
      </ul>
    </section>
  );
}
