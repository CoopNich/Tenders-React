import React, { useState } from "react"
import useSimpleAuth from "./useSimpleAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { login } = useSimpleAuth()

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = e => {
    e.preventDefault();

    const userCreds = {
      "username": credentials.username,
      "password": credentials.password
    }

    login(userCreds)
      .then(() => props.history.push("/mycocktails"))
  }

  return (
    <form className="content" onSubmit={handleLogin}>
      <h1 className="h3 mb-3 font-weight-normal">Login</h1>
      <fieldset>
        <label htmlFor="username"> Username </label>
        <input onChange={handleFieldChange} type="text"
          id="username"
          placeholder="Username"
          required="" autoFocus="" value={credentials.username}/>
      </fieldset>
      <fieldset>
        <label htmlFor="password"> Password </label>
        <input onChange={handleFieldChange} type="password"
          id="password"
          placeholder="Password"
          required="" autoFocus="" value={credentials.password}/>
      </fieldset>
      <fieldset>
        <button type="submit">
          Login
                    </button>
      </fieldset>
    </form>
  )
}

export default Login; 