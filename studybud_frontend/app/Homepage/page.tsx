"use client";
import React from "react";
import { FaUserFriends, FaBookOpen } from "react-icons/fa";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="bg-[var(--background)] text-black min-h-screen mt-[-3%] mb-[-35%]">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-600">
          Easily Find University Resources & Study Partners
        </h1>
        <p className="text-xl text-gray-700 mt-4">
          StudyBud helps students navigate university life by connecting with peers for study support and accessing essential resources.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#2E1A47] text-center mb-8 mt-8">
        Built by Students for Students
      </h2>

      <div className="flex justify-center gap-12 max-w-6xl mx-auto">
        {/* Study Buddy Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-[950px] text-center border-4 border-[#2E1A47]">
          <FaUserFriends className="text-6xl text-yellow-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-yellow-600">Never Study Alone Again</h2>
          <p className="text-lg text-gray-700 mt-2">
            Connect with students in the same courses and collaborate on coursework. Studying is easier when done together!
          </p>
        </div>

        {/* University Resources Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-[950px] text-center border-4 border-[#2E1A47]">
          <FaBookOpen className="text-6xl text-yellow-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-yellow-600">Find University Resources</h2>
          <p className="text-lg text-gray-700 mt-2">
            Get quick access to academic support, mental health services, and student clubs—all in one place.
          </p>
        </div>
      </div>

      {/* Buttons Below Cards */}
      <div className="flex justify-center gap-12 mt-6">
        {/* Study Partner Button */}
        <Link href="/Login">
          <button className="bg-[#2E1A47] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300 w-[450px]">
            Find a Study Partner
          </button>
        </Link>

        {/* Resources Button */}
        <Link href="/Resources">
          <button className="bg-[#2E1A47] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300 w-[450px]">
            Explore Resources
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
