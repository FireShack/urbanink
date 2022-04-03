import { Formik } from "formik";
import React from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginMailPassword, startLogin } from "../../../actions/auth";
import { FcGoogle } from "react-icons/fc";

export const LoginFormComp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { msg } = useSelector((state) => state.ui);
  const handleGoogleLogin = () => {
    console.log("Starting login");
    dispatch(startLogin());
  };

  return (
    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
      <Formik
        initialValues={{
          mail: "",
          password: "",
        }}
        validate={(values) => {
          let errors = {};
          if (!values.mail || !values.password) {
            errors.emptyFields = "There are empty fields";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(loginMailPassword(values.mail, values.password));
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
        }) => (
          <form
            className="row justify-content-center mt-4"
            onSubmit={handleSubmit}
          >
            <div className="col-12 d-none d-md-block">
              <h1 className="text-center fw-bold font-tertiary fs-1">
                Sign in
              </h1>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-12">
                <input
                  type="mail"
                  name="mail"
                  id="mail"
                  className="form-control input-login border-0 rounded-0 border-bottom shadow-none p-2"
                  placeholder="Insert your mail"
                  value={values.mail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="col-12 mt-3">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control input-login border-0 rounded-0 border-bottom shadow-none p-2"
                  placeholder="Insert your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-center nav-link">Forgot my password</p>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <input
                type="submit"
                className="w-75 btn btn-outline-dark p-2 rounded-0"
                value="Sign in Urban Ink"
              />
            </div>
            <div className="row mt-2">
              <div className="col d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline-primary rounded-0 shadow-none"
                  onClick={handleGoogleLogin}
                >
                  Sign in with Google <FcGoogle />
                </button>
              </div>
            </div>
            <Link to="/auth/register" className="text-center fs-6 nav-link">
              Or sign up
            </Link>
            <div className="row">
              <div className="col">
                {touched.mail && errors.emptyFields ? (
                  <Alert className="text-center" variant="danger">
                    {errors.emptyFields}
                  </Alert>
                ) : (
                  ""
                )}
                {msg !== null ? (
                  <Alert className="text-center" variant="danger">
                    {msg}
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
