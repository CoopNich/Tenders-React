import React, { useEffect, useState } from "react";
import CocktailManager from "../../modules/CocktailManager";
import IngredientManager from "../../modules/IngredientsManager"

const CocktailForm = (props) => {
    const [cocktail, setCocktail] = useState({});
    const [ingredient, setIngredient] = useState({})
    const [allIngredients, setAllIngredients] = useState([])

    const handleFieldChange = (evt) => {
        const stateToChange = { ...cocktail };
        stateToChange[evt.target.id] = evt.target.value;
        setCocktail(stateToChange);
    };

    const appendIngredient = (evt) => {
        evt.preventDefault()
        setAllIngredients([...allIngredients, ingredient])
        setIngredient({measurement: "", ingredient: ""})
    }

    const handleIngredientChange = (evt) => {
        const stateToChange = { ...ingredient };
        stateToChange[evt.target.id] = evt.target.value;
        setIngredient(stateToChange);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const newCocktail = {
            name: cocktail.name,
            external_id: null,
            glass: cocktail.glass,
            instructions: cocktail.instructions,
            is_edited: false,
            is_new: true,
            image_url: null
        };

        CocktailManager.addExternalCocktail(newCocktail).then(response =>
            allIngredients.map((ingredient) => {
                const newIngredientObj = {
                    "ingredient": ingredient.ingredient,
                    "measurement": ingredient.measurement,
                    "cocktail_id": response.id
                }
                IngredientManager.addExternalIngredient(newIngredientObj)               
            })
        ).then(() => props.history.push("/mycocktails"))

    };

    return (
        <div className="content">
            <form onSubmit={handleSubmit}>
                <h1>Stir up a drink!</h1>
                <fieldset>
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={handleFieldChange}
                        type="text"
                        id="name"
                        required=""
                        autoFocus=""
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="glass">Glass Type:</label>
                    <input
                        onChange={handleFieldChange}
                        type="text"
                        id="glass"
                        required=""
                        autoFocus=""
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="measurement">Measurement:</label>
                    <input
                        onChange={handleIngredientChange}
                        type="text"
                        id="measurement"
                        required=""
                        autoFocus=""
                        value={ingredient.measurement}
                    />
                    <label htmlFor="ingredient">Ingredient:</label>
                    <input
                        onChange={handleIngredientChange}
                        type="text"
                        id="ingredient"
                        required=""
                        autoFocus=""
                        value={ingredient.ingredient}
                    />
                    <button onClick={appendIngredient}>Add Ingredient</button>
                </fieldset>
                <div>{allIngredients.map((ingredient) => (
                    <p>{ingredient.measurement} - {ingredient.ingredient}</p>
                ))}</div>
                <fieldset>
                    <label htmlFor="instructions">Instructions:</label>
                    <textarea rows="5" cols="50"
                        onChange={handleFieldChange}
                        type="text"
                        id="instructions"
                        required=""
                        autoFocus=""
                    />
                </fieldset>
                <button type="submit">Add</button>
                <button type="button" onClick={() => props.history.push("/mycocktails")}>
                    Cancel
        </button>
            </form>
        </div>
    );
};

export default CocktailForm;