import React from "react";

const CocktailCard = (props) => {
    return (
        <div className="product-card">
            <img className="card-image" src={props.cocktail.image_url} onClick={() => { props.history.push(`/mycocktails/${props.cocktail.id}`)}}></img>
            <div className="card-name">{props.cocktail.name}</div>
            <button onClick={() => props.deleteCocktail(props.cocktail.id)}>Delete</button>
        </div>
    )
}

export default CocktailCard;