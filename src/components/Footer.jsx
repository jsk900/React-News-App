import React from 'react';
import { BiCopyright } from 'react-icons/bi';

const Footer = ({ footerDate }) => {
  return (
    <footer>
      <span>
        <BiCopyright />
      </span>
      <p>{footerDate.current} Joseph Urbina</p>
    </footer>
  );
};

export default Footer;
