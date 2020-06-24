import React from "react";
import "./CocktailCard.css"

const CocktailCard = (props) => {
    return (
        <div className="product-card">
            <img src={props.cocktail.image_url} onClick={() => { props.history.push(`/mycocktails/${props.cocktail.id}`)}}></img>
            <p>{props.cocktail.name}</p>
            <button onClick={() => props.deleteCocktail(props.cocktail.id)}>Delete</button>
        </div>
    )
}

export default CocktailCard;