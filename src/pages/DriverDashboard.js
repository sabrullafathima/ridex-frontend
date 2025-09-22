import RideList from "../components/RideList";
import FormCard from "../components/FormCard";

export default function DriverDashboard({
  requestedRides,
  acceptedRides,
  onAccept,
  onComplete,
  username,
}) {
  return (
    <div className="space-y-6 text-white w-full">
      <FormCard>
        <h1 className="text-2xl font-bold text-center">{username}</h1>
      </FormCard>

      <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 shadow-md w-full max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">
          Requested Rides
        </h2>
        <RideList rides={requestedRides} onAccept={onAccept} />
      </div>

      <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 shadow-md w-full max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">
          Accepted/Ongoing Rides
        </h2>
        <RideList rides={acceptedRides} onComplete={onComplete} />
      </div>
    </div>
  );
}
