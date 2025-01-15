import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AuthenticationStateProps } from "./types/authentication/AuthenticationTypes";
import Navbar from "./components/navbar/Navbar";
import RegisterPage from "./pages/authentication/register/RegisterPage";
import LoginPage from "./pages/authentication/login/LoginPage";
import { getUserById } from "./services/authentication/AuthenticationService";
import { getUserDetailsReducer } from "./store/auth/authSlice";
import SpacesPage from "./pages/spaces/SpacesPage";
import MyFavoriteSpacesPage from "./pages/my-favorite-spaces/MyFavoriteSpacesPage";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: AuthenticationStateProps) => state.auth.userId
  );

  useEffect(() => {
    const fetchUser = async () => {
      if (isAuthenticated) {
        try {
          const user = await getUserById(isAuthenticated);
          if (user) {
            dispatch(getUserDetailsReducer({ userDetails: user }));
          }
        } catch (e) {
          console.error(e);
          throw new Error("Error when trying to get user");
        }
      }
    };
    fetchUser();
  }, [isAuthenticated, dispatch]);

  return (
    <div>
      <Router>
        <Navbar />
        <div className="py-16">
          <Routes>
            {isAuthenticated && (
              <>
                <Route path="/" element={<div>Homepage</div>} />
                <Route
                  path="/my-favorite-spaces"
                  element={<MyFavoriteSpacesPage />}
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            )}
            {!isAuthenticated && (
              <>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            )}
            {/* Route accessible to anyone */}
            <Route path="/spaces" element={<SpacesPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
