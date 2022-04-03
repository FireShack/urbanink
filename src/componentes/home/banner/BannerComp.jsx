import React from "react";

export const BannerComp = () => {
  return (
    <>
      <div className="fluid d-block d-md-none banner-img-mobile">
        <div className="row mt-3" style={{ height: "100vh" }}>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <p className="fs-1 text-white fw-bold font-secondary">
              Be unique, be{" "}
              <span className="font-main font-underline">Urban</span>
            </p>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block banner-img-desktop">
        <div className="row mt-3" style={{ height: "100vh" }}>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <p className="fs-1 text-white glass p-2 fw-bold font-secondary">
              Be unique, be{" "}
              <span className="font-main font-underline">Urban</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
