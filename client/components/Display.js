import React, { Component } from 'react';
import Table from './Table';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: null,
      user: null
    }
  }


  render() {
    return (
      <div id="displaycontainer">
        <Table detailView = {this.props.detailView}/>
      </div>
    )
  }
}

export default Display;
