import React, { useState, useEffect } from "react";
import SearchManager from '../../modules/SearchManager';
import ResultsCard from './ResultsCard'

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
   : <>  {results.drinks !== null
               ? <div className="content"><div className="card-content">{results.drinks.map((cocktail) => (
              <ResultsCard key={cocktail.idDrink} cocktail={cocktail} {...props} />
            ))}</div></div>
            : <div>No results found</div>
               }
    </>
    )
}

export default SearchResults;