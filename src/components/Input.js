export default function Input({ label, type = "text", value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>
  );
}
