import React, { useState, useEffect } from "react";
import CocktailManager from '../../modules/CocktailManager';
import CocktailCard from './CocktailCard'

const CocktailList = (props) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const generateResults = () => {
        setIsLoading(true)
        CocktailManager.getCocktailsByUser()
            .then(cocktailresults => {
                setResults(cocktailresults);
                setIsLoading(false);
            });
    };

    const deleteCocktail = (cocktailId) => {
        if (window.confirm("Are you sure you want to delete this?")) {
            CocktailManager.deleteCocktail(cocktailId)
                .then(generateResults)
        }
    }

    useEffect(() => {
        generateResults();
    }, []);

    return (
        <div className="content">
            <div>
                {results.map(cocktail =>
                    <CocktailCard
                        key={cocktail.id}
                        cocktail={cocktail}
                        deleteCocktail={deleteCocktail}

                        {...props}
                    />)}
            </div>
        </div>

    )
}

export default CocktailList;