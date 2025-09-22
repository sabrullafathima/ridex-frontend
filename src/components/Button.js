// src/components/Button.js
export default function Button({ children, gradient, ...props }) {
  return (
    <button
      {...props}
      className={`w-full py-2 rounded-lg font-bold text-white transition transform hover:scale-105 ${
        gradient
          ? "bg-gradient-to-r from-indigo-500 to-pink-500"
          : "bg-gray-700 hover:bg-gray-800"
      }`}
    >
      {children}
    </button>
  );
}
