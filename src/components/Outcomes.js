import React from 'react';
import ArrowDown from '../assets/logos/arrow-down.png';
import ProgressCircle from '../assets/logos/progress-circle.png';
import Graph from '../assets/outcomes/outcomes-graph.png';
import Number44 from '../assets/outcomes/outcomes-44.png';
import Number56 from '../assets/outcomes/outcomes-56.png';
import Number94 from '../assets/outcomes/outcomes-94.png';

/**
 * Potential global class rules:  element - classes
 *
 * section - section
 * h2 - h2 text-center lg:mb-8
 * ul - content-block list-reset text-center flex flex-col items-center lg:flex-row lg:items-start lg:justify-around
 * li - py-8 {style: logoWidth}
 * h2 - text-center lg:mb-8
 *
 */

const logoWidth = { maxWidth: '290px' };

export default function Outcomes() {
  return (
    <section>
      <div className="pt-16 lg:pt-32">
        <h2 className="h2 text-navy text-center mb-4 lg:mb-8">
          Our Graduates Report
        </h2>
        <ul className="content-block list-reset pb-8 text-center flex flex-col items-center lg:pb-16 lg:flex-row lg:items-start lg:justify-around">
          <li className="py-8" style={logoWidth}>
            <div className="flex items-end justify-center">
              <img src={ArrowDown} className="h-14 mr-2 lg:h-22 lg:mr-4" />
              <div className="flex flex-col">
                <span className="text-50 font-black leading-none lg:text-80">
                  44%
                </span>
                <span className="uppercase font-thin lg:text-24">
                  Reduction
                </span>
              </div>
            </div>
            <p className="p pt-4 mx-8 lg:text-20">
              in days experiencing physical health problems
            </p>
          </li>
          <li className="py-8" style={logoWidth}>
            <div className="flex items-end justify-center">
              <img src={ArrowDown} className="h-14 mr-2 lg:h-22 lg:mr-4" />
              <div className="flex flex-col">
                <span className="text-50 font-black leading-none lg:text-80">
                  56%
                </span>
                <span className="uppercase font-thin lg:text-24">
                  Reduction
                </span>
              </div>
            </div>
            <p className="p pt-4 mx-8 lg:text-20">
              in days experiencing mental health problems
            </p>
          </li>
          <li className="py-8" style={logoWidth}>
            <div className="flex items-end justify-center">
              <img src={ArrowDown} className="h-14 mr-2 lg:h-22 lg:mr-4" />
              <div className="flex flex-col">
                <span className="text-50 font-black leading-none lg:text-80">
                  94%
                </span>
                <span className="uppercase font-thin lg:text-24">
                  Reduction
                </span>
              </div>
            </div>
            <p className="p pt-4 mx-8 lg:text-20">
              in total days with significant family conflict
            </p>
          </li>
        </ul>
      </div>
      <div className="bg-img better-chance pb-16 lg:pb-32">
        <h2 className="h2 text-navy text-center mb-4 lg:mb-8">
          A Better Chance at Long-Term Sobriety
        </h2>
        <div className="flex items-end justify-center relative lg:pt-8">
          <img src={ProgressCircle} className="progress-circle" />
          <div className="flex flex-col absolute progress-circle--points">
            <span className="text-50 font-black leading-none lg:text-120">
              63%
            </span>
            <span className="uppercase font-thin text-center lg:text-24">
              of clients
            </span>
          </div>
        </div>
        <div className="content-block text-center" style={logoWidth}>
          <p className="p my-6 px-8 lg:text-20">
            were abstinent from all substances at 12 months
          </p>
          <p className="p pb-6">
            For a more comprehensive look at American Addiction Centers’
            Outcomes Study, please visit{' '}
            <a
              href="americanaddictioncenters.org/outcomes-study"
              target="_blank"
            >
              americanaddictioncenters.org/outcomes-study
            </a>
          </p>
          <p className="subtext">
            *Outcomes data from a 4-year study paid for by AAC and conducted at
            AAC facilities
          </p>
        </div>
      </div>
    </section>
  );
}
