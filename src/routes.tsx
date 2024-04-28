import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; // Import BrowserRouter and Route
import Rent from "./Pages/Rent/Rent";

const Routes: React.FC = () => (
  <Router>
    {" "}
    {/* Wrap routes in Router */}
    <Route path="/rent" element={<Rent />} />{" "}
    {/* Define individual routes using Route */}
  </Router>
);

export default Routes;
