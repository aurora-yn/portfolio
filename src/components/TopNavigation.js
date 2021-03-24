import React from 'react';
import { Link } from 'react-router-dom';

const TopNavigation = () => (
  <nav id='navTop'>
    <ul>
      <li className='yun'>
        <Link to="/">yun</Link>
      </li>
    </ul>
  </nav>
)

export default TopNavigation;