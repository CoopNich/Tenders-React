const SearchManager = {
    
    getCocktails(input) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
        .then(resp => resp.json())
    },
    getSingleCocktail(input) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${input}`)
        .then(resp => resp.json())
    }   
}

export default SearchManager;