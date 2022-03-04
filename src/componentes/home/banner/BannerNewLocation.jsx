import React from "react";

export const BannerNewLocation = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="row align-items-center mt-5 w-100 shadow-lg "
        style={{ height: "25rem", backgroundColor: "#0096c7" }}
      >
        <div className="col-6 text-center border-end">
          <h2 className="font-secondary text-white fw-bold fs-1">
            Want special <span className="">discounts</span>? suscribe to our newsletter
          </h2>
        </div>
        <div className="col-6">
          <div>
            <input
              type="mail"
              className="form-control input-newsletter shadow-none border-0 border-bottom bg-transparent text-white"
              placeholder="Insert your mail"
              autoComplete="off"
            />
          </div>
          <div className="d-flex flex-column justify-content-center mt-3">
            <button className="btn btn-outline-light rounded-0 w-100"> Suscribe </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// <div
// className="row mt-4 mb-5 "
//
// >
// <h5 className=" text-center text-white">New shops open</h5>
// <p className=" text-center text-white">
//   Check out our new shops location to you!
// </p>
// <div className="d-flex justify-content-center">
//   <button className="btn btn-outline-light rounded-0 w-75">
//     See our locations
//   </button>
// </div>
// </div>
