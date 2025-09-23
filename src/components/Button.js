export default function Button({
  children,
  gradient,
  fullWidth = true,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      className={`${
        fullWidth ? "w-full" : "w-auto"
      } py-2 rounded-lg font-bold text-white transition transform hover:scale-105 ${
        gradient
          ? "bg-gradient-to-r from-indigo-500 to-pink-500"
          : "bg-gray-700 hover:bg-gray-800"
      } ${className}`}
    >
      {children}
    </button>
  );
}
