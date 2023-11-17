import React from "react";
import { Card } from "react-bootstrap";

export const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { email, message } = e.target.elements;
    let conFom = {
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <Card style={{ width: "40rem", margin: "60px auto", padding: "20px" }}>
      <div className="container mt-5">
        <h2 className="mb-3">CONTACT US</h2>
        <br />
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              <b>Email:</b>
            </label>
            <input className="form-control" 
            type="email" 
            id="email" 
            required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              <b>Message:</b>
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-primary" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </Card>
  );
};
