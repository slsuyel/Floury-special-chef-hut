import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../assets/floury-colored-logo.png";
import { Link } from "react-router-dom";
import TestimonialSection from "./TestimonialSection";
const Footer = () => {
  return (
    <footer className=" text-dark">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <img src={logo} alt="" />
            <p className="mt-3">
              Discover a world of culinary delights on our food website. Indulge
              your taste buds with a wide range of recipes, cooking tips, and
              food-related articles.
            </p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h3> Office Address </h3>
            <p>
              {" "}
              Level-4, 34, Awal Centre, Banani, Dhaka Support:
              web@programming-hero.com Helpline: 01322810873 (Available : Sat -
              Thu, 10:00 AM to 7:00 PM)
            </p>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <h3>Useful Links</h3>
            <ul>
              <li>
                <Link className="fs-5 text-dark text-decoration-none" to="/">
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  className="fs-5 text-dark text-decoration-none"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link className="fs-5 text-dark text-decoration-none" to="/">
                  Cooking Tips
                </Link>
              </li>
              <li>
                <Link className="fs-5 text-dark text-decoration-none" to="/">
                  About Us
                </Link>
              </li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <h3>Join Our Newsletter</h3>
            <p>Stay up to date with our latest recipes and food news.</p>
            <Form>
              <Form.Group controlId="emailForm">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button variant="primary" className="mt-3" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
