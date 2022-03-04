import React from "react";

export const WomenSectionComp = () => {
  return (
    <>
      <div className="mt-5">
        <div className="row">
          <div className="col-sm-6 mt-2 col-md-12">
            <div className="img-overlay img-overlay-women-section rounded">
              <div className="d-flex flex-column text-container justify-content-center align-items-center">
                <h1 className="w-75 text-center text-overlay border border-light">
                  Women's clothes
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">{/* Card section */}</div>
    </>
  );
};
