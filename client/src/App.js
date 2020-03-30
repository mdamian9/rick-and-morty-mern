import React, { Component } from 'react';
import LandingPage from './components/LandingPage/LandingPage';

class App extends Component {
  render = () => {
    return (
      <div>
        <LandingPage history={this.props.history} />
      </div>
    );
  };
};

export default App;
