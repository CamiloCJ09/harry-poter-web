import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Signup } from "../pages";

const ProtectedRoute = ({ children }) => {
  if (localStorage.getItem("token") === null) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

const ThemeRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ThemeRouter;
