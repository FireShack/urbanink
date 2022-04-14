import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { startRegister } from "../../../actions/auth";

export const RegisterFormComp = () => {

  const dispatch = useDispatch()

  return (
    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
      <Formik
        initialValues={{
          mail: "",
          name: "",
          password: "",
        }}
        validate={(values) => {
          let errors = {};
          if (!values.mail || !values.name || !values.password) {
            errors.emptyFields = "There are empty fields";
          }
          if (!/^(?=.*[0-9])(?=.*[aA-zZ])[a-zA-Z0-9*]{6,16}$/.test(values.password)) {
            errors.shortPassword =
              "Your password must have 8 characters, one number and one letter";
          }
          if (!/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(values.mail)) {
            errors.wrongMail =
              "Your email is wrong";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(startRegister(values.mail, values.name, values.password))
        }}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <form
            className="row justify-content-center mt-4"
            onSubmit={handleSubmit}
          >
            <div className="col-12 d-none d-md-block">
              <h1 className="text-center fw-bold font-tertiary fs-1">
                Sign up
              </h1>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="row">
                <div className="col-12 mt-3">
                  <input
                    type="mail"
                    name="mail"
                    id="mail"
                    className="form-control input-login border-0 rounded-0 border-bottom shadow-none p-2"
                    placeholder="Insert an email"
                    value={values.mail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control input-login border-0 rounded-0 border-bottom shadow-none p-2"
                    placeholder="Insert a name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control input-login border-0 rounded-0 border-bottom shadow-none p-2"
                    placeholder="Insert a password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-4 d-flex justify-content-center">
              <input
                type="submit"
                className="w-75 btn btn-outline-dark p-2 rounded-0"
                value="Sign up in Urban Ink"
              />
              <Link to="/auth/login" className="text-center fs-6 nav-link">
                Or sign in
              </Link>
            </div>
            <div className="row">
              <div className="col">
                {(touched.mail && errors.emptyFields) ||
                errors.shortPassword || errors.wrongMail ? (
                  <Alert className="text-center" variant="danger">
                    {errors.emptyFields || errors.shortPassword || errors.wrongMail}
                  </Alert>
                ) : (
                  ""
                )}
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
