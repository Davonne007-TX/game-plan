import React from "react";
import { Link } from "react-router-dom";

export default function GoHome() {
  return (
    <Link
      to="/"
      className="text-2xl lg:text-4xl hover:text-blue-300 font-lobster"
    >
      Home
    </Link>
  );
}
