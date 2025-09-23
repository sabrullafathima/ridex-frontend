import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Layout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-indigo-900 p-6 flex flex-col">
      <div className="flex justify-end mb-6">
        <Button
          onClick={handleLogout}
          fullWidth={false}
          className="px-4 py-2 bg-indigo-500/70 hover:bg-indigo-500/90 text-white"
        >
          Logout
        </Button>
      </div>
      <div className="flex-1 w-full max-w-5xl mx-auto overflow-y-auto custom-scrollbar">
        {children}
      </div>
    </div>
  );
}
