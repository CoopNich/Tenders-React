import React, { useState, useEffect } from "react";
import SearchManager from '../../modules/SearchManager';

const SearchResults = (props) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const generateResults = search => {
    setIsLoading(true)
    SearchManager.getCocktails(search)
      .then(cocktailresults => {
        console.log(cocktailresults)
        setResults(cocktailresults);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (props.location.state.search) {
      generateResults(props.location.state.search)
    }
  }, [props.location.state.search]);

  return  ( (isLoading) ?
    <div className="content">
      <p>Generating Search Results...</p>
    </div>
   : <>
    </>
    )
}

export default SearchResults;