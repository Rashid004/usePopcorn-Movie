/** @format */

import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.js";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// {
//   /* <StarRating
//   maxRating={5}
//   messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
// />
// <StarRating size={24} color="red" className="test" defaultRating={3} />
// <Test /> */
// }
