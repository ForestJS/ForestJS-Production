import React, { Component } from 'react';
// import TableBeta2 from './TableBeta2';
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
        <Table detailView = {this.props.detailView} activeTree={this.state.activeTree}/>
      </div>
    )
  }
}

export default Display;
