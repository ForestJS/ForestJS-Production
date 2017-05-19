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
    let branches = [1,[2,[3,[4],5,[6,7]],8,[9]]];
    let depth = function(branches){
        let branchStr = JSON.stringify(branches);
        let debth = 0;
        branchStr.split('').reduce((total,curr)=>{
          if(curr === '[') 
        })


    }

    return(

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
