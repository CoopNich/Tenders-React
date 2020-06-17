const authApiUrl = "http://localhost:8000"

const AuthManager = {
  registerUser(newUser) {
    return fetch(`${authApiUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(response => response.json())
  },
  loginUser(userCreds) {
    return fetch(`${authApiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userCreds)
    })
      .then(response => response.json())
  }
} 

export default AuthManager