import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../api/authService";
import Layout from "../components/Layout";
import {
  getRequestedRides,
  getAcceptedRide,
  acceptRide,
  completeRide,
} from "../api/rideService";
import DriverDashboard from "./DriverDashboard";
import RiderDashboard from "./RiderDashboard";

export default function Profile() {
  const [profile, setProfile] = useState({});
  const [requestedRides, setRequestedRides] = useState([]);
  const [acceptedRides, setAcceptedRides] = useState([]);
  const navigate = useNavigate();

  const refreshRides = async () => {
    try {
      const [reqRes, accRes] = await Promise.all([
        getRequestedRides(),
        getAcceptedRide(),
      ]);
      setRequestedRides(reqRes.data || []);
      setAcceptedRides(accRes.data ? [accRes.data] : []);
    } catch (err) {
      console.error("Error refreshing rides:", err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      navigate("/login");
      return;
    }

    getUserDetails()
      .then((res) => setProfile(res.data))
      .catch(() => navigate("/login"));

    refreshRides();
  }, [navigate]);

  const handleAccept = async (rideId) => {
    await acceptRide(rideId);
    refreshRides();
  };

  const handleComplete = async (rideId) => {
    await completeRide(rideId);
    refreshRides();
  };

  return (
    <Layout>
      {profile.role === "DRIVER" && (
        <DriverDashboard
          username={profile.username}
          requestedRides={requestedRides}
          acceptedRides={acceptedRides}
          onAccept={handleAccept}
          onComplete={handleComplete}
        />
      )}

      {profile.role === "RIDER" && (
        <RiderDashboard username={profile.username} />
      )}
    </Layout>
  );
}
