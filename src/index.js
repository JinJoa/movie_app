import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// ReactDOM.render(<App />, document.getElementById("potato"));
const root = ReactDOM.createRoot(document.getElementById('root')); // root 생성
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);