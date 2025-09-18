import { useState } from "react";
import { requestRide } from "../api/auth"; // import the new API

export default function RideRequest() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResponse(null);

    try {
      const { data } = await requestRide({ pickup, destination });
      setResponse(data);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Request a Ride</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Pickup Location</label>
            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter pickup location"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Destination</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter destination"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Request Ride
          </button>
        </form>

        {response && (
          <div className="mt-6 bg-green-100 p-4 rounded text-green-800">
            <p>
              <strong>Rider ID:</strong> {response.rideId}
            </p>
            <p>
              <strong>Rider ID:</strong> {response.riderId}
            </p>
            <p>
              <strong>Driver ID:</strong> {response.driverId}
            </p>
            <p>
              <strong>Pickup:</strong> {response.pickup}
            </p>
            <p>
              <strong>Destination:</strong> {response.destination}
            </p>
            <p>
              <strong>Status:</strong> {response.status}
            </p>
          </div>
        )}

        {error && (
          <div className="mt-6 bg-red-100 p-4 rounded text-red-800">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
