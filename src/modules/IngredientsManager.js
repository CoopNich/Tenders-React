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
    },
    getIngredientByCocktailId(id) {
        return fetch(`${ingredientsUrl}?cocktail_id=${id}`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("auth-token")}`
            }
        }).then(response => response.json())
    },
    updateIngredient(editedInfo) {
        return fetch(`${ingredientsUrl}/${editedInfo.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${sessionStorage.getItem("auth-token")}`,
            },
            body: JSON.stringify({
                ingredient: editedInfo.ingredient,
                measurement: editedInfo.measurement
            }),
        });
    }

}

export default IngredientManager;