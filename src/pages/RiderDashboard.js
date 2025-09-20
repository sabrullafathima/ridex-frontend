import { Link } from "react-router-dom";

export default function RiderDashboard({ username }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{username}</h1>
      <Link
        to="/rides/request"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Request a Ride
      </Link>
    </div>
  );
}
