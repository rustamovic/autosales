import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import axios from "axios";
import { DropzoneArea } from "material-ui-dropzone";
class Career extends Component {
  state = {
    VINN: "",
    trim: "",
    model: "",
    mileage: "",
    color: "",
    Fname: "",
    Lname: "",
    email: "",
    phone: "",
    ZIP: "",
    DateToSell: "",
    offerPrice: "",
    message: "",
    keys: "",
    condition: "",
    transmission: "",
    files: [],
  };
  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  };
  changeHandler = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };
  handleChange = (event) => {
    this.setState({ DateToSell: event.target.value });
  };
  handleChangeKeys = (event) => {
    this.setState({ keys: event.target.value });
  };
  handleChangeCondition = (event) => {
    this.setState({ condition: event.target.value });
  };
  handleChangeColorn = (event) => {
    this.setState({ color: event.target.value });
  };
  handleChangeAuto = (event) => {
    this.setState({ transmission: event.target.value });
  };
  handleChangi(files) {
    this.setState({
      files: files,
    });
  }
  postDataHandler = () => {
    const data = {
      VIN: this.state.VINN,
      CarTrim: this.state.trim,
      carModel: this.state.model,
      carMileage: this.state.mileage,
      carColor: this.state.color,
      key: this.state.keys,
      VehicleCondition: this.state.condition,
      transmision: this.state.transmission,
      FirstName: this.state.Fname,
      LastName: this.state.Lname,
      emailAddress: this.state.email,
      phoneNumber: this.state.phone,
      postCode: this.state.ZIP,
      SellDate: this.state.DateToSell,
      expectedPrice: this.state.offerPrice,
      Photos: this.state.files,
      // messagee: this.state.message,
    };
    axios
      .post(
        "https://trustauto.herokuapp.com/api/sell",
        data
        // headers: { "Content-Type": "application/json; charset=utf-8" },
      )
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log("error");
      });
  };

  render() {
    console.log(this.state.files);
    const {
      trim,
      model,
      mileage,
      color,
      Fname,
      Lname,
      email,
      phone,
      ZIP,
      DateToSell,
      offerPrice,
      message,
      keys,
      condition,
      transmission,
      VINN,
    } = this.state;
    const enabled =
      email.length > 0 &&
      mileage.length > 0 &&
      color.length > 0 &&
      Fname.length > 0 &&
      Lname.length > 0 &&
      phone.length > 6 &&
      ZIP.length > 4 &&
      transmission.length > 0 &&
      condition.length > 0 &&
      keys.length > 0 &&
      color.length > 0;
    return (
      <div className="bg-primary py-5 ">
        <MDBContainer className="p-4 text-left text-primary bg-white">
          <MDBRow className="my-5">
            <MDBCol>
              <h1 className="h1-responsive pb-2">
                <b>My Appraisal</b>
              </h1>
              <hr />
              <form
                className="needs-validation py-5"
                onSubmit={this.submitHandler}
                noValidate
              >
                <h3 className="h3-responsive pb-2">Vehicle information</h3>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      value={VINN}
                      name="VINN"
                      onChange={this.changeHandler}
                      type="text"
                      className="form-control"
                      placeholder="VIN number"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      value={model}
                      name="model"
                      onChange={this.changeHandler}
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Model"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      value={trim}
                      name="trim"
                      onChange={this.changeHandler}
                      type="text"
                      className="form-control"
                      placeholder="Trim"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="mile">Exact Mileage</label>
                    <input
                      value={mileage}
                      name="mileage"
                      onChange={this.changeHandler}
                      type="number"
                      id="mile"
                      className="form-control"
                      placeholder="Exact Mileage"
                      required
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label for="color">
                      Exterior Color (outside of the car)
                    </label>
                    <select
                      id="color"
                      name="color"
                      className="form-control"
                      value={color}
                      onChange={this.handleChangeColorn}
                      required
                    >
                      <option>Non-Selected</option>
                      <option value="Biege">Biege</option>
                      <option value="Black">Black</option>
                      <option value="Blue">Blue</option>
                      <option value="Brown">Brown</option>
                      <option value="Gray">Gray</option>
                      <option value="Red">Red</option>
                      <option value="Silver">Silver</option>
                      <option value="White">White</option>
                      <option value="Dark Green">Dark Green</option>
                      <option value="Dark Blue">Dark Blue</option>
                      <option value="Dark red">Dark Red</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="cars">
                      How many keys do you have for this vehicle?
                    </label>
                    <select
                      id="one"
                      name="one"
                      className="form-control"
                      value={keys}
                      onChange={this.handleChangeKeys}
                      required
                    >
                      <option>Non-Selected</option>
                      <option value="One">One</option>
                      <option value="Two or more">Two or More</option>
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label for="cars">Transmission (Auto or Manual)</label>
                    <select
                      id="one"
                      name="one"
                      className="form-control"
                      value={transmission}
                      onChange={this.handleChangeAuto}
                      required
                    >
                      <option>Non-Selected</option>
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label for="cars">Condition of vehicle</label>
                    <select
                      id="one"
                      name="one"
                      className="form-control"
                      value={condition}
                      onChange={this.handleChangeCondition}
                      required
                    >
                      <option>Non-Selected</option>
                      <option value="10">10 - excellent used condition</option>
                      <option value="9">9</option>
                      <option value="8">8</option>
                      <option value="7">7</option>
                      <option value="6">6</option>
                      <option value="5">5</option>
                      <option value="4">4</option>
                      <option value="3">3</option>
                      <option value="2">2</option>
                      <option value="1">1</option>
                    </select>
                  </div>
                </div>
                <h5 className="h5-responsive py-2">
                  Upload the photos of your vehicle
                </h5>
                <DropzoneArea
                  acceptedFiles={["image/jpeg", "image/png", "image/jpg"]}
                  maxFileSize={5000000}
                  onChange={this.handleChangi.bind(this)}
                  filesLimit={10}
                  showAlerts={false}
                  showFileNames
                  required
                />
                <hr />
                <h3 className="h3-responsive py-2">Your Information</h3>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="namee">Your first name</label>
                    <input
                      value={Fname}
                      name="Fname"
                      onChange={this.changeHandler}
                      type="text"
                      id="namee"
                      className="form-control"
                      placeholder="First name"
                      required
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label for="lnamee">Your last name</label>
                    <input
                      value={Lname}
                      name="Lname"
                      onChange={this.changeHandler}
                      type="text"
                      id="lnamee"
                      className="form-control"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label for="eemail">Your e-mail address</label>
                    <input
                      value={email}
                      name="email"
                      onChange={this.changeHandler}
                      type="email"
                      className="form-control"
                      id="eemail"
                      placeholder="Email address"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="phone">Your phone number</label>
                    <input
                      value={phone}
                      name="phone"
                      onChange={this.changeHandler}
                      type="number"
                      id="phone"
                      className="form-control"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="post">Your postal code(ZIP)</label>
                    <input
                      value={ZIP}
                      name="ZIP"
                      onChange={this.changeHandler}
                      type="number"
                      className="form-control"
                      id="post"
                      placeholder="ZIP code"
                      required
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label for="cars">
                      When are you looking to sell your car? (optional)
                    </label>
                    <select
                      id="cars"
                      name="DateToSell"
                      className="form-control"
                      value={DateToSell}
                      onChange={this.handleChange}
                    >
                      <option>Non-Selected</option>
                      <option value="sellTiming">Sell timing</option>
                      <option value="volvo">Once I find replacement</option>
                      <option value="saab">Saab 95</option>
                      <option value="mercedes">Mercedes SLK</option>
                      <option value="audi">Audi TT</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="offirprice">
                      When are you looking to sell your car? (optional)
                    </label>
                    <input
                      value={offerPrice}
                      name="offerPrice"
                      onChange={this.changeHandler}
                      type="number"
                      id="offirprice"
                      className="form-control"
                      placeholder="What is your expected offer price? (optional)"
                    />
                  </div>
                </div>
                <label for="exampleFormControlTextarea1">
                  Comment, if you have additional information about a vehicle
                  (optioanl)
                </label>
                <textarea
                  value={message}
                  name="message"
                  onChange={this.changeHandler}
                  rows="5"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Type your message"
                />
                <button
                  disabled={!enabled}
                  type="submit"
                  className="btn btn-primary btn-md"
                  onClick={this.postDataHandler}
                >
                  SUBMIT
                </button>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default Career;
{
  /* <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      value={cvURL}
                      name="cvURL"
                      onChange={this.changeHandler}
                      type="text"
                      className="form-control"
                      id="inputCity"
                      placeholder="Enter portfolio URL"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="validatedCustomFile"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="validatedCustomFile"
                    >
                      Upload CV/Portfolio
                    </label>
                  </div>
                </div> */
}
{
  /* <input
                      value={DateToSell}
                      name="email"
                      onChange={this.changeHandler}
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="When are you looking to sell your car? (optional)"
                    /> */
}
