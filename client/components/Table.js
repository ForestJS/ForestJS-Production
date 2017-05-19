import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: null,
      user: null
    }
    this.createTable = this.createTable.bind(this);
  }

  createTable(){
    let width = "25%"
    let holderStyle={
      "width":"100%",
      "height":"100%"
    }
    let holderStyle2={
      "width":"25%",
      "height":"100%",
      "float":"left"
    }
    let holderStyle3={
      "width":"75%",
      "height":"100%",
      "float":"left"
    }
    let holderStyle4={
      "width":"100%",
      "height":"50%",
      "float":"left"
    }


    return(
      <div className="holder" style={holderStyle}>
        <div className="holder" style={holderStyle2}></div>
        <div className="holder" style={holderStyle3}>
          <div className="holder" style={holderStyle4}></div>
          <div className="holder" style={holderStyle4}></div>
        </div>
      </div>
    )
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
