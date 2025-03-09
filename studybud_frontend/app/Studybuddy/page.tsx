"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface StudyRequest {
  id: number;
  subject: string;
  description: string;
  postedBy: string;
  email: string;
  availability: string;
}

const StudyHomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [studyRequests, setStudyRequests] = useState<StudyRequest[]>([]);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem("studyRequests") || "[]");
    setStudyRequests(storedRequests.reverse());
  }, []);

  const filteredRequests = studyRequests.filter((request) =>
    request.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[var(--background)] text-black min-h-screen px-6 py-10">
      <h1 className="text-5xl font-bold text-[#2E1A47] text-center mb-6">Find a Study Partner</h1>

      <div className="max-w-3xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by subject or course code..."
          className="w-full p-3 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRequests.map((request) => (
          <div key={request.id} className="bg-white p-6 rounded-lg shadow-lg border">
            <h2 className="text-2xl font-bold">{request.subject}</h2>
            <p className="text-lg text-gray-700">{request.description}</p>
            <p className="text-sm text-gray-500">Posted by: {request.postedBy}</p>
            <p className="text-sm text-gray-500">📅 {request.availability}</p>
            <Link href={`/Contactbuddy/${request.id}`}>
              <button className="mt-3 bg-[#FFD700] text-[#2E1A47] px-6 py-2 rounded-full w-full">
                I'm Interested
              </button>
            </Link>
          </div>
        ))}
      </div>

      <Link href="/Studyrequest">
        <button className="fixed bottom-10 right-10 bg-[#2E1A47] text-white text-3xl rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
          +
        </button>
      </Link>
    </div>
  );
};

export default StudyHomePage;
