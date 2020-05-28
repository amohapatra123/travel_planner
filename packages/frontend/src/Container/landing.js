import React, { PureComponent } from "react";
import { Row, Col } from "reactstrap";
import { PaperButton, PaperInput } from "component";
import { Link } from "react-router-dom";
export default class Landing extends PureComponent {
  render() {
    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ff5500"
            fill-opacity="1"
            d="M0,256L48,234.7C96,213,192,171,288,
          154.7C384,139,480,149,576,176C672,203,
          768,245,864,240C960,235,1056,181,1152,
          176C1248,171,1344,213,1392,234.7L1440,
          256L1440,0L1392,0C1344,0,1248,0,1152,
          0C1056,0,960,0,864,0C768,0,672,0,576,
          0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <Row>
          <Col md={{ size: 6 }}>
            <h1 id="name">Compare Karo</h1>
            <h6>Site Under Construction</h6>
          </Col>
          <Col md={{ size: 4 }} id="search">
            <PaperInput input addon disabled placeholder="SEARCH" />
          </Col>
          <Col md={{ size: 2 }} id="search">
            <PaperButton text="SEARCH" disabled color="warning" />
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 6 }}></Col>
          <Col>
            <Link to="/amazon">
              <PaperButton text="AMAZON" color="danger" />
            </Link>
          </Col>
        </Row>
      </>
    );
  }
}
