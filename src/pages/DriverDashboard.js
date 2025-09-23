import RideList from "../components/RideList";

export default function DriverDashboard({
  requestedRides,
  acceptedRides,
  onAccept,
  onComplete,
  username,
}) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900/80 backdrop-blur-lg p-6 rounded-2xl border border-purple-700 shadow-[0_0_20px_rgba(128,0,255,0.5)]">
        <h1 className="text-3xl font-bold text-indigo-400 tracking-wide mb-2">
          Welcome, {username}
        </h1>
        <p className="text-gray-300">Driver Dashboard</p>
      </div>

      <div className="bg-gray-900/80 backdrop-blur-lg p-6 rounded-2xl border border-purple-700 shadow-[0_0_20px_rgba(128,0,255,0.4)]">
        <h2 className="text-xl font-semibold text-white mb-4">
          Requested Rides
        </h2>
        <RideList rides={requestedRides} onAccept={onAccept} />
      </div>

      <div className="bg-gray-900/80 backdrop-blur-lg p-6 rounded-2xl border border-purple-700 shadow-[0_0_20px_rgba(128,0,255,0.4)]">
        <h2 className="text-xl font-semibold text-white mb-4">
          Accepted / Ongoing Rides
        </h2>
        <RideList rides={acceptedRides} onComplete={onComplete} />
      </div>
    </div>
  );
}
