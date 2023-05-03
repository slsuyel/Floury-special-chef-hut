import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/floury-colored-logo.png";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import profile from "../assets/profile.png";
import "./custom.css";

function Header() {
  const { user, photo, logOut, name } = useContext(AuthContext);
  // console.log(user);
  const logoutBtn = () => {
    logOut();
  };
  return (
    <Navbar bg="light" className="container " expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="navbar-brand w-50">
          <img
            src={logo}
            alt=""
            width={"170px"}
            className="img-fluid rounded-1"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className=" fw-bold">
            <NavLink className="fs-5 mx-2 text-decoration-none" to="/">
              Home
            </NavLink>

            <NavLink className="fs-5 mx-2 text-decoration-none" to="/blog">
              Blog
            </NavLink>
            
            {user ? (
              <>
                <span className="mt-1 mx-2" style={{ whiteSpace: "nowrap" }}>
                  {name}
                </span>
                <img
                  className="me-2 profile-dp rounded-circle"
                  src={photo && photo}
                  alt=""
                />
                <p
                  onClick={logoutBtn}
                  className="btn btn-info fw-semibold mb-0 mx-1"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Log Out
                </p>
              </>
            ) : (
              <NavLink className="fs-5 mx-2 text-decoration-none" to="/login">
                Login
              </NavLink>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
