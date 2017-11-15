const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
  render() {
    return (
      <div>Weather App wired up</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);