import { Link } from "react-router-dom";

export default function RiderDashboard({ username }) {
  return (
    <div className="space-y-6 text-white w-full">
      <h1 className="text-2xl font-bold text-center">{username}</h1>

      <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 shadow-md text-center">
        <p className="mb-4 text-gray-200">
          Request a ride to start your journey!
        </p>
        <Link
          to="/rides/request"
          className="inline-block w-full py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold hover:scale-105 transition transform"
        >
          Request a Ride
        </Link>
      </div>
    </div>
  );
}
