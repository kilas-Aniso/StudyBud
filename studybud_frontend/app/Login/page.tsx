"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.endsWith("@queensu.ca")) {
      alert("Please use a Queen's University email (e.g., name@queensu.ca).");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    router.push("/Studybuddy");
  };

  return (
    <div className="bg-[var(--background)] text-black flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center border border-gray-300">
        <h2 className="text-3xl font-bold text-[#2E1A47] mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email (must be @queensu.ca)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E1A47]"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E1A47]"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#2E1A47] text-white px-4 py-2 rounded-md hover:bg-[#1f1233] transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link href="/Signup">
            <span className="text-[#2E1A47] font-bold cursor-pointer hover:underline">
              Sign up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
