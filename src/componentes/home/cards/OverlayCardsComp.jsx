import React from "react";

export const OverlayCardsComp = () => {
  return (
    <div>
      <div className="mt-3">
        <div className="row">
          <div className="col-sm-12 mt-2 col-md-6">
            <div className="img-overlay img-overlay-2 rounded">
              <div className="d-flex flex-column text-container justify-content-center align-items-center">
                <h1 className="text-overlay border border-light">
                  Men's clothes
                </h1>
                <button className="mt-3 button-card w-50 rounded-0 btn btn-outline-light border border-light">
                  See more
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 mt-2 col-md-6">
            <div className="img-overlay img-overlay-1 rounded">
              <div className="d-flex flex-column text-container justify-content-center align-items-center">
                <h1 className="text-overlay border border-light">
                  Women's clothes
                </h1>
                <button className="mt-3 button-card w-50 rounded-0 btn btn-outline-light border border-light">
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 mt-2 col-md-6">
            <div className="img-overlay img-overlay-3 rounded">
              <div className=" d-flex flex-column text-container justify-content-center align-items-center">
                <h1 className="text-overlay border border-light">
                  Cool Accesories
                </h1>
                <button className="mt-3 button-card w-50 rounded-0 btn btn-outline-light border border-light">
                  See more
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 mt-2 col-md-6">
            <div className="img-overlay img-overlay-4 rounded">
              <div className="d-flex flex-column text-container justify-content-center align-items-center">
                <h1 className="text-overlay border border-light">
                  Last footwear
                </h1>
                <button className="mt-3 button-card w-50 rounded-0 btn btn-outline-light border border-light">
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
