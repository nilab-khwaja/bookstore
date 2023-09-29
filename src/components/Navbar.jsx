import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import styles from './styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div>
        <h1>BookstoreCMS</h1>
        <ul>
          <li>
            <Link className={({ isActive }) => (isActive ? styles.activeLink : '')} to="/">Books</Link>
          </li>
          <li>
            <Link className={({ isActive }) => (isActive ? styles.activeLink : '')} to="catagories">Catagories</Link>
          </li>
        </ul>
      </div>

      <div>
        <BsFillPersonFill className={styles.icon} />
      </div>
    </nav>
  );
}

export default Navbar;
