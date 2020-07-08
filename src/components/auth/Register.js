import React, { useState } from "react"
import useSimpleAuth from "./useSimpleAuth";

const Register = props => {
  const [credentials, setCredentials] = useState({ firstName: "", lastName: "", email: "", username: "", password: ""});
  const { register } = useSimpleAuth()
  const [image, setImage] = useState('')

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const UploadImage = async e => {


    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'tenders')
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/tenders/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
  }

  const handleRegister = e => {
    e.preventDefault();

    const newUser = {
      "first_name": credentials.firstName,
      "last_name": credentials.lastName,
      "email": credentials.email,
      "username": credentials.username,
      "password": credentials.password,
      "image_url": image

    }

    register(newUser)
    .then(() => props.history.push("/mycocktails"))
  }

  return (
    <form className="content" onSubmit={handleRegister}>
      <h1 className="h3 mb-3 font-weight-normal">Register with Tenders!</h1>
      <fieldset>
        <label htmlFor="firstName"> First Name </label>
        <input onChange={handleFieldChange} type="text"
          id="firstName"
          placeholder="First Name"
          required="" autoFocus="" />
      </fieldset>
      <fieldset>
        <label htmlFor="lastName"> Last Name </label>
        <input onChange={handleFieldChange} type="text"
          id="lastName"
          placeholder="Last Name"
          required="" autoFocus="" />
      </fieldset>
      <fieldset>
        <label htmlFor="email"> Email </label>
        <input onChange={handleFieldChange} type="email"
          id="email"
          placeholder="Email Address"
          required="" autoFocus="" />
      </fieldset>
      <fieldset>
        <label htmlFor="username"> Username </label>
        <input onChange={handleFieldChange} type="text"
          id="username"
          placeholder="Username"
          required="" autoFocus="" />
      </fieldset>
      <fieldset>
        <label htmlFor="password"> Password </label>
        <input onChange={handleFieldChange} type="password"
          id="password"
          placeholder="Password"
          required="" autoFocus="" />
      </fieldset>
      <fieldset>
        <input type="file" name="file" placeholder="Upload Image" onChange={UploadImage}/>
        <img className="detail-image" src={image} required></img>
      </fieldset>
      <fieldset>
        <button type="submit">
          Register
                    </button>
      </fieldset>
    </form>
  )
}

export default Register; 