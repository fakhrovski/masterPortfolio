import React, { Component } from "react";
import "./CredlyCard.css";
import { Fade } from "react-reveal";

class CredlyCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={1000} distance="20px">
        <div
          data-iframe-width="250"
          data-iframe-height="250"
          data-share-badge-id={certificate.credly_id}
          data-share-badge-host="https://www.credly.com"
        ></div>
      </Fade>
    );
  }
}

export default CredlyCard;
