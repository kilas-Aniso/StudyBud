"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface StudyRequest {
  id: number;
  subject: string;
  description: string;
  postedBy: string;
  email: string;
  availability: string;
}

const ContactPage = () => {
  const { id } = useParams(); 
  const [request, setRequest] = useState<StudyRequest | null>(null);

  useEffect(() => {
    if (!id) return;

    const storedRequests = JSON.parse(localStorage.getItem("studyRequests") || "[]");
    const foundRequest = storedRequests.find((r: StudyRequest) => r.id.toString() === id);
    setRequest(foundRequest || null);
  }, [id]);

  return (
    <div className="bg-[var(--background)] text-black min-h-screen flex justify-center items-center">
      {request ? (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
          <h2 className="text-3xl font-bold text-[#2E1A47] mb-4">Connect with {request.postedBy}</h2>
          <p className="text-lg text-gray-700 mb-4">
            You can contact **{request.postedBy}** to discuss a study session!
          </p>
          <p className="text-lg text-gray-700 font-bold">📧 Email: {request.email}</p>
          <p className="text-lg text-gray-700">📅 Availability: {request.availability}</p>
        </div>
      ) : (
        <p className="text-center text-gray-600">Study request not found.</p>
      )}
    </div>
  );
};

export default ContactPage;
