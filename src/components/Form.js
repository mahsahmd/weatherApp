import { useState, useContext } from "react";
import { WeatherContext } from "./Provider";

const Form = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState(false);
  const { fetchData, error, handleClear } = useContext(WeatherContext);

  //* handle from submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (text.trim() !== "") {
      fetchData(text);
      handleClear();
      event.target[0].value = "";
    } else {
      event.target[0].value = "";
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
      }, 2000);
    }

  };
  return (
    <>
      {error && (
        <div className="message">
          <i className="fas fa-exclamation-circle"></i>
          <p>please enter a valid city</p>
        </div>
      )}
      {message && (
        <div className="message">
          <i className="fas fa-exclamation-circle"></i>
          <p>please enter a name</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setText(event.target.value)}
          placeholder="Search for a city..."
          className="cityInput"
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </>
  );
};

export default Form;
