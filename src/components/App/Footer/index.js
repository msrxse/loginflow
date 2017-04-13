import React from 'react';
import styles from '../App.css';

const Footer = () =>
  <footer className={styles.info}>
    <ul>
      <li>App description here</li>
      <li>App Name here</li>
      <li>Code in <a href="https://github.com/jmarcosuarez/minimal-react-boilerplate">github</a></li>
    </ul>
  </footer>;

export default Footer;
