import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Header from "./Header";

import { Container, Col } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <div>
        <Container>
          <Col md={1}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <Navbar />
            <Header />
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Main;
