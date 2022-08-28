import React from "react";
import Menu from "../assets/images/menu notification.svg";
import john from "../assets/images/john.svg";
import { Container, Row } from "react-bootstrap";
import "../assets/css/custom.css";

const Navbar = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: "5.3%",
        backgroundColor: "#ffffff",
        right: 0,
        maxWidth: "100%",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container>
        <Row>
          <div className="navbar1">
            <div className="internalContent">
              <p style={{ padding: 10, color: "#1A1919", opacity: "0.5", marginTop: 13 }}>
                NARWHAL
              </p>
              <div className="partition"></div>
              <p style={{ padding: 10, marginTop: 13 }}>Teams</p>
            </div>
            <div
              className="internalContent"
              style={{ marginRight: 30, position: "absolute", right: "0" }}
            >
              <img src={Menu} alt="notification" style={{ marginRight: 20 }} />
              <p style={{ marginTop: 15 }}>Hello, John</p>
              <img src={john} alt="profile" style={{ marginLeft: 20 }} />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
