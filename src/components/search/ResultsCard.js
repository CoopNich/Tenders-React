import React from "react";
import "./ResultsCard.css"

const ResultsCard = (props) => {
    return (
        <div className="product-card">
            <img src={props.cocktail.strDrinkThumb} onClick={() => { props.history.push(`/cocktails/${props.cocktail.idDrink}`)}}></img>
            <p>{props.cocktail.strDrink}</p>
        </div>
    );
};

export default ResultsCard;