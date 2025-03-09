"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const StudyRequestForm = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [email, setEmail] = useState("");
  const [availability, setAvailability] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!subject || !description || !postedBy || !email || !availability) {
      alert("Please fill out all fields.");
      return;
    }

    const newRequest = {
      id: Date.now(),
      subject,
      description,
      postedBy,
      email,
      availability,
    };

    const existingRequests = JSON.parse(localStorage.getItem("studyRequests") || "[]");
    const updatedRequests = [...existingRequests, newRequest];
    localStorage.setItem("studyRequests", JSON.stringify(updatedRequests));

    router.push("/Studybuddy");
  };

  return (
    <div className="bg-[var(--background)] text-black min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-[#2E1A47] mb-6">Post a Study Request</h2>

        <input
          type="text"
          placeholder="Subject or Course Code"
          className="w-full p-3 border rounded-lg mb-4"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <textarea
          placeholder="Short description"
          className="w-full p-3 border rounded-lg mb-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg mb-4"
          value={postedBy}
          onChange={(e) => setPostedBy(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email (for contact)"
          className="w-full p-3 border rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="datetime-local"
          placeholder="Availability"
          className="w-full p-3 border rounded-lg mb-4"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          required
        />

        <button type="submit" className="w-full bg-[#2E1A47] text-white py-3 rounded-lg">
          Post Request
        </button>
      </form>
    </div>
  );
};

export default StudyRequestForm;
