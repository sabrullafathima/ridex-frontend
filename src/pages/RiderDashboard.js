import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function RiderDashboard({ username }) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900/80 backdrop-blur-lg p-6 rounded-2xl border border-purple-700 shadow-[0_0_20px_rgba(128,0,255,0.5)]">
        <h1 className="text-3xl font-bold text-indigo-400 tracking-wide mb-2">
          Welcome, {username}
        </h1>
        <p className="text-gray-300">Rider Dashboard</p>
      </div>
      <div className="bg-gray-900/80 backdrop-blur-lg p-6 rounded-2xl border border-purple-700 shadow-[0_0_20px_rgba(128,0,255,0.4)] flex items-center justify-center">
        <Link to="/rides/request">
          <Button gradient className="w-auto px-4 py-2">
            Request a Ride
          </Button>
        </Link>
      </div>
    </div>
  );
}
