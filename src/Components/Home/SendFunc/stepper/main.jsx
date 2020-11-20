import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { DropzoneArea } from "material-ui-dropzone";
import "./main.css";
import MyTextInput from "../FormAfterRegister/MyTextInput";
import MySelect from "../FormAfterRegister/MySelect";
import MyTextArea from "../FormAfterRegister/MyTextarea";
import { addCarServer } from "../../../../Redux/addCar/addCarActions";
import { useHistory } from "react-router-dom";
import {
  getVinDataMine,
  myOwnVinMine,
} from "../../../../Redux/VinNumber/VinNumberSelector";

const Career = () => {
  const getVinData = useSelector(getVinDataMine);
  const myOwnVin = useSelector(myOwnVinMine);
  const [files, setFiles] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const formData = {
    VINN: myOwnVin,
    trim: "",
    model: getVinData[8] && getVinData[8].Value,
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
  };

  const handleChangi = (files) => {
    setFiles(files);
  };

  return (
    <div className="py-5" id="cooloor">
      <MDBContainer className="p-4 text-left bg-white" id="coloor">
        <MDBRow className="my-5">
          <MDBCol>
            <h1 className="h1-responsive pb-2">
              <b>My Appraisal</b>
            </h1>
            <hr />
            <Formik
              initialValues={formData}
              validationSchema={Yup.object({
                VINN: Yup.string()
                  .max(17, "Maximum 17 characters")
                  .min(17, "Minimum 17 character")
                  .required("Required"),
                model: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                trim: Yup.string().required("Required"),
                Fname: Yup.string().required("Required"),
                Lname: Yup.string().required("Required"),
                keys: Yup.string().required("Required"),
                ZIP: Yup.string().required("Required"),
                condition: Yup.string().required("Required"),
                transmission: Yup.string().required("Required"),
                email: Yup.string().required("Required"),
                mileage: Yup.number().required("Required"),
                color: Yup.string()
                  .oneOf(
                    [
                      "Biege",
                      "Black",
                      "Blue",
                      "Brown",
                      "Gray",
                      "Red",
                      "Silver",
                      "White",
                      "Dark Green",
                      "Dark Blue",
                      "Dark Red",
                    ],
                    "Invalid Color Type"
                  )
                  .required("Required"),
              })}
              onSubmit={(values) => {
                console.log(values);
                dispatch(
                  addCarServer(
                    files,
                    values.VINN,
                    values.trim,
                    values.model,
                    values.mileage,
                    values.color,
                    values.keys,
                    values.condition,
                    values.transmission,
                    values.DateToSell,
                    values.offerPrice,
                    values.Fname,
                    values.Lname,
                    values.email,
                    values.phone,
                    values.ZIP,
                    values.message,
                    history
                  )
                );
              }}
              validateOnBlur={true}
            >
              {(formik) => {
                return (
                  <Form
                    className="needs-validation py-5"
                    onSubmit={formik.handleSubmit}
                    noValidate
                  >
                    <h3 className="h3-responsive pb-2">Vehicle information</h3>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <MyTextInput
                          name="VINN"
                          type="text"
                          className="form-control"
                          placeholder="VIN number"
                          {...formik.getFieldProps("VINN")}
                          value={formik.values.VINN}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <MyTextInput
                          name="model"
                          type="text"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Model"
                          {...formik.getFieldProps("model")}
                          value={formik.values.model}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <MyTextInput
                          name="trim"
                          type="text"
                          className="form-control"
                          placeholder="Trim"
                          {...formik.getFieldProps("trim")}
                          value={formik.values.trim}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <MyTextInput
                          label="Exact Mileage"
                          name="mileage"
                          type="number"
                          id="mile"
                          className="form-control"
                          placeholder="Exact Mileage"
                          {...formik.getFieldProps("mileage")}
                          value={formik.values.mileage}
                          onChange={formik.handleChange}
                        />
                      </div>

                      <div className="form-group col-md-6">
                        <MySelect
                          label="Exterior Color (outside of the car)"
                          id="color"
                          name="color"
                          className="form-control"
                          value={formik.values.color}
                          onChange={formik.handleChange}
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
                          <option value="Dark Red">Dark Red</option>
                        </MySelect>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <MySelect
                          label="How many keys do you have for this vehicle?"
                          id="keys"
                          name="keys"
                          className="form-control"
                          value={formik.values.keys}
                          onChange={formik.handleChange}
                        >
                          <option>Non-Selected</option>
                          <option value="One">One</option>
                          <option value="Two or more">Two or More</option>
                        </MySelect>
                      </div>
                      <div className="form-group col-md-3">
                        <MySelect
                          label="Transmission (Auto or Manual)"
                          name="transmission"
                          id="transmission"
                          className="form-control"
                          value={formik.values.transmission}
                          onChange={formik.handleChange}
                        >
                          <option>Non-Selected</option>
                          <option value="Automatic">Automatic</option>
                          <option value="Manual">Manual</option>
                        </MySelect>
                      </div>
                      <div className="form-group col-md-3">
                        <MySelect
                          label="Condition of vehicle"
                          id="condition"
                          name="condition"
                          className="form-control"
                          value={formik.values.condition}
                          onChange={formik.handleChange}
                        >
                          <option>Non-Selected</option>
                          <option value="10">
                            10 - excellent used condition
                          </option>
                          <option value="9">9</option>
                          <option value="8">8</option>
                          <option value="7">7</option>
                          <option value="6">6</option>
                          <option value="5">5</option>
                          <option value="4">4</option>
                          <option value="3">3</option>
                          <option value="2">2</option>
                          <option value="1">1</option>
                        </MySelect>
                      </div>
                    </div>
                    <h5 className="h5-responsive py-2">
                      Upload the photos of your vehicle
                    </h5>
                    <DropzoneArea
                      acceptedFiles={["image/jpeg", "image/png", "image/jpg"]}
                      maxFileSize={5000000}
                      onChange={handleChangi}
                      filesLimit={10}
                      showAlerts={false}
                      showFileNames
                      required
                    />
                    <hr />
                    <h3 className="h3-responsive py-2">Your Information</h3>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <MyTextInput
                          label="Your first name"
                          name="Fname"
                          type="text"
                          id="Fname"
                          className="form-control"
                          placeholder="First name"
                          {...formik.getFieldProps("Fname")}
                          value={formik.values.Fname}
                          onChange={formik.handleChange}
                        />
                      </div>

                      <div className="form-group col-md-6">
                        <MyTextInput
                          label="Your last name"
                          name="Lname"
                          type="text"
                          id="Lname"
                          className="form-control"
                          placeholder="Last name"
                          {...formik.getFieldProps("Lname")}
                          value={formik.values.Lname}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <MyTextInput
                          label="Your e-mail address"
                          name="email"
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email address"
                          {...formik.getFieldProps("email")}
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <MyTextInput
                          label="Your phone number"
                          type="number"
                          id="phone"
                          name="phone"
                          className="form-control"
                          placeholder="Phone number"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <MyTextInput
                          label="Your postal code(ZIP)"
                          name="ZIP"
                          type="number"
                          className="form-control"
                          id="post"
                          placeholder="ZIP code"
                          value={formik.values.ZIP}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <MySelect
                          label="When are you looking to sell your car? (optional)"
                          id="cars"
                          name="DateToSell"
                          className="form-control"
                          value={formik.values.DateToSell}
                          onChange={formik.handleChange}
                        >
                          <option>Non-Selected</option>
                          <option value="sellTiming">Sell timing</option>
                          <option value="volvo">Once I find replacement</option>
                          <option value="saab">Saab 95</option>
                          <option value="mercedes">Mercedes SLK</option>
                          <option value="audi">Audi TT</option>
                        </MySelect>
                      </div>
                      <div className="form-group col-md-6">
                        <MyTextInput
                          label="What is your expected offer price? (optional)"
                          type="number"
                          id="offirprice"
                          name="offerPrice"
                          className="form-control"
                          placeholder="What is your expected offer price? (optional)"
                          value={formik.values.offerPrice}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <MyTextArea
                      label=" Comment, if you have additional information about a vehicle (optional)"
                      name="message"
                      id="message"
                      rows="5"
                      className="form-control"
                      placeholder="Type your message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                    />
                    <button
                      disabled={!formik.isValid}
                      type="submit"
                      className="btn btn-primary btn-md"
                    >
                      SUBMIT
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
export default React.memo(Career);

// {
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
// }
// {
/* <input
                      value={DateToSell}
                      name="email"
                      onChange={this.changeHandler}
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="When are you looking to sell your car? (optional)"
                    /> */
// }
