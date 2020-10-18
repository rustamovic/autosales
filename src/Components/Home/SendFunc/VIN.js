import React, { Component } from "react";
import { MDBContainer, MDBCol } from "mdbreact";
import axios from "axios";
import { Link } from "react-router-dom";
import { ReactComponent as SubmitButtonIcon } from "feather-icons/dist/icons/log-in.svg";
import styled from "styled-components";
import tw from "twin.macro";
import Alert from "./Alert";
class Agent extends Component {
  state = {
    VIN: "",
    loading: "",
  };
  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  };
  changeHandler = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };
  postDataHandler = () => {
    // const data = {
    //   VINN: this.state.VIN,
    // };
    axios
      .get(
        "https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/" +
          this.state.VIN +
          "?format=json"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log("error");
      });
  };
  render() {
    const SubmitButton = styled.button`
      ${tw` tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
      .icon {
        ${tw`w-6 h-6 -ml-2`}
      }
      .text {
        ${tw`ml-3`}
      }
    `;
    const { VIN } = this.state;
    return (
      <MDBContainer fluid id="rty">
        <MDBCol className="py-3 border shadow bg-white">
          <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <p className="h5 text-center mb-4">
              Enter Your Automobile`s VIN number
            </p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Vehicle Identification Number.
            </label>
            <input
              value={VIN}
              name="VIN"
              type="text"
              id="defaultFormLoginEmailEx"
              className="form-control"
              onChange={this.changeHandler}
              maxLength="17"
              required
            />
            <Alert />
            <br />
            <div className="text-center">
              {/* <button
                className="btn btn-indigo"
                
                type="submit"
              >
                Login
              </button> */}
              <SubmitButton type="submit" onClick={this.postDataHandler}>
                <SubmitButtonIcon className="icon" />
                <span className="text">What is my car worth</span>
              </SubmitButton>
            </div>
          </form>
        </MDBCol>
      </MDBContainer>
    );
  }
}
export default Agent;
