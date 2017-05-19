import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Search from './Search';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childPage: null,
      user: null,
      login: null,
      username: "",
      password: ""
    }
  }
  render() {
    return (
      <div>
        <div id="header">forest.js</div>
        <div id="viewcontainer">
          <Search/>
          <Display/>
        </div>
      </div>
    )
  }

}

export default App;
