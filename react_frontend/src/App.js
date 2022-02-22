import "./css/App.css";
import "./css/Button.css";
import FileInput from "./component/fileInput";
import Output from "./component/output";
import { DataProvider } from "./component/DataContext";

function App() {

  return (
    <>
      <DataProvider>
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-5 d-none d-md-flex bg-image"></div>
            <div className="col-md-7 bg-light">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                                            
                      <FileInput />

                      <Output />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DataProvider>
    </>
  );
}

export default App;
