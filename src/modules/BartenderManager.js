const bartendersUrl = "http://localhost:8000/bartenders";

const BartenderManager = {

    getLoggedInUser() {
        return fetch(`${bartendersUrl}/${sessionStorage.getItem("bartender")}`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("auth-token")}`
            }
        }).then(response => response.json())
      },

}

export default BartenderManager;