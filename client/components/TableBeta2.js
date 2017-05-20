import React, { Component } from 'react';

class TableBeta2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: null,
      user: null
    }
    this.createTable = this.createTable.bind(this);
    this.detailView = this.props.detailView.bind(this);
  }

  createTable(){
    const activeTree = '';
  }

  render() {
    let view = this.createTable();
    return (
      <div id="tablecontainer">
        {view}
      </div>
    )
  }
}

export default Table;
