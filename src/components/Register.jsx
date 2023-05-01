import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      Swal.fire({
        icon: "error",
        text: "must be 6 characters, at least one letter and one number",
    
      });
      return;
    }
    console.log(name, email, password);
  };

  return (
    <div className="row w-100">
      <div className="col-md-6">
        <img
          src="https://rurutek.com/jio/assets/img/login-animate.gif"
          alt=""
          draggable="false"
          className="img-fluid"
        />
      </div>
      <div className="col-md-6 mt-5">
        <h4>Sign up to your account</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Name"
              name="name"
              required
              className="border-0 border-bottom form-control pb-2 rounded-0"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              placeholder="Enter email"
              className="border-0 border-bottom form-control pb-2 rounded-0"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
              className="border-0 border-bottom form-control pb-2 rounded-0"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Sign up
          </Button>
        </Form>
        <p className="my-2">
          Already have an account?<Link to={"/login"}> Sign in here? </Link>
        </p>

        <Button
          variant=""
          type="submit"
          className="border btn btn-outline-success py-2 rounded-5 w-100"
        >
          Continue With Google
        </Button>
      </div>
    </div>
  );
};

export default Register;
