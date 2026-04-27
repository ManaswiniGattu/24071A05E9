import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Destinations from "./pages/Destinations";
import Bookings from "./pages/Bookings";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
  
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            ✈ TravelApp
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <Link className="nav-link" to="/">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/destinations">Destinations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bookings">Bookings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/payment">Payment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4 flex-grow-1">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/packages/:place" element={<Packages />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        ©24071A05E9 2026 TravelApp | All rights reserved
      </footer>

    </div>
  );
}

export default App;