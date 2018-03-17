import React, { Component } from 'react';
// import CssBaseline from 'material-ui/CssBaseline';

import './styles.css';

import { Header, Sidebar, Content } from '../components/smart';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <CssBaseline /> */}
        <Header/>
        <div className="App-main">
          <Sidebar />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
