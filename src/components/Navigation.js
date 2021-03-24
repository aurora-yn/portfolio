import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav id='navHome'>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/works">Works</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation;