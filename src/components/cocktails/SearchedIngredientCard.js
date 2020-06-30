import React, { useState } from "react";

const SearchedIngredientCard = (props) => {



    return (

             <div className="ingredient-card">
                <div >{props.ingredient.measurement} - {props.ingredient.ingredient}
                </div>
            </div>


    )
}

export default SearchedIngredientCard;