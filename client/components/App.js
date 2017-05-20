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
      detailView: null,
      searchText: '',
      searchResults: [],
    }
    this.createDetailView = this.createDetailView.bind(this);
    this.clearDetailView = this.clearDetailView.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  createDetailView(e){
    this.setState({detailView: e.target.id});
  }

  clearDetailView(e){
    this.setState({detailView: null});
  }

  handleSearchChange(e) {
    this.setState({searchText: e.target.value});
    console.log('this.state.searchText on change-->', this.state.searchText)
  }

  handleSearchSubmit(e){
    e.preventDefault();
    console.log('this.state.searchText on submit -->', this.state.searchText)
    // if (e.keyCode === 13) {
    //   axios.post('http://localhost:3000/', {
    //     data: {
    //         treeQuery: `some string`,
    //         }
    //     })
    //     .then(res => {
    //         console.log(res.status, 'added to the database')
    //         this.updateAverages();
    //     })
    // }

    axios.post('http://localhost:3000/', {treeQuery: this.state.searchText})
        .then(res => {
            // console.log('search results -->', res.data.returnedTrees)
            console.log('search results -->', res.data)
            this.setState({searchResults:res.data})
            console.log('state -->', this.state)
        })
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
          <Search handleSearchChange={this.handleSearchChange} handleSearchSubmit={this.handleSearchSubmit}/>
          {viewSwitcher}
        </div>
      </div>
    )
  }

}

export default App;
