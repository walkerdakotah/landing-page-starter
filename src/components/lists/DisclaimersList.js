import React from 'react';

const DisclaimersList = () => (
  <ul className="list-reset pt-20 pl-10 text-10 lg:text-14 text-grey">
    <li className="leading-normal pb-5 lg:pb-10">
      *Please call for an insurance verification. Not all insurance policies are
      the same. Insurance coverage varies based on individual policies. All
      logos and trademarks are the sole and exclusive rights of their respective
      owners.
    </li>
    <li className="leading-normal">
      **Terms and conditions apply. To learn more about how you can qualify for
      our guarantee, visit{' '}
      <a
        href="https://americanaddictioncenters.org/disclaimer/"
        className="text-grey no-underline hover:underline"
      >
        americanaddictioncenters.org/disclaimer
      </a>{' '}
      for details.
    </li>
  </ul>
);

export default DisclaimersList;
