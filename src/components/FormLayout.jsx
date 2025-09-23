// src/components/FormLayout.jsx
export default function FormLayout({ children }) {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-950">
      {children}
    </div>
  );
}
