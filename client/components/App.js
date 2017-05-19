import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Search from './Search';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailView: null
    }
    this.createDetailView = this.createDetailView.bind(this);
  }


  createDetailView(e){
    this.setState({detailView: e.target.id});
  }

  render() {
    let viewSwitcher = <Display detailView={this.state.createDetailView}/>
    if(this.state.detailView){
      console.log('switching view')
      viewSwitcher = <Detail />
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
