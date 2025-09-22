// src/components/UberBackground.jsx
import { useEffect, useState } from "react";
import { Car, Truck, Bike, Bus } from "lucide-react"; // example icons

export default function UberBackground() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Generate vehicles at random intervals
    const interval = setInterval(() => {
      const types = [
        { Icon: Car, size: 32 },
        { Icon: Truck, size: 40 },
        { Icon: Bike, size: 28 },
        { Icon: Bus, size: 36 },
      ];

      const type = types[Math.floor(Math.random() * types.length)];

      setVehicles((prev) => [
        ...prev,
        {
          id: Date.now(),
          vehicle: type,
          top: Math.random() * 90, // random vertical position
          direction: Math.random() > 0.5 ? "ltr" : "rtl",
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {vehicles.map((v) => {
        const { Icon, size } = v.vehicle;
        return (
          <div
            key={v.id}
            className="absolute text-indigo-300 animate-moveVehicle"
            style={{
              top: `${v.top}%`,
              left: v.direction === "ltr" ? "-50px" : "100%",
              transform:
                v.direction === "ltr" ? "rotate(0deg)" : "rotateY(180deg)",
              animationDuration: `${4 + Math.random() * 5}s`,
            }}
          >
            <Icon size={size} />
          </div>
        );
      })}
    </div>
  );
}
