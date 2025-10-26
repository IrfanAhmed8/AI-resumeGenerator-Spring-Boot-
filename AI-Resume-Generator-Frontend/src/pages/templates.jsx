import React from "react";
import template1 from "../assets/template1.jpg";
import template2 from "../assets/template2.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Templates() {
  const navigate = useNavigate();

  const moveToResume1 = () => {
    navigate("/Resume");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Page Container */}
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Choose Your Resume Template
        </h1>

        {/* Section: Most Used Templates */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-l-4 border-blue-600 pl-3">
            Most Used Templates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Template Card 1 */}
            <div
              className="group relative bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center"
              onClick={moveToResume1}
            >
              <img
                src={template1}
                alt="Template 1"
                className="w-full h-64 object-contain p-3 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-semibold text-lg">
                Use This Template
              </div>
            </div>

            {/* Template Card 2 */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex items-center justify-center">
              <img
                src={template2}
                alt="Template 2"
                className="w-full h-64 object-contain p-3 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-semibold text-lg">
                Use This Template
              </div>
            </div>

            {/* Duplicate more templates as needed */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex items-center justify-center">
              <img
                src={template1}
                alt="Template 3"
                className="w-full h-64 object-contain p-3 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-semibold text-lg">
                Use This Template
              </div>
            </div>

            <div className="group relative bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex items-center justify-center">
              <img
                src={template2}
                alt="Template 4"
                className="w-full h-64 object-contain p-3 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-semibold text-lg">
                Use This Template
              </div>
            </div>
          </div>
        </section>

        {/* Section: Newly Added Templates */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-l-4 border-green-600 pl-3">
            Newly Added Templates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[template1, template2, template1, template2].map((template, i) => (
              <div
                key={i}
                className="group relative bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                onClick={moveToResume1}
              >
                <img
                  src={template}
                  alt={`Template ${i + 1}`}
                  className="w-full h-64 object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-semibold text-lg">
                  Use This Template
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Templates;
