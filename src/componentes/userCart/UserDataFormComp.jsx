import React, { useState } from "react";
import { Formik } from "formik";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fillUserData } from "../../actions/cart";

export const UserDataFormComp = () => {
  const disptach = useDispatch();
  const { userData } = useSelector((state) => state.cart);
  const [formSended, setFormSended] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          name: userData.name,
          mail: userData.mail,
          prefix: "+1",
          phone: userData.phone,
          country: "United States",
          city: userData.city,
          zip: userData.zip,
          street: userData.street,
          house_number: userData.house_number,
          notes: userData.notes,
        }}
        validate={(values) => {
          let errors = {};
          if (
            !values.name ||
            !values.mail ||
            !values.prefix ||
            !values.phone ||
            !values.city ||
            !values.zip ||
            !values.street ||
            !values.house_number
          ) {
            errors.empty = "All fields must be completed";
          }
          if (
            !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
              values.mail
            )
          ) {
            errors.invalidEmail = "Please, check your email";
          }
          if (
            !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(values.phone)
          ) {
            errors.phone = "Please, check your phone number";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
          setFormSended(true);
          disptach(
            fillUserData(
              values.name,
              values.mail,
              values.prefix,
              values.phone,
              values.country,
              values.city,
              values.zip,
              values.street,
              values.house_number,
              values.notes
            )
          );
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
          <form onSubmit={handleSubmit}>
            <div className="row mt-4">
              <div className="col-12">
                <div className="border p-2 rounded text-center">
                  <div>
                    <h6>Contact information</h6>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control rounded-0"
                      placeholder="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={formSended}
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="form-floating mt-2">
                    <input
                      type="email"
                      id="mail"
                      name="mail"
                      className="form-control rounded-0"
                      placeholder="Email"
                      value={values.mail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={formSended}
                    />
                    <label htmlFor="Email">Email</label>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="form-floating mt-2">
                        <input
                          type="text"
                          id="Prefix"
                          name="prefix"
                          className="form-control rounded-0"
                          placeholder="Prefix"
                          value={values.prefix}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled
                        />
                        <label htmlFor="Prefix">Prefix</label>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="form-floating mt-2">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          className="form-control rounded-0"
                          placeholder="Phone"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={formSended}
                        />
                        <label htmlFor="Phone">Phone</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="border rounded p-2 mt-4 text-center">
                  <div className="">
                    <h6>Insert your complete adress</h6>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      id="country"
                      name="country"
                      className="form-control rounded-0"
                      placeholder="Country"
                      disabled
                    />
                    <label htmlFor="country" disabled={formSended}>
                      United States
                    </label>
                  </div>
                  <div className="form-floating mt-2">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="form-control rounded-0"
                      placeholder="City"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={formSended}
                    />
                    <label htmlFor="city">City</label>
                  </div>
                  <div className="form-floating mt-2">
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      className="form-control rounded-0"
                      placeholder="ZIP"
                      value={values.zip}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={formSended}
                    />
                    <label htmlFor="zip">ZIP/Postal code</label>
                  </div>
                  <div className="d-flex mt-2">
                    <div className="form-floating col-6">
                      <input
                        type="text"
                        id="street"
                        name="street"
                        className="form-control rounded-0"
                        placeholder="street"
                        value={values.street}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={formSended}
                      />
                      <label htmlFor="street">Street</label>
                    </div>
                    <div className="form-floating col-6">
                      <input
                        type="text"
                        id="house_number"
                        name="house_number"
                        className="form-control rounded-0"
                        placeholder="House number"
                        value={values.house_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={formSended}
                      />
                      <label htmlFor="house_number">House number</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="border rounded p-2 mt-4 text-center">
                  <div className="mb-2 mt-2">
                    <h6>Want to specify something to us?</h6>
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="notes"
                      name="notes"
                      style={{ height: "10rem" }}
                      value={values.notes}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={formSended}
                    ></textarea>
                    <label htmlFor="notes">Your instructions here...</label>
                  </div>
                </div>
              </div>
            </div>
            {errors.empty && (
              <Alert variant="danger" className="mt-3 text-center">
                {errors.empty}
              </Alert>
            )}
            {touched.mail && errors.invalidEmail && (
              <Alert variant="danger" className="mt-3 text-center">
                {errors.invalidEmail}
              </Alert>
            )}
            {touched.phone && errors.phone && (
              <Alert variant="danger" className="mt-3 text-center">
                {errors.phone}
              </Alert>
            )}
            <div className="row mt-3 mb-3">
              <div className="col-6">
                <button
                  className="btn btn-dark rounded-0 w-100"
                  onClick={() => setFormSended(false)}
                  disabled={formSended ? false : true}
                >
                  Change
                </button>
              </div>
              <div className="col-6">
                <button
                  type="submit"
                  className="btn btn-dark rounded-0 w-100"
                  disabled={formSended}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};
