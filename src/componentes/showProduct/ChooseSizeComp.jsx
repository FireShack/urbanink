import React from "react";

export const ChooseSizeComp = () => {
  return (
    <form
      className="row mt-4 d-flex justify-content-center"
      onChange={(e) => console.log(e.target.id)}
    >
      <div className="col">
        <input
          type="radio"
          className="btn-check p-2"
          name="size"
          id="xs"
          autoComplete="off"
        />
        <label className="btn btn-outline-dark" htmlFor="xs">
          xS
        </label>
      </div>
      <div className="col">
        <input
          type="radio"
          className="btn-check p-2"
          name="size"
          id="s"
          autoComplete="off"
        />
        <label className="btn btn-outline-dark" htmlFor="s">
          S
        </label>
      </div>
      <div className="col">
        <input
          type="radio"
          className="btn-check p-2"
          name="size"
          id="m"
          autoComplete="off"
        />
        <label className="btn btn-outline-dark" htmlFor="m">
          M
        </label>
      </div>
      <div className="col">
        <input
          type="radio"
          className="btn-check p-2"
          name="size"
          id="l"
          autoComplete="off"
        />
        <label className="btn btn-outline-dark" htmlFor="l">
          L
        </label>
      </div>
      <div className="col">
        <input
          type="radio"
          className="btn-check p-2"
          name="size"
          id="xl"
          autoComplete="off"
        />
        <label className="btn btn-outline-dark" htmlFor="xl">
          XL
        </label>
      </div>
    </form>
  );
};
