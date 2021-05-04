import "./App.css";
import logo from "./logo2.png";
import Dictionary from "./Dictionary";
import "./Dictionary.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>This project was coded by Anais Pirson</small>
        </footer>
      </div>
    </div>
  );
}
