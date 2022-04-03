import React from "react";
import { ShowSectionData } from "./ShowSectionData";

export const MenSectionComp = () => {
  return (
    <>
      <div className="mt-5">
        <div className="row">
          <div className="col-sm-6 mt-2 col-md-12">
            <div className="img-overlay img-overlay-men-section rounded">
              <div className="d-flex flex-column text-container justify-content-center align-items-center">
                <h1 className="w-75 text-center text-overlay border border-light">
                  Men's
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ShowSectionData filterParam={"section-men"} />
      </div>
    </>
  );
};
