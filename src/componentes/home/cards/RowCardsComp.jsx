import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { IoReturnDownForwardSharp } from "react-icons/io5";
export const RowCardsComp = () => {
  return (
    <div className="mt-5">
      <div className="mt-2">
        <h2 className="font-tertiary fw-bold fw-6old text-center">
          New realeses <BsArrowRightShort />
        </h2>
      </div>
      <div className="row d-flex flex-nowrap overflow-y-hidden overflow-scroll mt-3">
        <div className="col-sm-3 col-md-4 mb-5">
          <div className="card shadow card-most-wanted">
            <img
              className="card-img-top img-most-wanted"
              src="https://media.istockphoto.com/photos/its-the-denim-that-does-it-for-me-picture-id1307568521?b=1&k=20&m=1307568521&s=170667a&w=0&h=3R0u2GQgBI_TWG0gbv8L2p69P8qofj6jTRyEV_mkQbU="
              alt="Card-cap 1"
            />
            <div className="card-body">
              <p className="text-center font-tertiary fw-bold fs-6">
                Hey <span className="fw-bold font-primary">Girl</span>, can't
                decide?
              </p>
              <button className=" btn btn-outline-light border-0 rounded-0 text-dark w-100  btn-Row-Cards ">
                Women by women
                <IoReturnDownForwardSharp />
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-3 col-md-4">
          <div className="card shadow card-most-wanted">
            <img
              className="card-img-top img-most-wanted"
              alt="Card-cap 2"
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVyYmFuJTIwZmFzaGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <div className="card-body">
              <p className="text-center font-tertiary fw-bold fs-6">
                <span className="summer fw-bold font-primary">Summer</span> is
                loading...
              </p>
              <button className="btn btn-outline-light border-0 rounded-0 text-dark w-100  btn-Row-Cards ">
                Our summer vibes
                <IoReturnDownForwardSharp />
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-4">
          <div className="card shadow card-most-wanted">
            <img
              className="card-img-top img-most-wanted"
              alt="Card-cap 2"
              src="https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXJiYW4lMjBmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <div className="card-body">
              <p className="text-center font-tertiary fw-bold fs-6">
                <span className="fw-bold font-primary">Promos</span> arrived
              </p>
              <button className="btn btn-outline-light border-0 rounded-0 text-dark w-100  btn-Row-Cards ">
                Check our promos
                <IoReturnDownForwardSharp />
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-4">
          <div className="card shadow card-most-wanted">
            <img
              className="card-img-top img-most-wanted"
              alt="Card-cap 2"
              src="https://media.istockphoto.com/photos/beautiful-woman-with-stylish-hairstyle-picture-id491153246?b=1&k=20&m=491153246&s=170667a&w=0&h=UlcnRx8v7qJw9X3S1x2KNXFpCNV9fUGbkyWFAaGS8aM="
            />
            <div className="card-body">
              <p className="text-center fs-6">
                <span className="fw-bold font-primary">Black & White</span>{" "}
                fashion
              </p>
              <button className="btn btn-outline-light border-0 rounded-0 text-dark w-100  btn-Row-Cards ">
                Check collection
                <IoReturnDownForwardSharp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
