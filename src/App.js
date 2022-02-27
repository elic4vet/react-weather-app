import "./App.css";
import Weather from "./weather";
function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1>Weather app </h1>
        <Weather />
        <footer>
          This project was coded by {""}Elisabeth Erkekoglou {""}
          <a
            href=" https://github.com/elic4vet/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            and it is open sourced
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
