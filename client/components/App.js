import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Search from './Search';
import Display from './Display';
import Detail from './Detail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailView: null
    }
    this.createDetailView = this.createDetailView.bind(this);
    this.clearDetailView = this.clearDetailView.bind(this);
  }


  createDetailView(e){
    this.setState({detailView: e.target.id});
  }

  clearDetailView(e){
    this.setState({detailView: null});
  }

  render() {
    let viewSwitcher = <Display detailView={this.createDetailView}/>
    if(this.state.detailView){
      viewSwitcher = <Detail clearView={this.clearDetailView}/>
    } 
    return (
      <div>
        <div id="header">forest.js</div>
        <div id="viewcontainer">
          <Search/>
          {viewSwitcher}
        </div>
      </div>
    )
  }

}

export default App;
