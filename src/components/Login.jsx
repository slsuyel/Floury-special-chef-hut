import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
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
        <h4>Sign in to your account</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              required
              placeholder="Enter email"
              className="border-0 border-bottom form-control pb-2 rounded-0"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Password"
              className="border-0 border-bottom form-control pb-2 rounded-0"
            />
          </Form.Group>
          <div className="d-flex justify-content-between mb-2">
            <Form.Check type="switch" id="custom-switch" label="Remember me" />
            <Link>Forgot password?</Link>
          </div>
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
        <p className="my-2">
          {" "}
          Don’t have an account yet? <Link to={"/register"}>Sign up</Link>{" "}
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

export default Login;
