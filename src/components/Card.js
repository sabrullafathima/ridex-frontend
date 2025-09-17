export default function Card({ children }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-10 transition-transform transform hover:scale-105">
      {children}
    </div>
  );
}
