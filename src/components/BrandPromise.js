import React from 'react';
import PromiseSeal from '../assets/logos/90-day-promise.png';

export default function BrandPromise() {
  return (
    <section className="section bg-grey-100">
      <div className="content-block text-center w-290">
        <img src={PromiseSeal} alt="aac 90 day promise" />
        <p className="tagline pt-8">
          If you successfully complete our 90-day program, we guarantee you’ll
          stay clean and sober, or you can return for a complimentary 30 days of
          treatment. **
        </p>
      </div>
    </section>
  );
}
