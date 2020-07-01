import React, { useState, useEffect } from "react";
import SearchManager from "../../modules/SearchManager";
import CocktailManager from "../../modules/CocktailManager"
import IngredientManager from "../../modules/IngredientsManager"
import SearchedIngredientCard from "../cocktails/SearchedIngredientCard"


const SearchedCocktailDetail = (props) => {
    const [cocktail, setCocktail] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [display, setDisplay] = useState(false)

    const toggleDisplay = () => {
        setDisplay(!display);
    };

    const concatIngredients = []

    const setAllIngredients = () => {
        SearchManager.getSingleCocktail(props.cocktailId)
            .then(response => {
                for (let i = 1; i < 16; i++) {
                    const ingredient = response.drinks[0][`strIngredient${i}`]
                    const measurement = response.drinks[0][`strMeasure${i}`]
                    if (ingredient != null) {
                        const newIngredientObj = {
                            "ingredient": ingredient,
                            "measurement": measurement,
                            "id": i
                        }
                        concatIngredients.push(newIngredientObj)
                    }
                }
            }).then(setIngredients(concatIngredients)).then(toggleDisplay())

    }
    const getCocktail = () => {
        SearchManager.getSingleCocktail(props.cocktailId)
            .then(response => {
                setCocktail(response.drinks[0])
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
        setIsLoading(true)
        getCocktail()
        setIsLoading(false)
    }, [ingredients])

    return (
        <>  {!isLoading
            ? <div className="content">
                <div className="detail-flex">
                    <div className="detail-name">
                        <img className="detail-image" src={cocktail.strDrinkThumb} required></img>
                        <h2>{cocktail.strDrink}</h2>
                    </div>
                    <div className="detail-ingredients">

                        <div>
                            <div>
                                {!display
                                ?<button onClick={setAllIngredients}>Show Ingredients</button>
                                :null}
                            </div>
                            {ingredients.map((ingredient) => (
                                <SearchedIngredientCard key={ingredient.id} ingredient={ingredient} {...props} />))}
                        </div>
                    </div>
                </div>
                <div>
                    <p>{cocktail.strInstructions}</p>                    
                </div>
                <div><button onClick={godHelpUsAll}> Save</button></div>
            </div>
            : null}
        </>
    );
};

export default SearchedCocktailDetail;