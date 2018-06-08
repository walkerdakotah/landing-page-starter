import React from 'react';
import Logo from '../../assets/aac/logo/logo-multi.svg';

const LogoPrimary = () => (
  <a className="corp-link" href="/" target="blank">
    <img src={Logo} className="corp-logo" />
  </a>
);

export default LogoPrimary;

// export default function LogoPrimary({ logo }) {
//   return (
//     <a className="corp-link" href="/" target="blank">
//       <img src={Logo} className="corp-logo" />
//     </a>
//   );
// }

// LogoPrimary.propTypes = {
//   logo: PropTypes.string.isRequired,
// };
