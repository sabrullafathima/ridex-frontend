import { useEffect, useState } from "react";
import {
  getUserDetails,
  getRequestedRides,
  getAcceptedRide,
  acceptRide,
  completeRide,
} from "../api/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState({});
  const [requestedRides, setRequestedRides] = useState([]);
  const [acceptedRides, setAcceptedRides] = useState([]);
  const navigate = useNavigate();

  // Load profile + rides
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      navigate("/login");
      return;
    }

    // Get current user
    getUserDetails()
      .then((res) => setProfile(res.data))
      .catch((err) => {
        console.error("Profile API error:", err);
        navigate("/login");
      });

    // Load rides
    refreshRides();
  }, [navigate]);

  // Helper: reload rides for driver
  const refreshRides = async () => {
    try {
      const [reqRes, accRes] = await Promise.all([
        getRequestedRides(),
        getAcceptedRide(),
      ]);
      setRequestedRides(reqRes.data || []);
      setAcceptedRides(accRes.data ? [accRes.data] : []);
    } catch (err) {
      console.error("Error loading rides:", err);
    }
  };

  // Accept ride
  const handleAccept = async (rideId) => {
    try {
      await acceptRide(rideId);
      console.log("Ride accepted:", rideId);
      refreshRides(); // update lists
    } catch (err) {
      console.error("Error accepting ride:", err);
    }
  };

  // Complete ride
  const handleComplete = async (rideId) => {
    try {
      await completeRide(rideId);
      console.log("Ride completed:", rideId);
      refreshRides(); // update lists
    } catch (err) {
      console.error("Error completing ride:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">{profile.username}</h1>

      {/* Rider view */}
      {profile.role === "RIDER" && (
        <div className="mb-6">
          <Link
            to="/rides/request"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Request a Ride
          </Link>
        </div>
      )}

      {/* Driver view */}
      {profile.role === "DRIVER" && (
        <>
          {/* Requested rides */}
          <div className="w-full max-w-2xl mb-6">
            <h2 className="text-xl font-semibold mb-2">Requested Rides</h2>
            {requestedRides.length > 0 ? (
              <ul className="space-y-2">
                {requestedRides.map((ride) => (
                  <li
                    key={ride.rideId}
                    className="p-2 border rounded bg-white shadow-sm flex justify-between items-center"
                  >
                    <span>
                      {ride.pickup} → {ride.destination} | Status: {ride.status}
                    </span>
                    <button
                      onClick={() => handleAccept(ride.rideId)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Accept
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No requested rides available.</p>
            )}
          </div>

          {/* Accepted rides */}
          <div className="w-full max-w-2xl">
            <h2 className="text-xl font-semibold mb-2">
              Accepted/Ongoing Rides
            </h2>
            {acceptedRides.length > 0 ? (
              <ul className="space-y-2">
                {acceptedRides.map((ride) => (
                  <li
                    key={ride.rideId}
                    className="p-2 border rounded bg-white shadow-sm flex justify-between items-center"
                  >
                    <span>
                      {ride.pickup} → {ride.destination} | Status: {ride.status}
                    </span>
                    <button
                      onClick={() => handleComplete(ride.rideId)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Complete
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No accepted rides.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
