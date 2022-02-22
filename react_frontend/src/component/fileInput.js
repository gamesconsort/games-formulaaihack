import React, { useContext, useState } from "react";
// import axios from 'axios';
import responseData from "../data/responseData";
import DataContext from "./DataContext";
import Button from "./Button";

export default function FileInput() {
  const [file, setFile] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const gen = useContext(DataContext);

  const dismissError = () => setErrorMessage(false);

  const submit = (event) => {
    event.preventDefault();
    setLoading(true);
    if (file) {
      const extension = file.name
        .substring(file.name.lastIndexOf(".") + 1)
        .toLowerCase();
      if (extension === "json" || extension === "csv") {
        console.log("right one");
        // const formData = new FormData();
        // formData.append(file);
        // axios.post("api/uploadfile", formData)
        // .then((response) => {gen.setData(response.data);
        gen.setData(JSON.parse(responseData));
      } else {
        setErrorMessage(
          "Two file format is accepted - csv and json. Thank you"
        );
      }
      // file ? null : setError(true);
    } else {
      setErrorMessage("File field cannot be left empty.");
    }
    setLoading(false);
  };

  return (
    <>
      {!gen.data &&
      <>
        <Button />
        <h3 className="display-4 text-center">Upload Data!!</h3> <br />
      {errorMessage ? (
        <div className="alert alert-danger alert-dismissible">
          {errorMessage}
          <button onClick={dismissError} type="button" className="close">
            <span>&times;</span>
          </button>
        </div>
      ) : null}
      
      <form onSubmit={submit}>
        <div className="form-row">
          <div className="col-md-9 input-group-lg pb-2">
            {/* <div className="input-group-prepend">
            <span className="input-group-text">Upload</span>
          </div> */}
            <div className="custom-file">
              <input
                onChange={(event) => setFile(event.target.files[0])}
                type="file"
                accept=".csv,.json"
                className="custom-file-input form-control-lg"
              />
              <label className="custom-file-label">
                {file ? file.name : "Choose file"}
              </label>
            </div>
          </div>
          <div className="col-md-3">
            <button
              type="submit"
              className="btn btn-block btn-primary"
              disabled={loading ? "disabled" : null}
            >
              {loading ? (
                <>
                  Feeding <span class="spinner-grow spinner-grow-sm"></span>
                </>
              ) : (
                "Feed"
              )}
            </button>
          </div>
        </div>
      </form>
      </>
      }
    </>
  );
}
