import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Check if user is logged in

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#e3f2fd", color: "#333", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ width: "100%", backgroundColor: "#1565c0", color: "#fff" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Project Management Tool</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
              
              {/* Projects & Dashboard Disabled When Not Logged In */}
              <li className="nav-item">
                <Link className={`nav-link ${!token ? "disabled" : ""}`} to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${!token ? "disabled" : ""}`} to="/dashboard">Dashboard</Link>
              </li>
            </ul>

            {/* Show Sign In/Sign Up if not logged in, otherwise show Logout */}
            {token ? (
              <button className="btn btn-warning" onClick={handleLogout}>Logout</button>
            ) : (
              <div>
                <Link to="/signin" className="btn btn-outline-warning me-2">Sign In</Link>
                <Link to="/signup" className="btn btn-warning">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Home Content */}
      <div className="container text-center mt-5 p-5 shadow rounded" style={{ backgroundColor: "#ffffff", maxWidth: "800px", width: "100%", margin: "auto" }}>
        <h1>Welcome to the Project Management Tool</h1>
        <p>Manage your projects, collaborate with teams, and track progress efficiently.</p>
        <div className="mt-4">
          {/* Buttons disabled until login */}
          <Link to="/projects" className={`btn btn-warning me-3 ${!token ? "disabled" : ""}`}>View Projects</Link>
          <Link to="/dashboard" className={`btn btn-warning ${!token ? "disabled" : ""}`}>Go to Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
