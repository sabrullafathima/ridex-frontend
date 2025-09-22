// src/components/FormCard.jsx
export default function FormCard({ title, children }) {
  return (
    <div className="relative z-10 w-full max-w-md mx-auto bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 shadow-[0_0_40px_rgba(128,0,255,0.7)] border border-purple-700 animate-fadeIn">
      {title && (
        <h2 className="text-3xl font-bold text-center text-indigo-400 mb-6 tracking-wide animate-pulse">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
