import React, { useState } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { DropzoneArea } from "material-ui-dropzone";
import "../stepper/main";
import MyTextInput from "./MyTextInput";
import MySelect from "./MySelect";
import MyTextArea from "./MyTextarea";

const vinNumber = (state) => state.vinNumber;

const getVinDataMine = createSelector(
  [vinNumber],
  state => state.getVinData
);

const myOwnVinMine = createSelector(
  [vinNumber],
  state => state.myOwnVin
)

const Career = () => {
  const [files, setFiles] = useState([])

  const getVinData = useSelector(getVinDataMine);
  const myOwnVin = useSelector(myOwnVinMine);

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

  // const formik = useFormik()
  // console.log(formik);

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  const handleChangi = (files) => {
    setFiles(files)
  };

  const postDataHandler = () => {

  };


  console.log(files)
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
                  .max(16, "Must be 15 characters or less")
                  .min(16, "Minimum 4 character")
                  .required("Required"),
                lastName: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                acceptedTerms: Yup.boolean()
                  .required("Required")
                  .oneOf([true], "You must accept the terms and conditions."),
                jobType: Yup.string()
                  .oneOf(
                    ["designer", "development", "product", "other"],
                    "Invalid Job Type"
                  )
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
              validateOnBlur
              validateOnChange
            >
              {(formik) => {
                return (
                  <Form className="needs-validation py-5">
                    <h3 className="h3-responsive pb-2">Vehicle information</h3>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <MyTextInput
                          name="VINN"
                          type="text"
                          className="form-control"
                          placeholder="VIN number"
                          {...formik.getFieldProps("VINN")}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <MyTextInput
                          name="model"
                          type="text"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Model"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <MyTextInput
                          name="trim"
                          type="text"
                          className="form-control"
                          placeholder="Trim"
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
                        />
                      </div>

                      <div className="form-group col-md-6">
                        <MySelect
                          label="Exterior Color (outside of the car)"
                          id="color"
                          name="color"
                          className="form-control"
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
                        </MySelect>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <MySelect
                          label="How many keys do you have for this vehicle?"
                          id="one"
                          name="one"
                          className="form-control"
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
                      name="files"
                      filesLimit={10}
                      showAlerts={false}
                      showFileNames
                      required
                    />
                    <hr />
                    <h3 className="h3-responsive py-2">
                      Additional Information
                    </h3>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <MyTextInput
                          label="Your phone number"
                          type="number"
                          id="phone"
                          name="phone"
                          className="form-control"
                          placeholder="Phone number"
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
                        />
                      </div>
                    </div>
                    <MyTextArea
                      label=" Comment, if you have additional information about a
                      vehicle (optional)"
                      name="message"
                      id="message"
                      rows="5"
                      className="form-control"
                      placeholder="Type your message"
                    />
                    <button
                      // disabled={!enabled}
                      type="submit"
                      className="btn btn-primary btn-md"
                      onClick={postDataHandler}
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
