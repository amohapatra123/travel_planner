import React, { PureComponent } from "react";
import { Row, Col } from "reactstrap";
export default class Amazon extends PureComponent {
  componentDidMount() {
    this.mount();
  }

  mount() {
    const div = document.createElement("div");
    div.id = "amazon-search";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `//z-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&Marketplace=IN`;
    const s = document.createElement("script");
    s.type = "text/javascript";
    const code = `amzn_assoc_ad_type ="responsive_search_widget";
     amzn_assoc_tracking_id ="anshuman086-21";
     amzn_assoc_marketplace ="amazon";
     amzn_assoc_region ="IN";
     amzn_assoc_placement ="";
     amzn_assoc_search_type = "search_widget";
     amzn_assoc_width ="auto"; amzn_assoc_height ="auto";
     amzn_assoc_default_search_category ="";
     amzn_assoc_default_search_key ="";
     amzn_assoc_theme ="light";
     amzn_assoc_bg_color ="FFFFFF";`;
    s.appendChild(document.createTextNode(code));
    const dom = document.getElementById("amazon-search-container");
    if (dom) {
      dom.appendChild(s);
      dom.appendChild(script);
    }
  }
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
          <Col>
            <h1 id="name">Amazon</h1>
          </Col>
        </Row>
        <div id="amazon-search-container">&nbsp;</div>
        <div id="amazon-search">&nbsp;</div>
      </>
    );
  }
}
