import RideList from "../components/RideList";

export default function DriverDashboard({
  requestedRides,
  acceptedRides,
  onAccept,
  onComplete,
  username,
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{username}</h1>

      <div className="w-full max-w-2xl mb-6">
        <h2 className="text-xl font-semibold mb-2">Requested Rides</h2>
        <RideList rides={requestedRides} onAccept={onAccept} />
      </div>

      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-2">Accepted/Ongoing Rides</h2>
        <RideList rides={acceptedRides} onComplete={onComplete} />
      </div>
    </div>
  );
}
