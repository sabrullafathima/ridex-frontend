// src/components/Layout.js
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-indigo-900 to-pink-900 p-6 flex justify-center items-start overflow-hidden">
      <div className="w-full max-w-7xl">{children}</div>
    </div>
  );
}
