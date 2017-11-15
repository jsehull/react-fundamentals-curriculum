import React from 'react';
import Zipcode from './Zipcode';

function Header() {
  return (
    <nav>
      <p className='nav-title'>Weather App</p>
      <div>
        <Zipcode />
      </div>
    </nav>
  )
}

module.exports = Header;