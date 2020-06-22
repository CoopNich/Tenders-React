import React from "react";
import "./ResultsCard.css"

const HomeProductsCard = (props) => {
    return (
        <div className="product-card">
            <img src={props.cocktail.strDrinkThumb}></img>
            <p>{props.cocktail.strDrink}</p>
        </div>
    );
};

export default HomeProductsCard;