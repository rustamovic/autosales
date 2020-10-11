import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./header.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
// import Brand from "../../Assets/logo-2.png";
class header extends Component {
  state = {
    collapseID: "",
    prevScrollpos: window.pageYOffset,
    visible: true,
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
  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };
  render() {
    const { collapseID } = this.state;
    return (
      <div>
        <div id="home">
          <MDBNavbar
            className={classnames("navbaaar", {
              "navbaar--hidden": !this.state.visible,
            })}
            id="bc"
            dark
            expand="sm"
          >
            <MDBNavbarNav id="ul-navbar" left>
              <div>
                <span>
                  <a
                    href="https://linkedin.com/company/konteks-uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon1" brand icon="linkedin" size="1x" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://twitter.com/konteksuz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon2" brand icon="twitter" size="1x" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://instagram.com/konteksuz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon3" brand icon="instagram" size="1x" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.facebook.com/KonteksLLC/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon4" brand icon="facebook" size="1x" />
                  </a>
                </span>
              </div>
            </MDBNavbarNav>
          </MDBNavbar>
          <MDBNavbar
            id="bc2"
            className={classnames("navbaar", {
              "navbar--hidden": !this.state.visible,
            })}
            dark
            expand="md"
          >
            <MDBNavbarBrand>
              <Link to="/" onClick={this.scrollToTop}>
                <img src="" height="50" alt="Logo" />
              </Link>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              className="colr"
              onClick={this.toggleCollapse("navbarCollapse4")}
            />
            <MDBCollapse id="navbarCollapse4" isOpen={collapseID} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBLink
                    id="colr"
                    onClick={this.closeCollapse("navbarCollapse4")}
                    to="/"
                  >
                    HOME
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink
                    id="colr"
                    onClick={this.closeCollapse("navbarCollapse4")}
                    to="/about"
                  >
                    ABOUT
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink
                    id="colr"
                    onClick={this.closeCollapse("navbarCollapse4")}
                    to="/"
                  >
                    Sell Your Car
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle id="colr" nav caret>
                      CONTACT
                      <div className="d-none d-md-inline"></div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBLink
                        to="/faq"
                        onClick={this.closeCollapse("navbarCollapse4")}
                      >
                        <MDBDropdownItem id="colr">FAQ</MDBDropdownItem>
                      </MDBLink>
                      <MDBLink
                        to="/contacts"
                        onClick={this.closeCollapse("navbarCollapse4")}
                      >
                        <MDBDropdownItem id="colr">Contact Us</MDBDropdownItem>
                      </MDBLink>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink
                    id="colr"
                    onClick={this.closeCollapse("navbarCollapse4")}
                    to="/login"
                  >
                    LOG IN
                  </MDBLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </div>
      </div>
    );
  }
}
export default header;
