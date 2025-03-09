"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
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
    <div className="flex justify-center bg-[var(--background)] text-black">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 border border-gray-300">
        <h2 className="text-3xl font-bold text-center text-[#2E1A47] mb-4">Sign Up</h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E1A47]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email (must be @queensu.ca)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E1A47]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Student Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E1A47]"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E1A47]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-[#2E1A47] text-white px-4 py-2 rounded-md hover:bg-[#1f1233] transition">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-3 text-gray-600">
          Already have an account?{" "}
          <a href="/Login" className="text-[#2E1A47] font-bold hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
