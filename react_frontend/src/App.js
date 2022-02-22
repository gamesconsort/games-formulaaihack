import "./css/App.css";
import "./css/Button.css";
import FileInput from "./component/fileInput";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-5 d-none d-md-flex bg-image"></div>
          <div className="col-md-7 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="row">
                      <div className="col text-center">
                        <span className="btn-blue"></span>
                        <p>Get Rich</p>
                      </div>
                      <div className="col text-center">
                        <span className="btn-red"></span>
                        <p>Get Rich</p>
                      </div>
                      <div className="col text-center">
                        <span className="btn-green"></span>
                        <p>Get Rich</p>
                      </div>
                      <div className="col text-center">
                        <span className="btn-yellow"></span>
                        <p>Get Rich</p>
                      </div>
                    </div>
                    <h3 className="display-4">Upload Data!!</h3> <br />
                    <FileInput/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
