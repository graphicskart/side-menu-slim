import React, { Component } from 'react';
import SideMenu from './Components/SideMenu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sideMenuCon">
          <SideMenu />
        </div>
        <div className="contentCon">

        </div>
      </div>
    );
  }
}

export default App;
