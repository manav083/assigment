import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import company from "../assets/images/companies.svg";
// import { Grid } from "@material-ui/core";
import search from "../assets/images/icon-search.svg";
import "../assets/css/custom.css";
import Content from "./Content";

const Header = () => {
  const [type, setType] = useState("all");
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <>
      <div
        style={{
          position: "fixed",
          padding: "10px 0px 15px 0px",
          top: "8.5%",
          left: "5.3%",
          right: 0,
          bottom: "76%",
          maxWidth: "100%",
          backgroundColor: "#ffffff",
          boxShadow:
            "0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1)",
          zIndex: "99999"
        }}
      >
        <Container>
          <Row>
            <Col>
              <Row>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex">
                    <img src={company} alt="company icon" />
                    <h4 style={{ marginLeft: 10, marginTop: 10 }}>Teams</h4>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      right: "7%",
                      backgroundColor: "#40D2BF",
                      padding: 8,
                      borderRadius: 4,
                    }}
                  >
                    <p
                      style={{
                        color: "#ffffff",
                        margin: 0,
                        paddingBottom: 2,
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      <span>+</span> CREATE NEW TEAM
                    </p>
                  </div>
                </div>
              </Row>
            </Col>
            <Col>
              <Row>
                <div
                  class="d-flex align-items-center justify-content-between"
                  style={{
                    position: "absolute",
                    padding: "20px 0px 15px 0px",
                    top: "53%",
                    left: "4.5%",
                  }}
                >
                  <div class="d-flex">
                    <p
                      className={show ? "buttons" : ""}
                      style={{
                        marginLeft: 20,
                        marginRight: 30,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                      onClick={() => (
                        setType("all"),
                        setShow(true),
                        setShow1(false),
                        setShow2(false)
                      )}
                    >
                      All
                    </p>
                    <p
                      className={show1 ? "buttons" : ""}
                      style={{
                        marginRight: 30,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                      onClick={() => (
                        setType("favourite"),
                        setShow1(true),
                        setShow(false),
                        setShow2(false)
                      )}
                    >
                      Favorites
                    </p>
                    <p
                      className={show2 ? "buttons" : ""}
                      style={{
                        marginRight: 30,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                      onClick={() => (
                        setType("archived"),
                        setShow2(true),
                        setShow(false),
                        setShow1(false)
                      )}
                    >
                      Archived
                    </p>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      right: "7%",
                      marginTop: "-25px",
                    }}
                  >
                    <img
                      src={search}
                      alt="search icon"
                      style={{ marginRight: 10 }}
                    />
                    <span
                      style={{
                        fontFamily: "ProximaNova",
                        fontSize: 16,
                        color: "#999999",
                      }}
                    >
                      Search team name...
                    </span>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Content type={type} />
    </>
  );
};

export default Header;
