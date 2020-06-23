const cocktailsUrl = "http://localhost:8000/cocktails";

const CocktailManager = {

    addExternalCocktail(cocktail) {
        return fetch(cocktailsUrl, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("auth-token")}`
            },
            "body": JSON.stringify(cocktail)
        }).then((result) => result.json());
    },
    getCocktailsByUser() {
        return fetch(`${cocktailsUrl}?user`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("auth-token")}`
            }
        })
        .then(response => response.json())
      }

}

export default CocktailManager;