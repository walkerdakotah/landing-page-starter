import React from 'react';

import Number44 from '../../assets/outcomes/outcomes-44.png';
import Number56 from '../../assets/outcomes/outcomes-56.png';
import Number94 from '../../assets/outcomes/outcomes-94.png';

const GraduatesReport = () => (
  <div className="m-auto container pt-40">
    <h2 className="mb-20 lg:mb-40 lg:pb-20 text-center text-24 lg:text-36 text-navy font-300 lg:font-400">
      Our Graduates Report:
    </h2>
    <ul className="list-reset flex flex-col items-center lg:flex-row">
      <li className="mb-40 lg:px-20 flex flex-col items-center w-48 lg:w-1/3 lg:border-r">
        <div className="w-40 lg:w-56 my-10 flex-none">
          <img src={Number44} alt="44 percent" />
        </div>
        <div className="text-center">
          <p className="text-16 lg:text-26 font-400 lg:font-300 text-grey-500 leading-normal lg:leading-tight">
            in days experiencing physical health problems
          </p>
        </div>
      </li>
      <li className="mb-40 lg:px-20 flex flex-col items-center w-48 lg:w-1/3 lg:border-r">
        <div className="w-40 lg:w-56 my-10 flex-none">
          <img src={Number56} alt="44 percent" />
        </div>
        <div className="text-center">
          <p className="text-16 lg:text-26 font-400 lg:font-300 text-grey-500 leading-normal lg:leading-tight">
            in days experiencing mental health problems
          </p>
        </div>
      </li>
      <li className="mb-40 lg:px-20 flex flex-col items-center w-48 lg:w-1/3">
        <div className="w-40 lg:w-56 my-10 flex-none">
          <img src={Number94} alt="44 percent" />
        </div>
        <div className="text-center">
          <p className="text-16 lg:text-26 font-400 lg:font-300 text-grey-500 leading-normal lg:leading-tight">
            in total days with significant family conflict
          </p>
        </div>
      </li>
    </ul>
  </div>
);

export default GraduatesReport;
