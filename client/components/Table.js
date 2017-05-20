import React, { Component } from 'react';

class Table extends Component {
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
      "float":"left",
      "flexDirection":"column"
    }
    let holderStyle4={
      "width":"100%",
      "height":"50%",
      "clear":"both",
    }
    let holderStyle5={
      "width":"40%",
      "height":"100%",
      "float":"left"
    }
    let holderStyle6={
      "width":"100%",
      "height":"100%",
      "float":"left",
      "flexDirection":"column"
    }

    return(
      <div className="holder" style={holderStyle}>
        <div className="holder" style={holderStyle2}><div id='1' onClick={this.detailView} className ="content">Node 1</div></div>
        <div className="holder" style={holderStyle3}>
          <div className="holder" style={holderStyle4}>
            <div className="holder" style={holderStyle5}><div id='2' onClick={this.detailView} className ="content">Node 2</div></div>
            <div className = "holder" style={holderStyle6}>
              <div className="holder" style={holderStyle4}>
                <div className = "holder" style={holderStyle5}><div id='4' onClick={this.detailView} className ="content">Node 4</div></div>
                <div className = "holder" style={holderStyle}><div id='6' onClick={this.detailView} className ="content">Node 6</div></div>
              </div>
              <div className="holder" style={holderStyle4}>
                <div className = "holder" style={holderStyle5}><div id='5' onClick={this.detailView} className ="content">Node 5</div></div>
                <div className = "holder" style={holderStyle6}>
                  <div className = "holder" style={holderStyle4}><div id='7' onClick={this.detailView} className ="content">Node 7</div></div>
                  <div className = "holder" style={holderStyle4}><div id='8' onClick={this.detailView} className ="content">Node 8</div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="holder" style={holderStyle4}>
            <div className = "holder" style={holderStyle5}><div id='3' onClick={this.detailView} className ="content">Node 3</div></div>
            <div className = "holder" style={holderStyle}><div id='9' onClick={this.detailView} className ="content">Node 9</div></div>
          </div>
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
