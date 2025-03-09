"use client";
import React, { useState } from "react";
import Link from "next/link";

const resources = [
  {
    id: 1,
    title: "Student Mental Health Services",
    description: "One-on-one counseling and therapy for students at Queen’s.",
    category: "Mental Health",
    link: "https://www.queensu.ca/studentwellness/mental-health",
  },
  {
    id: 2,
    title: "Student Academic Success Services (SASS)",
    description: "Writing support and academic coaching to improve study skills.",
    category: "Academic Support",
    link: "https://sass.queensu.ca",
  },
  {
    id: 3,
    title: "Queen’s University Library",
    description: "Access to research materials, study spaces, and librarian support.",
    category: "Academic Support",
    link: "https://library.queensu.ca",
  },
  {
    id: 4,
    title: "AMS Clubs Directory",
    description: "Find and join student clubs at Queen’s University.",
    category: "Clubs & Student Life",
    link: "https://www.myams.org/clubs/club-directory/",
  },
  {
    id: 5,
    title: "Student Wellness Medical Services",
    description: "On-campus health clinic offering medical care for students.",
    category: "Health & Wellness",
    link: "https://www.queensu.ca/studentwellness/medical",
  },
  {
    id: 6,
    title: "Queen’s Career Services",
    description: "Career advising, job postings, and networking events.",
    category: "Career & Employment",
    link: "https://careers.queensu.ca",
  },
  {
    id: 7,
    title: "Queen’s IT Services",
    description: "Campus-wide IT support, Wi-Fi, and software resources.",
    category: "Computing & IT Support",
    link: "https://www.queensu.ca/its",
  },
  {
    id: 8,
    title: "Queen’s LinkedIn Learning Access",
    description: "Free online courses for Queen’s students on LinkedIn Learning.",
    category: "Online Learning",
    link: "https://www.queensu.ca/its/software-services/linkedin-learning",
  },
];

const categories = [
  "All",
  "Mental Health",
  "Academic Support",
  "Clubs & Student Life",
  "Health & Wellness",
  "Career & Employment",
  "Computing & IT Support",
  "Online Learning",
];

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      selectedCategory === "All" || resource.category === selectedCategory;
    const matchesSearch = resource.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[var(--background)] text-black min-h-screen px-6 py-10">
      <h1 className="text-5xl font-bold text-[#2E1A47] text-center mb-6">
        Find University Resources
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
        Search and filter through university services, clubs, academic support, and more.
      </p>

      <div className="max-w-3xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search resources..."
          className="w-full px-4 py-3 border-2 border-[#2E1A47] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 text-lg rounded-full font-semibold transition ${
              selectedCategory === category
                ? "bg-[#2E1A47] text-white"
                : "bg-white border border-[#2E1A47] text-[#2E1A47] hover:bg-[#2E1A47] hover:text-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white shadow-lg rounded-lg p-6 border-4 border-[#2E1A47] text-center"
            >
              <h2 className="text-2xl font-bold text-[#2E1A47]">
                {resource.title}
              </h2>
              <p className="text-lg text-gray-700 mt-2">{resource.description}</p>
              <Link href={resource.link} target="_blank">
                <button className="mt-4 bg-[#FFD700] text-[#2E1A47] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#e6c200] transition duration-300">
                  Access Resource
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-2">
            No resources found. Try a different search or category.
          </p>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;
