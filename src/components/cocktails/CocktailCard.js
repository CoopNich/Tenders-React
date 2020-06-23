import React from "react";
import "./CocktailCard.css"

const CocktailCard = (props) => {
    return (
        <div className="product-card">
            <img src={props.cocktail.image_url}></img>
            <p>{props.cocktail.name}</p>
        </div>
    )
}

export default CocktailCard;