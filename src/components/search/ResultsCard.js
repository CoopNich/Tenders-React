import React from "react";

const ResultsCard = (props) => {
    return (
        <div className="product-card">
            <img className="card-image" src={props.cocktail.strDrinkThumb} onClick={() => { props.history.push(`/cocktails/${props.cocktail.idDrink}`)}}></img>
            <p>{props.cocktail.strDrink}</p>
        </div>
    );
};

export default ResultsCard;