import React, { useEffect, useState } from "react";
import CocktailManager from "../../modules/CocktailManager";
import IngredientManager from "../../modules/IngredientsManager"

const CocktailForm = (props) => {
    const [cocktail, setCocktail] = useState({});
    const [ingredient, setIngredient] = useState({})
    const [image, setImage] = useState(null)
    const [allIngredients, setAllIngredients] = useState([])

    const handleFieldChange = (evt) => {
        const stateToChange = { ...cocktail };
        stateToChange[evt.target.id] = evt.target.value;
        setCocktail(stateToChange);
    };

    const appendIngredient = (evt) => {
        evt.preventDefault()
        setAllIngredients([...allIngredients, ingredient])
        setIngredient({ measurement: "", ingredient: "" })
    }

    const handleIngredientChange = (evt) => {
        const stateToChange = { ...ingredient };
        stateToChange[evt.target.id] = evt.target.value;
        setIngredient(stateToChange);
    };

    const UploadImage = async e => {


        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'tenders')
        const res = await fetch(
            '	https://api.cloudinary.com/v1_1/tenders/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setImage(file.secure_url)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const newCocktail = {
            name: cocktail.name,
            external_id: null,
            glass: cocktail.glass,
            instructions: cocktail.instructions,
            is_edited: false,
            is_new: true,
            image_url: image
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
                    <input type="file" name="file" placeholder="Upload Image" onChange={UploadImage} />
                    <img className="detail-image" src={image} required></img>
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