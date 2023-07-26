import React from "react";
import Home from "./components/Home";
import MySVG from "./components/MySVG";
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MySVG/>
          <Home/>
      </header>
    </div>
  );
}

export default App;
