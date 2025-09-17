import { useEffect, useState } from "react";
import { getProfile } from "../api/auth";
import Card from "../components/Card";
import Button from "../components/Button";
import { removeToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <p>{profile}</p>
        <Button onClick={handleLogout} className="mt-4">
          Logout
        </Button>
      </Card>
    </div>
  );
}
