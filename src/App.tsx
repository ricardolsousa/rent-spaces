import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
import { AuthenticationStateProps } from "./types/authentication/AuthenticationTypes";
import Navbar from "./components/navbar/Navbar";
import RegisterPage from "./pages/authentication/register/RegisterPage";
import LoginPage from "./pages/authentication/login/LoginPage";

function App() {
  const isAuthenticated = useSelector(
    (state: AuthenticationStateProps) => state.auth.userId
  );

  return (
    <div>
      <Router>
        <Navbar />
        <div className="py-16">
          {isAuthenticated && (
            <Routes>
              <Route path="/" element={<div>Homepage</div>} />
            </Routes>
          )}
          {!isAuthenticated && (
            <Routes>
              {/* Auth routes */}
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          )}
        </div>
      </Router>
    </div>
  );
}

export default App;
