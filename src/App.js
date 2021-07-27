import Form from "./components/Form";
import Weather from "./components/Weather";
import Provider from "./components/Provider";
import "./main.css";


function App() {
  return (
    <Provider>
      <div className="App">
        <div className="weatherApp">
          <Form />
          <Weather />
        </div>
      </div>
    </Provider>
  );
}

export default App;
