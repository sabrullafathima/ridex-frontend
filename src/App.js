import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { getToken } from "./utils/auth";
import RideRequest from "./pages/RideRequest";

function PrivateRoute({ children }) {
  return getToken() ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-indigo-900 overflow-hidden">
      <div className="relative z-10"></div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/details"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/rides/request"
            element={
              <PrivateRoute>
                <RideRequest />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
      /
    </div>
  );
}

export default App;
