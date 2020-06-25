import React, { useState, useEffect } from "react";
import SearchManager from "../../modules/SearchManager";
import CocktailManager from "../../modules/CocktailManager"
import IngredientManager from "../../modules/IngredientsManager"


const SearchedCocktailDetail = (props) => {
    const [cocktail, setCocktail] = useState({})

    const getCocktail = () => {
        SearchManager.getSingleCocktail(props.cocktailId)
            .then(response => {
                setCocktail(response.drinks[0])
                console.log(response.drinks[0])
            })
    };

    const godHelpUsAll = () => {

        const newCocktailInstance = {
            name: cocktail.strDrink,
            external_id: cocktail.idDrink,
            glass: cocktail.strGlass,
            instructions: cocktail.strInstructions,
            is_edited: false,
            is_new: false,
            image_url: cocktail.strDrinkThumb
        }
        CocktailManager.addExternalCocktail(newCocktailInstance).then(response => {
            for (let i = 1; i < 16; i++) {
                const ingredient = cocktail[`strIngredient${i}`]
                const measurement = cocktail[`strMeasure${i}`]
                if (ingredient != null) {
                    const newIngredientObj = {
                        "ingredient": ingredient,
                        "measurement": measurement,
                        "cocktail_id": response.id
                    }
                    IngredientManager.addExternalIngredient(newIngredientObj)
                }
            }
        }).then(props.history.push('/mycocktails'))
    }

    useEffect(() => {
        getCocktail()
    }, [])

    return (
        <>
            <div className="pageContent">
                <h3>{cocktail.strDrink}</h3>
            </div>
            <button type="button" onClick={godHelpUsAll}>Save Cocktail</button>
        </>
    );
};

export default SearchedCocktailDetail;