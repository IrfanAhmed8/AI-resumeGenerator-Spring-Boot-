import React from "react";
import template1 from "../assets/template1.jpg";
import template2 from "../assets/template2.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import toast, { Toaster } from "react-hot-toast";

function Templates() {
  const navigate = useNavigate();

  const moveToResume1 = () => {
    toast.success("Resume Generated Successfully!");
    navigate("/Resume");
  };
  const moveToResume2 = () => {
    navigate("/ResumeTwoColumn");
    toast.success("Resume Generated Successfully!");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Choose Your Resume Template
        </h1>

        {/* Section: Most Used */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-l-4 border-blue-600 pl-3">
            Most Used Templates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Template Card */}
            <div
              className="group relative bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={moveToResume1}
            >
              <img
                src={template1}
                alt="Template 1"
                className="w-full h-60 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-semibold text-lg">
                Use This Template
              </div>
            </div>

            <div className="group relative bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300" onClick={moveToResume2}>
              <img
                src={template2}
                alt="Template 2"
                className="w-full h-60 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-semibold text-lg">
                Use This Template
              </div>
            </div>
          </div>
        </section>

        {/* Section: Newly Added */}
        <section>
          <h2 className="text-5xl font-bold text-gray-1000 mb-4 text-center">
            MORE TEMPLATES COMING SOON! 
          </h2>
          
         
        </section>
      </div>
    </div>
  );
}

export default Templates;
