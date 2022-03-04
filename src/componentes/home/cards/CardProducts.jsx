import React from "react";
import { Carousel } from "react-bootstrap";
export const CardProducts = () => {
  // const dispatch = useDispatch();
  // const { product, cart } = useSelector((state) => state.cart);
  const handleClick = (e) => {
    e.preventDefault();
    // dispatch(addToCart());
    console.log("Click");
  };

  return (
    <div className="mt-5">
      <div className="row mt-3">
        <div className="col-sm-12 mt-2 col-md-6">
          <div className="card shadow-sm rounded-3">
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-05-at-12.43.07-1.jpeg"
                  className="d-block w-100"
                  alt="Card-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-05-at-12.43.07.jpeg"
                  className="d-block w-100"
                  alt="Card-img"
                />
              </Carousel.Item>
            </Carousel>
            <div className="card-body">
              <h4 className="card-title text-most-wanted card-title text-center text-most">
                Long T-shirt
              </h4>
              <p className="text-center text fs-5">For man</p>
              <div className="row d-flex justify-content-center">
                <span className="badge text-dark ratio-banner rounded-pill text fs-6 p-2 w-50 ">
                  $35.99
                </span>
                <button
                  className="btn btn-outline-dark rounded-0 w-75 mt-2"
                  onClick={handleClick}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 mt-2 col-md-6">
          <div className="card shadow-sm rounded-3">
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2022/02/beigemed-1.jpg"
                  className="d-block w-100"
                  alt="Card-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2022/02/BEIGEENT.jpg"
                  className="d-block w-100"
                  alt="Card-img"
                />
              </Carousel.Item>
            </Carousel>
            <div className="card-body">
              <h4 className="card-title text-most-wanted card-title text-center text-most">
                Long T-shirt
              </h4>
              <p className="text-center text fs-5">For man</p>
              <div className="row d-flex justify-content-center">
                <span className="badge text-dark ratio-banner rounded-pill text fs-6 p-2 w-50 ">
                  $35.99
                </span>
                <button className="btn btn-outline-dark rounded-0 w-75 mt-2">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-12 mt-2 col-md-6">
          <div className="card shadow-sm rounded-3">
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2022/02/1002model2.jpg.webp"
                  className="d-block w-100"
                  alt="Card-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2022/02/1002model1.jpg.webp"
                  className="d-block w-100"
                  alt="Card-img"
                />
              </Carousel.Item>
            </Carousel>
            <div className="card-body">
              <h4 className="card-title text-most-wanted card-title text-center text-most">
                Long T-shirt
              </h4>
              <p className="text-center text fs-5">For man</p>
              <div className="row d-flex justify-content-center">
                <span className="badge text-dark ratio-banner rounded-pill text fs-6 p-2 w-50 ">
                  $35.99
                </span>
                <button className="btn btn-outline-dark rounded-0 w-75 mt-2">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 mt-2 col-md-6">
          <div className="card shadow-sm rounded-3">
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2021/12/PIRAMED.jpg"
                  className="d-block w-100"
                  alt="Card-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2021/12/PIRAENT.jpg"
                  className="d-block w-100"
                  alt="Card-img"
                />
              </Carousel.Item>
            </Carousel>
            <div className="card-body">
              <h4 className="card-title text-most-wanted card-title text-center text-most">
                Long T-shirt
              </h4>
              <p className="text-center text fs-5">For man</p>
              <div className="row d-flex justify-content-center">
                <span className="badge text-dark ratio-banner rounded-pill text fs-6 p-2 w-50 ">
                  $35.99
                </span>
                <button className="btn btn-outline-dark rounded-0 w-75 mt-2">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-12 mt-2 col-md-6">
          <div className="card shadow-sm rounded-3">
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-29-at-08.10.44.jpeg"
                  className="d-block w-100"
                  alt="Card-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-29-at-08.10.43.jpeg"
                  className="d-block w-100"
                  alt="Card-img"
                />
              </Carousel.Item>
            </Carousel>
            <div className="card-body">
              <h4 className="card-title text-most-wanted card-title text-center text-most">
                Long T-shirt
              </h4>
              <p className="text-center text fs-5">For man</p>
              <div className="row d-flex justify-content-center">
                <span className="badge text-dark ratio-banner rounded-pill text fs-6 p-2 w-50 ">
                  $35.99
                </span>
                <button className="btn btn-outline-dark rounded-0 w-75 mt-2">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 mt-2 col-md-6">
          <div className="card shadow-sm rounded-3">
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2021/12/RMED.jpg"
                  className="d-block w-100"
                  alt="Card-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2021/12/RENT.jpg"
                  className="d-block w-100"
                  alt="Card-img"
                />
              </Carousel.Item>
            </Carousel>
            <div className="card-body">
              <h4 className="card-title text-most-wanted card-title text-center text-most">
                Long T-shirt
              </h4>
              <p className="text-center text fs-5">For man</p>
              <div className="row d-flex justify-content-center">
                <span className="badge text-dark ratio-banner rounded-pill text fs-6 p-2 w-50 ">
                  $35.99
                </span>
                <button className="btn btn-outline-dark rounded-0 w-75 mt-2">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-12 mt-2 col-md-6">
          <div className="card shadow-sm rounded-3">
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2021/11/REDMED-1.jpg"
                  className="d-block w-100"
                  alt="Card-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2021/11/redent-1.jpg"
                  className="d-block w-100"
                  alt="Card-img"
                />
              </Carousel.Item>
            </Carousel>
            <div className="card-body">
              <h4 className="card-title text-most-wanted card-title text-center text-most">
                Long T-shirt
              </h4>
              <p className="text-center text fs-5 text-bg">For man</p>
              <div className="row d-flex justify-content-center">
                <span className="badge text-dark ratio-banner rounded-pill text fs-6 p-2 w-50 ">
                  $35.99
                </span>
                <button className="btn btn-outline-dark rounded-0 w-75 mt-2">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 mt-2 col-md-6">
          <div className="card shadow-sm rounded-3">
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2021/12/hcap10-21.jpg"
                  className="d-block w-100"
                  alt="Card-img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://batukjeans.com.ar/site/wp-content/uploads/2021/12/hcap10-21b.jpg"
                  className="d-block w-100"
                  alt="Card-img"
                />
              </Carousel.Item>
            </Carousel>
            <div className="card-body">
              <h4 className="card-title text-most-wanted card-title text-center text-most">
                Long T-shirt
              </h4>
              <p className="text-center text fs-5">For man</p>
              <div className="row d-flex justify-content-center">
                <span className="badge  rounded-pill text fs-6 p-2 w-50 text-dark ratio-banner">
                  $35.99
                </span>
                <button className="btn btn-outline-dark rounded-0 w-75 mt-2">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
