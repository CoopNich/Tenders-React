import React, { useState } from "react";
import IngredientManager from "../../modules/IngredientsManager"

const IngredientCard = (props) => {
    const [ingredient, setIngredient] = useState({ id: props.ingredient.id, ingredient: props.ingredient.ingredient, measurement: props.ingredient.measurement });
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const updateIngredient = (evt) => {
        evt.preventDefault();
        IngredientManager.updateIngredient(ingredient)
            .then(props.getIngredients)
        setIsEditing(false)
    };

    const handleFieldChange = (evt) => {
        const stateToChange = { ...ingredient };
        stateToChange[evt.target.id] = evt.target.value;
        setIngredient(stateToChange);
    };


    return (

        ingredient.measurement !== null

            ? <div className="ingredient-card">

                {isEditing

                    ? <><form onSubmit={updateIngredient}>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="measurement"
                            value={ingredient.measurement}
                        />
                    </form>
                        <form onSubmit={updateIngredient}>
                            <input
                                type="text"
                                required
                                onChange={handleFieldChange}
                                id="ingredient"
                                value={ingredient.ingredient}
                            />
                        </form></>

                    : <div onClick={() => { toggleEdit(); }}>{props.ingredient.measurement} - {props.ingredient.ingredient}</div>
                }
            </div>
            : <div className="ingredient-card">
                {isEditing
                    ? <>
                        <form onSubmit={updateIngredient}>
                            <input
                                type="text"
                                required
                                onChange={handleFieldChange}
                                id="ingredient"
                                value={ingredient.ingredient}
                            />
                        </form></>
                    : <div onClick={() => { toggleEdit(); }}>{props.ingredient.ingredient}</div>
                }
            </div>

    )
}

export default IngredientCard;