import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./components//Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Candidates from "./components/Candidates";
import Packages from "./components/Packages";
import OrderBackgroundCheck from "./components/OrderBackgroundCheck";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/packages" element={<Packages />} />
        <Route
          path="/orderBackgroundCheck"
          element={<OrderBackgroundCheck />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
