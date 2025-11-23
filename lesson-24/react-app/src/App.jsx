import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Form from "../components/form.jsx";


function App() {



return (
    <>
        <div className="container">
            <h1>SWAPI</h1>
            <Form />
            <div className="card">
                <div className="card-body">
          <span className="badge d-none bg-secondary js--swapi_controller"
          >people</span
          >
                    <span className="badge d-none bg-secondary js--swapi_id">1</span>
                    <div className="load d-none js--swapi_load">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <pre className="mt-2 mb-0 js--swapi_pre"></pre>
                </div>
            </div>
        </div>
        </>
        );
        }

        export default App;
