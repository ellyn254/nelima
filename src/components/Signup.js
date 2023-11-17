import React, { useState } from "react";
import "./Signup.css";
export const Signup = () => {
  
  //making a state for all input elements.
  //useState hook is used to maintain a state of a,
  //variable which you can update dynamically using setState.
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  //onChange event used to send data to the backend API in react.
  // onChange event call the function handleInputChange,
  //  that will handle state updates of all the input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    
//     let obj = {
//       firstName : firstName,
//       lastName:lastName,
//       email:email,
//       password:password,
//       confirmPassword:confirmPassword,
//   }       
// const newPostKey = push(child(ref(database), 'posts')).key;
// const updates = {};
// updates['/' + newPostKey] = obj
// return update(ref(database), updates);

  };

  return (
    <>
      <div className="form">
        <div className="form-body">
          <h2 className="text-center"><b>Register Here</b></h2><br/>
          <div className="mb-3">
            <label className="form-label" htmlFor="fname">
              <b>FirstName:</b>
            </label>
            <input
              className="form-control"
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => handleInputChange(e)}
              placeholder="First Name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="lname">
              <b>LastName:</b>
            </label>
            <input
              className="form-control"
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => handleInputChange(e)}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              <b>Email:</b>
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              value={email}
              onChange={(e) => handleInputChange(e)}
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              <b>Password:</b>
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
              placeholder="Password"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="confirm-password">
              <b>Confirm Password:</b>
            </label>
            <input
              className="form-control"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => handleInputChange(e)}
              placeholder="Confirm Password"
              required
            />
          </div>
        </div>
        <div class="footer" className="d-grid gap-2">
          <button onClick={() => handleSubmit()} type="submit" class="btn btn-primary">
            Register
          </button>
        </div>
      </div>
    </>
  );
};