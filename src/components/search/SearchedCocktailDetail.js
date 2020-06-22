import React, { useState, useEffect } from "react";
import SearchManager from "../../modules/SearchManager";

const SearchedCocktailDetail = (props) => {
    const [cocktail, setCocktail] = useState({})

    const getCocktail = () => {
      SearchManager.getSingleCocktail(props.cocktailId)
        .then(response => {
          setCocktail(response.drinks[0]);
          console.log(response.drinks[0])
        })
    };

    useEffect(() => {
      getCocktail()
    }, [])

    return (
      <div className="pageContent">
          <h3>{cocktail.strDrink}</h3>
      </div>
    );
  };
  
  export default SearchedCocktailDetail;