import React from "react";
import { useDispatch, useSelctor } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import AdminPanelHeader from "../../Containers/AdminPanelHeader/AdminPanelHeader";
import MyTextInput from "../Home/SendFunc/FormAfterRegister/MyTextInput";
import { addAdmin } from "../../Redux/adminLogin/adminLoginAction";

const AddAdmin = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const formData = {
    Lname: "",
    email: "",
    password: "",
  };

  return (
    <AdminPanelHeader>
      <h6 style={{ textAlign: "left" }}>Add User</h6>
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          Fname: Yup.string().required("Required"),
          password: Yup.string().required("Required"),
          email: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
          dispatch(
            addAdmin(values.Fname, values.email, values.password, history)
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
              <h3 className="h3-responsive py-2">User Information</h3>
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
                    label="Your password"
                    name="password"
                    type="text"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    {...formik.getFieldProps("password")}
                    value={formik.values.password}
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
    </AdminPanelHeader>
  );
};

export default React.memo(AddAdmin);
