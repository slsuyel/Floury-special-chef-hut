import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import GoogleGitHubLogin from "./GoogleGitHubLogin";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
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
              name="password"
              required
              placeholder="Password"
              className="border-0 border-bottom form-control pb-2 rounded-0"
            />
          </Form.Group>
          <div className="d-flex justify-content-between mb-2">
            <Form.Check type="switch" id="custom-switch" label="Remember me" />
            <Link>Forgot password?</Link>
          </div>
          <span className="text-danger">
            <small>{error}</small>
          </span>
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
        <p className="my-2">
          Don’t have an account yet? <Link to={"/register"}>Sign up</Link>{" "}
        </p>
        <GoogleGitHubLogin />
      </div>
    </div>
  );
};

export default Login;
