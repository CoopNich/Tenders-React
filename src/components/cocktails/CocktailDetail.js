import React, { useState, useEffect } from "react";
import CocktailManager from '../../modules/CocktailManager';
import IngredientManager from "../../modules/IngredientsManager"
import IngredientCard from "./IngredientCard"
import "./CocktailDetail.css"

const CocktailDetail = (props) => {
    const [cocktail, setCocktail] = useState({});
    const [ingredients, setIngredients] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing1, setIsEditing1] = useState(false);
    const [isEditing2, setIsEditing2] = useState(false);

    const toggleEdit1 = () => {
        setIsEditing1(!isEditing1);
    };
    const toggleEdit2 = () => {
        setIsEditing2(!isEditing2);
    };

    const handleFieldChange = (evt) => {
        const stateToChange = { ...cocktail };
        stateToChange[evt.target.id] = evt.target.value;
        setCocktail(stateToChange);
    };

    const updateCocktail = (evt) => {
        evt.preventDefault();
        CocktailManager.updateCocktail(cocktail);
        setIsEditing1(false)
        setIsEditing2(false)
    };

    const getCocktail = () => {
        setIsLoading(true)
        CocktailManager.getCocktailById(props.cocktailId)
            .then(cocktailresults => {
                setCocktail(cocktailresults);
                setIsLoading(false);
            });
    };

    const getIngredients = () => {
        setIsLoading(true)
        IngredientManager.getIngredientByCocktailId(props.cocktailId)
            .then(ingredientresults => {
                setIngredients(ingredientresults);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getCocktail()
        getIngredients()
    }, []);

    return (
        <>
            <div className="content">
                <div>
                    <img src={cocktail.image_url}></img>
                    {isEditing1
                        ? <form onSubmit={updateCocktail}>
                            <input
                                type="text"
                                required
                                onChange={handleFieldChange}
                                id="name"
                                value={cocktail.name}
                            />
                        </form>
                        : <p onClick={() => { toggleEdit1(); }}>{cocktail.name}</p>
                    }
                </div>
            </div>
            <div>
                {ingredients.map((ingredient) => (
                    <IngredientCard key={ingredient.id} ingredient={ingredient} getIngredients={getIngredients} {...props} />))}
            </div>
            <div>
                {isEditing2
                    
                    ? <><form onSubmit={updateCocktail}>
                        <textarea rows="5" cols="40"
                            type="textarea"
                            required
                            onChange={handleFieldChange}
                            id="instructions"
                            value={cocktail.instructions}
                        />
                    </form>
                    <button type="button" onClick={() => { toggleEdit2(); }}>Update</button></>
                    : <span onClick={() => { toggleEdit2(); }}>{cocktail.instructions}</span>
                }
            </div>
        </>


    )
}

export default CocktailDetail;