import React, { Component } from "react";
import logo from "../../Assets/SVG/logo.svg";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBTooltip,
  MDBIcon,
} from "mdbreact";
import "./header.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

// import Brand from "../../Assets/logo-2.png";

class header extends Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  closeCollapse = (collID) => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: "" });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { collapseID } = this.state;
    return (
      <div>
        <div className="flyout">
          <MDBNavbar id="navcol" dark expand="md" fixed="top" scrolling>
            <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
              <h2 style={{ height: "2.5rem", width: "2.5rem" }}>
                <img src={logo} alt="qwerty" height="10" />
              </h2>
              {/* <strong className="align-middle"></strong> */}
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
            <MDBCollapse
              className="text-left"
              id="mainNavbarCollapse"
              isOpen={collapseID}
              navbar
            >
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong>Home</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/about"
                  >
                    <strong>About</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/sell"
                  >
                    <strong>Sell your car</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/faq"
                  >
                    <strong>FAQ</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/contact"
                  >
                    <strong>Contact</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/login"
                  >
                    <strong>Login</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <div id="ul-navbar">
                  <MDBNavItem>
                    <MDBTooltip
                      placement="bottom"
                      domElement
                      style={{ display: "block" }}
                    >
                      <a
                        className="nav-link Ripple-parent"
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>
                          <MDBIcon fab icon="twitter" />
                        </strong>
                      </a>
                      <span>TWITTER</span>
                    </MDBTooltip>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBTooltip
                      placement="bottom"
                      domElement
                      style={{ display: "block" }}
                    >
                      <a
                        className="nav-link Ripple-parent"
                        href="https://facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>
                          <MDBIcon fab icon="facebook" />
                        </strong>
                      </a>
                      <span>FACEBOOK</span>
                    </MDBTooltip>
                  </MDBNavItem>
                  <MDBNavItem className="mr-2">
                    <MDBTooltip
                      placement="bottom"
                      domElement
                      style={{ display: "block" }}
                    >
                      <a
                        className="nav-link Ripple-parent"
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>
                          <MDBIcon fab icon="instagram" />
                        </strong>
                      </a>
                      <span>INSTAGRAM</span>
                    </MDBTooltip>
                  </MDBNavItem>
                </div>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}
        </div>
      </div>
    );
  }
}
export default header;
