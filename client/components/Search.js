import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: null,
      user: null
    }
  }

  
  render() {
    let resultsArray = [];
    for(let i=0;i<12;i++){
      let searchstyler=[{"background":"rgba(0,0,0,0.2)"},{"background":"rgba(0,0,0,0.0)"} ]
      resultsArray.push(<div style = {searchstyler[i%2]} key={i} id={i} className="searchresult">Search Result {i}</div>)
    }
    return (
      <div id="searchcontainer">
        <input id="searchbar" type="text" name="search" placeholder="Search..."/>
        {resultsArray}
      </div>
    )
  }
}

export default Search;
