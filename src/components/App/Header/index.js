import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router';

import styles from '../App.css';

const Header = () =>
  <header className={styles.header}>
    <Link to="/" className="nav__logo-wrapper"><h2 className="nav__logo">Login&nbsp;Flow</h2></Link>
    <Nav />
  </header>;

export default Header;
