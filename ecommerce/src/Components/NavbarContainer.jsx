import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../Utilities/logo.png";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  signOut,
  getRedirectResult,
  GoogleAuthProvider,
} from "firebase/auth";

function NavbarContainer() {
  const navigate = useNavigate();
  const cartBtnClick = () => {
    navigate(`/products/cart`);
  };
  const login_btn = () => {
    navigate(`/login`);
  };
  const logo_btn = () => {
    navigate(`/`);
  };
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        onClick={logo_btn}
        style={{ cursor: "pointer" }}
      />

      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      <Col xs="auto">
        <Button type="submit" onClick={cartBtnClick}>
          Cart
        </Button>
      </Col>
      <Col xs="auto">
        <Button type="submit" onClick={login_btn}>
          {" "}
          Login
        </Button>
      </Col>
      <Col xs="auto">
        <Button type="submit">Sign Out</Button>
      </Col>
    </Navbar>
  );
}

export default NavbarContainer;
