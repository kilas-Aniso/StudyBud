"use client";
import React from "react";
import { FaUniversity, FaUsers, FaLaptop } from "react-icons/fa"; 

const About = () => {
  return (
    <div className="bg-[var(--background)] text-black min-h-screen  mb-[-13%]">
      <h1 className="text-5xl font-bold text-[#2E1A47] text-center mb-6">Why StudyBud</h1>

      <p className="text-lg text-gray-700 max-w-3xl text-center mx-auto mb-10">
        University can feel overwhelming; finding a study buddy, preparing for exams, or even knowing where to access 
        essential resources isn't always easy. StudyBud connects you with students in your courses for collaborative 
        learning while gathering key university resources including academic support, mental health services, and student clubs all 
        in one place.
        </p>

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2E1A47]">Explore Our Key Features</h2>
        <p className="text-lg text-gray-700 mt-2">
          Get access to essential resources, connect with study partners and experience an intuitive platform designed for student success.
        </p>
      </div>

      <div className="mt-10 flex justify-center gap-8 flex-wrap">
        <div className="bg-white shadow-lg rounded-lg p-6 w-72 text-center border-4 border-[#2E1A47]">
          <FaUniversity className="text-5xl text-[#2E1A47] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#2E1A47]">University Support Services</h2>
          <p className="text-lg text-gray-700 mt-2">
            Easily search and access campus resources like mental health services, academic support and student clubs.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 w-72 text-center border-4 border-yellow-600">
          <FaUsers className="text-5xl text-yellow-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-yellow-600">Find Your Study Partner</h2>
          <p className="text-lg text-gray-700 mt-2">
            Connect with students in your courses for group study sessions and collaborative learning.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 w-72 text-center border-4 border-[#2E1A47]">
          <FaLaptop className="text-5xl text-[#2E1A47] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#2E1A47]">Seamless Student Experience</h2>
          <p className="text-lg text-gray-700 mt-2">
            A user-friendly platform designed to help you easily navigate academic and social resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
