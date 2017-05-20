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
    
    console.log('treeSearchHandler -->', treeSearchHandler)
    const treeSearchHandler = this.props.treeSearchHandler;
    
    let resultsArray = [];
    for(let i=0;i<12;i++){
      let searchstyler=[{"background":"rgba(0,0,0,0.2)"},{"background":"rgba(0,0,0,0.0)"} ]
      resultsArray.push(<div style = {searchstyler[i%2]} key={i} id={i} className="searchresult">Search Result {i}</div>)
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
