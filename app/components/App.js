import React from 'react';
import Header from './Header';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Home />
      </div>
    )
  }
}

module.exports = App;