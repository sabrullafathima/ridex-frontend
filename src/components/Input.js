export default function Input({ label, icon, ...props }) {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-100 mb-1">{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          {...props}
          className={`w-full ${
            icon ? "pl-10" : "pl-3"
          } pr-3 py-2 rounded border border-gray-300 bg-white/20 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        />
      </div>
    </div>
  );
}
