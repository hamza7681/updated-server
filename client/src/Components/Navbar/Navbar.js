import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navbarlogo from "../../Assests/navbarlogo.png";
import "./navbar.css";

const NavbarMain = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, userInfo } = useSelector((state) => state.AuthReducer);

  const Logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const Move = () => {
    navigate("/reg");
  };
  const Go = () => {
    navigate("/login");
  };
  return (
    <>
      <Navbar expand="lg" className="back">
        <Container>
          <Nav>
            <Navbar.Brand href="#home">
              <img src={navbarlogo} alt="" className="w-75" />
            </Navbar.Brand>
          </Nav>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-danger toogle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto  ">
              <Nav.Link>
                <Link
                  className={location.pathname === "/" ? "active" : "link"}
                  to="/"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className={location.pathname === "/about" ? "active" : "link"}
                  to="/about"
                >
                  About
                </Link>
              </Nav.Link>
              {token ? (
                <>
                  <Nav.Link>
                    <Link
                      className={
                        location.pathname === "/chat" ? "active" : "link"
                      }
                      to="/chat"
                    >
                      Chat
                    </Link>
                  </Nav.Link>
                </>
              ) : (
                ""
              )}

              <Nav.Link>
                <Link
                  className={
                    location.pathname === "/findTutor" ? "active" : "link"
                  }
                  to="/findTutor"
                >
                  Find Tutor
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className={
                    location.pathname === "/ourcourse" ? "active" : "link"
                  }
                  to="/ourcourse"
                >
                  Our Courses
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className={
                    location.pathname === "/contact" ? "active" : "link"
                  }
                  to="/contact"
                >
                  Contact us
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              {token ? (
                <>
                  <span> {userInfo.name} </span>
                  <Nav.Link className="login">
                    <button onClick={Logout}> Logout </button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link className="login">
                    <button type="submit" value={"Login"} onClick={Go}>
                      Login
                    </button>
                  </Nav.Link>
                  <Nav.Link className="login">
                    <button type="submit" value={"SignUp"} onClick={Move}>
                      SignUp
                    </button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarMain;
