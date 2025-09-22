// import { useState } from "react";
// import { requestRide } from "../api/auth";
// import Layout from "../components/Layout";
// import FormCard from "../components/FormCard";
// import Button from "../components/Button";

// export default function RideRequest() {
//   const [pickup, setPickup] = useState("");
//   const [destination, setDestination] = useState("");
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setResponse(null);

//     try {
//       const { data } = await requestRide({ pickup, destination });
//       setResponse(data);
//     } catch (err) {
//       setError(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <Layout>
//       <FormCard className="w-full max-w-md mx-auto p-8">
//         <h2 className="text-2xl font-bold mb-6 text-center text-white">
//           Request a Ride
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block font-medium mb-1 text-white">
//               Pickup Location
//             </label>
//             <input
//               type="text"
//               value={pickup}
//               onChange={(e) => setPickup(e.target.value)}
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter pickup location"
//               required
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-1 text-white">
//               Destination
//             </label>
//             <input
//               type="text"
//               value={destination}
//               onChange={(e) => setDestination(e.target.value)}
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter destination"
//               required
//             />
//           </div>

//           <Button type="submit" gradient className="w-full py-2">
//             Request Ride
//           </Button>
//         </form>

//         {response && (
//           <div className="mt-6 bg-white/20 backdrop-blur-md p-4 rounded text-white font-medium">
//             <p>
//               <strong>Ride ID:</strong> {response.rideId}
//             </p>
//             <p>
//               <strong>Rider ID:</strong> {response.riderId}
//             </p>
//             <p>
//               <strong>Driver ID:</strong> {response.driverId}
//             </p>
//             <p>
//               <strong>Pickup:</strong> {response.pickup}
//             </p>
//             <p>
//               <strong>Destination:</strong> {response.destination}
//             </p>
//             <p>
//               <strong>Status:</strong> {response.status}
//             </p>
//           </div>
//         )}

//         {error && (
//           <div className="mt-6 bg-white/20 backdrop-blur-md p-4 rounded text-red-400 font-medium">
//             {error}
//           </div>
//         )}
//       </FormCard>
//     </Layout>
//   );
// }

import { useState } from "react";
import { requestRide } from "../api/auth";
// import Layout from "../components/Layout";

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
    // <Layout>
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
        <div className="mt-6 bg-red-100 p-4 rounded text-red-800">{error}</div>
      )}
    </div>
    // </Layout>
  );
}
