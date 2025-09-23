import { useState } from "react";
import { requestRide } from "../api/auth";
import Layout from "../components/Layout";
import FormCard from "../components/FormCard";
import Button from "../components/Button";
import FormError from "../components/FormError";
import Input from "../components/Input";
import { MapPin, Flag } from "lucide-react";

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
    <Layout>
      <div className="flex justify-center items-center w-full">
        <FormCard title="Request a Ride">
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormError message={error} />
            <Input
              label="Pickup Location"
              icon={<MapPin size={18} />}
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup location"
              required
            />

            <Input
              label="Destination"
              icon={<Flag size={18} />}
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination"
              required
            />

            <Button type="submit" gradient fullWidth={false}>
              Request Ride
            </Button>
          </form>
          {response && (
            <div className="mt-6 bg-indigo-500/20 p-4 rounded-xl text-indigo-200">
              <p>
                <strong>Ride ID:</strong> {response.rideId}
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
        </FormCard>
      </div>
    </Layout>
  );
}
