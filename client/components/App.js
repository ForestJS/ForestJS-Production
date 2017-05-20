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
      activeTree: {
        "_id": {
            "$oid": "591f6b891b1e4191ea9f9e61"
        },
        "name": "Learn Web Development",
        "branches": [
                1,
                [
                    2,
                    [
                        3,
                        [
                            4
                        ],
                        5,
                        [
                            2,
                            3
                        ]
                    ],
                    6,
                    9,
                    [
                        4,
                        12,
                        9
                    ]
                ]
            ],
            "depth": "4"
          },
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
  }

  handleSearchSubmit(e){
    e.preventDefault();

    axios.post('http://localhost:3000/', {treeQuery: this.state.searchText})
        .then(res => {
            this.setState({searchResults:res.data})
        });
  }

  render() {
    let viewSwitcher = <Display detailView={this.createDetailView} activeTree={this.state.activeTree}/>
    if(this.state.detailView){
      viewSwitcher = <Detail clearView={this.clearDetailView}/>
    } 
    return (
      <div>
        <div id="header">forest.js</div>
        <div id="viewcontainer">
          <Search handleSearchChange={this.handleSearchChange} handleSearchSubmit={this.handleSearchSubmit} searchResults={this.state.searchResults}/>
          {viewSwitcher}
        </div>
      </div>
    )
  }

}

export default App;
