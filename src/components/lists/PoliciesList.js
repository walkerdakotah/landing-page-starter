import React from 'react';
import { Project } from '../../../project-config.js';

const PoliciesList = () => (
  <ul className="list-reset pt-20 flex flex-wrap">
    <li className="mb-5 pr-10 flex-none border-r border-white">
      <a
        className="no-underline text-white text-14 font-100 hover:underline"
        href={Project.online_policy_link}
        target="blank"
      >
        Notice of Privacy Practices
      </a>
    </li>
    <li className="mb-5 px-10 flex-none border-r border-white">
      <a
        className="no-underline text-white text-14 font-100 hover:underline"
        href={Project.private_policy_link}
        target="blank"
      >
        Online Privacy Policy
      </a>
    </li>
    <li className="mb-5 px-10 flex-none">
      <a
        className="no-underline text-white text-14 font-100 hover:underline"
        href={Project.terms_link}
        target="blank"
      >
        Terms of Use
      </a>
    </li>
  </ul>
);

export default PoliciesList;
