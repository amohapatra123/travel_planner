import React from "react";
import { PaperInput } from "component";
import "./App.css";
import "component/dist/main.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <PaperInput input addon />
      </div>
    </div>
  );
}

export default App;
