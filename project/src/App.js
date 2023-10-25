import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Component/main";
import Translation from "./Component/translation";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
      
        <Routes>
          <Route exact path="/main" element={<Main/>} />
          <Route exact path="/translation" element={<Translation/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
