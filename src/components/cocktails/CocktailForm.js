import React, { useEffect, useState } from "react";
import CocktailManager from "../../modules/CocktailManager";

const CocktailForm = (props) => {
  const [cocktail, setCocktail] = useState({});

  const handleFieldChange = (evt) => {
    const stateToChange = { ...cocktail };
    stateToChange[evt.target.id] = evt.target.value;
    setCocktail(stateToChange);
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

      CocktailManager.addExternalCocktail(newCocktail).then(() =>
        props.history.push("/cocktails")
      );
    
  };

  return (
    <div className="content">
      <form onSubmit={handleSubmit}>
        <h1>Stir up a drink!</h1>
        <fieldset>
          <label htmlFor="merchantName">Name:</label>
          <input
            onChange={handleFieldChange}
            type="text"
            id="name"
            required=""
            autoFocus=""
          />
        </fieldset>
        <fieldset>
          <label htmlFor="accountNumber">Glass Type:</label>
          <input
            onChange={handleFieldChange}
            type="text"
            id="glass"
            required=""
            autoFocus=""
          />
        </fieldset>
        <fieldset>
          <label htmlFor="expirationDate">Instructions:</label>
          <textarea rows="5" cols="50"
            onChange={handleFieldChange}
            type="text"
            id="instructions"
            required=""
            autoFocus=""
          />
        </fieldset>
        <button type="submit">Add</button>
        <button type="button"onClick={() => props.history.push("/cocktails")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CocktailForm;