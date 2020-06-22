const ingredientsUrl = "http://localhost:8000/ingredients";

const IngredientManager = {

    addExternalIngredient(ingredient) {
        return fetch(ingredientsUrl, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("auth-token")}`
            },
            "body": JSON.stringify(ingredient)
        })
    }
    
}

export default IngredientManager;