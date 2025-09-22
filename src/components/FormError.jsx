// src/components/FormError.jsx
export default function FormError({ message }) {
  if (!message) return null;
  return (
    <p className="text-red-500 text-center font-semibold mb-4 animate-shake">
      {message}
    </p>
  );
}
