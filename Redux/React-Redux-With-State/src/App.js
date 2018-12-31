import React, { Component } from 'react';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          <li>Use Redux To Add & Remove People</li>
        </ol>
        <Persons />
      </div>
    );
  }
}

export default App;
