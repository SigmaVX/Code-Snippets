import React, { Component } from 'react';
import UserInfo from "./components/ContextData";
import ProviderComp from "./components/ProviderComp";
import ConsumerComp from "./components/ConsumerComp";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        
        <h1>My User Info</h1>
          <ProviderComp>
            <ConsumerComp/>
          </ProviderComp>
      </div>
    );
  }
}

export default App;
