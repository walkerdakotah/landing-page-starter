import React from 'react';
import PromiseSeal from '../../assets/logo/90-day-promise.png';

const BrandPromise = () => (
  <section className="bg-grey-100 py-40">
    <div className="container m-auto px-10 lg:px-40">
      <div className="w-48 m-auto mb-20">
        <img src={PromiseSeal} alt="90 day promise" />
      </div>
      <div className="text-center text-18 text-grey-500 font-500 leading-normal lg:m-auto lg:max-w-lg">
        If you successfully complete our 90-day program, we guarantee you’ll
        stay clean and sober, or you can return for a complimentary 30 days of
        treatment. **
      </div>
    </div>
  </section>
);

export default BrandPromise;
