"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchResources } from "../Utilities/utils";

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
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch resources from API
  useEffect(() => {
    const loadResources = async () => {
      const data = await fetchResources();
      if (data) setResources(data);
    };
    loadResources();
  }, []);

  // Filter resources based on category and search term
  const filteredResources = resources.filter((resource: any) => {
    const matchesCategory =
      selectedCategory === "All" || resource.category === selectedCategory;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (resource.tags && resource.tags.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[var(--background)] text-black min-h-screen px-6 py-10">
      {/* Page Header */}
      <h1 className="text-5xl font-bold text-[#2E1A47] text-center mb-6">
        Find University Resources
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
        Search and filter through university services, clubs, academic support, and more.
      </p>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search resources..."
          className="w-full px-4 py-3 border-2 border-[#2E1A47] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Filters */}
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

      {/* Resource Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource: any) => (
            <div
              key={resource.id}
              className="bg-white shadow-lg rounded-lg p-6 border-4 border-[#2E1A47] text-center"
            >
              <h2 className="text-2xl font-bold text-[#2E1A47]">
                {resource.title}
              </h2>
              <p className="text-lg text-gray-700 mt-2">{resource.description}</p>

              {/* Display Tags */}
              {resource.tags && (
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {resource.tags.split(",").map((tag: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-[#FFD700] text-[#2E1A47] rounded-full text-sm font-semibold">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}

              {/* Access Resource Button */}
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
