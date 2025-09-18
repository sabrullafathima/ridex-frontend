import { useEffect, useState } from "react";
import { getProfile } from "../api/auth";
import { removeToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getProfile()
      .then((res) => setProfile(res.data))
      .catch(() => navigate("/login"));
  }, [navigate]);

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Welcome to your profile!</h1>
      <Link
        to="/rides/request"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Request a Ride
      </Link>
    </div>
  );
}
