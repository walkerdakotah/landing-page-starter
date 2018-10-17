import React from 'react';
import MaxWidth from './MaxWidth';

export default function ThreeSteps() {
  return (
    <section className="pt-60 pb-100 bg-aqua text-navy">
      <MaxWidth>
        <div className="flex flex-col flex-wrap text-center lg:flex-row">
          <div className="flex-1 px-30">
            <h2 className="h2 my-30">Free.</h2>
            <p className="p">
              Your 1-on-1 consultation and insurance verification are 100% free.
          </p>
          </div>
          <div className="flex-1 px-30">
            <h2 className="h2 my-30">Easy.</h2>
            <p className="p">
              All you have to do is pick up the phone and call or chat now.
          </p>
          </div>
          <div className="flex-1 px-30">
            <h2 className="h2 my-30">Confidential.</h2>
            <p className="p">
              We will never share your information with a third party without your
              explicit consent.
          </p>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
