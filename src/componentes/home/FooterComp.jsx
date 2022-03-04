import React from "react";

export const FooterComp = () => {
  return (
    <div>
      <footer className="ratio-footer mt-4 border-footer">
        <div className="row mt-3">
          <h3 className="text-center navbar-brand">Urban INK.</h3>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <form className="col-8">
            <h5 className="text-center text-footer-news">
              Recieve our newsletter!
            </h5>
            <input
              name="mail"
              type="text"
              className="form-control border-top-0 border-start-0 border-end-0 input-footer shadow-none"
              placeholder="Insert your email"
              autoComplete="off"
            />
            <div className="d-flex justify-content-center mt-2">
              <input
                type="submit"
                value="Suscribe"
                className="btn btn-outline-dark w-75"
              />
            </div>
          </form>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <img
              className="mx-1 img-icons-footer"
              src="https://img.icons8.com/material/2x/facebook-f.png"
              alt="icon"
            />
            <div className="">
              <p className="text-footer">Facebook</p>
            </div>
          </div>
          <div className="d-flex justify-content-center col-4 ">
            <img
              className="mx-1 img-icons-footer"
              src="https://img.icons8.com/material/2x/instagram-new--v1.png"
              alt="icon"
            />
            <p className="text-footer">Instagram</p>
          </div>
          <div className="d-flex justify-content-center col-4 ">
            <img
              className="mx-1 img-icons-footer"
              src="https://img.icons8.com/material/2x/pinterest.png"
              alt="icon"
            />
            <p className="text-footer">Pinterest</p>
          </div>
        </div>
        <div className="row row-terms mt-4 d-flex justify-content-center">
          <div className="col mt-3">
            <p className="text-terms-footer text-center">Terms & conditions</p>
          </div>
          <div className="col mt-3">
            <p className="text-terms-footer text-center">
              Changes & devolutions
            </p>
          </div>
          <div className="col mt-3">
            <p className="text-terms-footer text-center">Work with us</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col ">
            <h6 className="text-dark fs-6">
              © 2022 UrbanInk. All rights reserved.
            </h6>
          </div>
        </div>
      </footer>
    </div>
  );
};
