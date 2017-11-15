import React from 'react';

function Zipcode(props) {
  return (
    <div className='zipcode-container'>
      <input
        placeholder='New Haven, CT'
        type='text'
      />
      <p className='button'>Get Weather</p>
    </div>
  );
}

module.exports = Zipcode;