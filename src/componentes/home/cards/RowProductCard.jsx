import React from "react";

export const RowProductCard = () => {
  return (
    <div>
      <div className="">
        <div className="row ">
          <h3 className="text-center mt-4 text">Most wanted clothes</h3>
        </div>
        <div className="container-fluid">
          <div className="row d-flex flex-nowrap overflow-scroll mt-3">
            <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <div className="card shadow p-4 card-row-animation">
                <img
                  src="https://cdn.icon-icons.com/icons2/933/PNG/128/keyboard-right-arrow-button-1_icon-icons.com_72690.png"
                  alt="row"
                />
              </div>
              <div>
                <h1 className="mt-2 text-most-wanted-slide text-center">
                  Slide to see ours most wanted styles
                </h1>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card-group">
                <div className="card shadow card-most-wanted">
                  <img
                    className="card-img-top img-most-wanted"
                    src="https://batukjeans.com.ar/site/wp-content/uploads/2021/11/O1.jpg"
                    alt="Card-cap"
                  />
                  <div className="card-body">
                    <h4 className="text-most-wanted card-title text-center">
                      Puma sneakers
                    </h4>
                    <p className="card-text text-most-wanted text-center fs-6">
                      RS-Fast
                    </p>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-outline-dark rounded-0">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card-group">
                <div className="card shadow card-most-wanted">
                  <img
                    className="card-img-top img-most-wanted"
                    src="https://batukjeans.com.ar/site/wp-content/uploads/2021/10/BENT.jpg"
                    alt="Card-cap"
                  />
                  <div className="card-body">
                    <h4 className="text-most-wanted card-title text-center">
                      Sling bag
                    </h4>
                    <p className="card-text text-most-wanted text-center fs-6">
                      i Spy
                    </p>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-outline-dark rounded-0">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card shadow card-most-wanted">
                <img
                  className="card-img-top img-most-wanted"
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2021/12/hcap8-21.jpg"
                  alt="Card-cap"
                />
                <div className="card-body">
                  <h4 className="text-most-wanted card-title text-center">Title</h4>
                  <p className="card-text text-most-wanted text-center fs-6">
                    Text
                  </p>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark rounded-0">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card shadow card-most-wanted">
                <img
                  className="card-img-top img-most-wanted"
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2021/12/Hcap6-21.jpg"
                  alt="Card-cap"
                />
                <div className="card-body">
                  <h4 className="text-most-wanted card-title text-center">Title</h4>
                  <p className="card-text text-most-wanted text-center fs-6">
                    Text
                  </p>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark rounded-0">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card-group">
                <div className="card shadow card-most-wanted">
                  <img
                    className="card-img-top img-most-wanted"
                    src="https://batukjeans.com.ar/site/wp-content/uploads/2021/10/CAMENT.jpg"
                    alt="Card-cap"
                  />
                  <div className="card-body">
                    <h4 className="text-most-wanted card-title text-center">
                      Title
                    </h4>
                    <p className="card-text text-most-wanted text-center fs-6">
                      Text
                    </p>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-outline-dark rounded-0">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card shadow card-most-wanted">
                <img
                  className="card-img-top img-most-wanted"
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2021/09/AMAMED.jpg"
                  alt="Card-cap"
                />
                <div className="card-body">
                  <h4 className="text-most-wanted card-title text-center">Title</h4>
                  <p className="card-text text-most-wanted text-center fs-6">
                    Text
                  </p>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark rounded-0">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
