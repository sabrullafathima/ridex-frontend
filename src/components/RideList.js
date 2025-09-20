export default function RideList({ rides, onAccept, onComplete }) {
  if (!rides.length) return <p>No rides available.</p>;

  return (
    <ul className="space-y-2">
      {rides.map((ride) => (
        <li
          key={ride.rideId}
          className="p-2 border rounded bg-white shadow-sm flex justify-between items-center"
        >
          <span>
            {ride.pickup} → {ride.destination} | Status: {ride.status}
          </span>
          {onAccept && (
            <button
              onClick={() => onAccept(ride.rideId)}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              Accept
            </button>
          )}
          {onComplete && (
            <button
              onClick={() => onComplete(ride.rideId)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
