import React from 'react';
import Zipcode from './Zipcode';

class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='homepage' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <h1>Enter a City and State</h1>
          <Zipcode />
        </div>
      </div>
    )
  }
}

module.exports = Home;