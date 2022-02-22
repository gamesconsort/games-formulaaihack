import React, { useContext, useState } from "react";
import Button from "./Button";
import DataContext from "./DataContext";

export default function Output({ data }) {
  const gen = useContext(DataContext);
  const clear = () => gen.setData("");

  return (
    <>
      {gen.data && (
        <>
          <Button />
          <h3 className="display-4 text-center">Prediction!!!</h3> <br />
          <div className="row">
            {Object.entries(gen.data).map((data, index) => (
              <div key={index} className="col-4 pb-2 text-center">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="..."
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p>minute - {data[0]}</p>
                    <p>type - {data[1]["type"]}</p>
                    <p>rain % - {data[1]["rain_percentage"]}</p>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={clear} className="btn btn-block btn-success">
              Make Another Prediction
            </button>
          </div>
        </>
      )}
    </>
  );
}
