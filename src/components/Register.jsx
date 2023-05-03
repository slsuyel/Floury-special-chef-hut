import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProviders";
import "./custom.css";
import GoogleGitHubLogin from "./GoogleGitHubLogin";
import { useNavigate } from "react-router-dom/dist";

const Register = () => {
  const { register, googleLogin, githubLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  // console.log(register);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const photoUrl = form.photoUrl.value;
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
    register(email, password, photoUrl, name)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //  console.log(errorMessage);
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

          <Form.Group className="mb-3" controlId="formBasicPhoto">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter photo URL"
              name="photoUrl"
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
          <span className="text-danger">
            <small>{error}</small>
          </span>
          <Button variant="primary" type="submit" className="w-100">
            Sign up
          </Button>
        </Form>
        <p className="my-2">
          Already have an account?<Link to={"/login"}> Sign in here? </Link>
        </p>

        <GoogleGitHubLogin />
      </div>
    </div>
  );
};

export default Register;
