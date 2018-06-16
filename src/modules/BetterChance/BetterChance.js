import React from 'react';

import Graph from '../../assets/outcomes/outcomes-graph.png';

const BetterChance = () => (
  <div className="better-chance lg:py-80">
    <h2 className="mb-20 px-10 lg:mb-40 lg:pb-20 text-center text-24 lg:text-40 text-navy font-700 font-serif">
      A Better Chance at Long-Term Sobriety
    </h2>
    <div className=" pt-20 pb-40">
      <div className="m-auto container px-10 lg:px-40">
        <div className="w-56 lg:w-96 m-auto mb-20">
          <img src={Graph} alt="63 percent" />
        </div>
        <div className="text-center mb-20 text-18 lg:text-26 font-500 text-grey-500 leading-normal">
          we're abstinent from all substances at 12 months
        </div>
        <div className="text-center mb-10 text-14 lg:text-18 font-500 text-grey-500 leading-normal">
          *Outcomes data from a 4-year study paid for by AAC and conducted at
          AAC facilities
        </div>
      </div>
    </div>
  </div>
);

export default BetterChance;
