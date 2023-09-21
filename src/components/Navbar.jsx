import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="catagories">Catagories</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
