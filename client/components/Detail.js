import React, { Component } from 'react';
import Table from './Table';

class Detail extends Component {
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
        It's working!!
        <button onClick = {this.props.clearView}>Go back to tree</button>
      </div>
    )
  }
}

export default Detail;
