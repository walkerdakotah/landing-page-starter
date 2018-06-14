import React from 'react';

const ThreeSteps = () => (
  <section className="bg-aqua">
    <div className="m-auto container py-40 px-10 lg:px-40 lg:m-auto max-w-xs lg:max-w-xl">
      <ul className="list-reset flex flex-col lg:flex-row">
        <li className="text-center lg:text-left border-b lg:border-b-0 lg:border-r border-navy lg:px-20 lg:w-1/3">
          <h2 className="mb-10 text-24 lg:text-36 font-400 text-navy leading-normal lg:text-left">
            Free.
          </h2>
          <div className="text-16 lg:text-18 font-300 text-grey-500 leading-normal">
            <p className="mb-20">
              Your 1-on-1 consultation and insurance verification are 100% free.
            </p>
          </div>
        </li>
        <li className="text-center lg:text-left pt-20 lg:pt-0 lg:px-20 border-b lg:border-b-0 lg:border-r border-navy lg:w-1/3">
          <h2 className="mb-10 text-24 lg:text-36 font-400 text-navy leading-normal lg:text-left">
            Easy.
          </h2>
          <div className="text-16 lg:text-18 font-300 text-grey-500 leading-normal">
            <p className="mb-20">
              All you have to do is pick up the phone and call or chat now.
            </p>
          </div>
        </li>
        <li className="text-center lg:text-left pt-20 lg:pt-0 lg:px-20 lg:w-1/3">
          <h2 className="mb-10 text-24 lg:text-36 font-400 text-navy leading-normal lg:text-left">
            Confidential.
          </h2>
          <div className="text-16 lg:text-18 font-300 text-grey-500 leading-normal">
            <p className="">
              We will never share your information with a third party without
              your explicit consent.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default ThreeSteps;
