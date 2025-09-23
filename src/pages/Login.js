import { useState } from "react";
import { loginUser } from "../api/auth";
import { setToken } from "../utils/auth";
import FormLayout from "../components/FormLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { User, Lock } from "lucide-react";
import FormCard from "../components/FormCard";
import FormError from "../components/FormError";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ username, password });
      setToken(res.data.jwtToken);
      navigate("/details");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <FormLayout>
      <FormCard>
        <form onSubmit={handleLogin} className="space-y-4">
          <FormError message={error} />

          <Input
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            icon={<User className="text-gray-300" />}
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock className="text-gray-300" />}
          />

          <Button type="submit" gradient>
            Login
          </Button>

          <p className="mt-4 text-sm text-white text-center">
            Don’t have an account?{" "}
            <span
              className="text-indigo-300 cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
        </form>
      </FormCard>
    </FormLayout>
  );
}
