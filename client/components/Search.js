import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  
  render() {
    
    const treeSearchHandler = this.props.treeSearchHandler;
    const searchResults = this.props.searchResults;
    
    let resultsArray = [];
    for(let i=0;i<searchResults.length;i++){
      let searchstyler=[{"background":"rgba(0,0,0,0.2)"},{"background":"rgba(0,0,0,0.0)"} ]
      resultsArray.push(<div style = {searchstyler[i%2]} id={searchResults[i]._id} key={i} className="searchresult">{searchResults[i].name}</div>)
    }

    return (
      <div id="searchcontainer">
        <form onSubmit={this.props.handleSearchSubmit}>
          <label>
            Tree Name:
            <input type="text" value={this.state.value} onChange={this.props.handleSearchChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {resultsArray}
      </div>
    )
  }
}

export default Search;
