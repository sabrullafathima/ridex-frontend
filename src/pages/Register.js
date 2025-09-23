import { useState } from "react";
import { registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import FormCard from "../components/FormCard";

import { User, Mail, Lock } from "lucide-react";
import FormLayout from "../components/FormLayout";
import FormError from "../components/FormError";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("RIDER");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ username, email, password, role });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <FormLayout>
      <FormCard>
        <FormError message={error} />
        <form onSubmit={handleRegister} className="space-y-5">
          <Input
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            icon={<User className="text-purple-400" />}
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail className="text-purple-400" />}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock className="text-purple-400" />}
          />

          <div className="mb-4">
            <label className="block text-gray-300 font-semibold mb-1">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-purple-600 text-white rounded-2xl focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            >
              <option value="RIDER">RIDER</option>
              <option value="DRIVER">DRIVER</option>
            </select>
          </div>

          <Button type="submit" gradient>
            Register
          </Button>

          <p className="mt-4 text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <span
              className="text-purple-400 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </FormCard>
    </FormLayout>
  );
}
