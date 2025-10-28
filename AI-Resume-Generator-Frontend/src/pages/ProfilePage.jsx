import React from "react";
import Navbar from "../components/Navbar";

function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

    
      <div className="flex flex-col items-center justify-center flex-grow text-center px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
          We’re working on this page 🚧
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
          Soon, you’ll be able to view and edit your profile, track your resume
          history, and download your previous resumes — all in one place.
        </p>

        <div className="mt-8">
          <div   ></div>
          <p className="mt-4 text-blue-600 font-semibold">Coming Soon...</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-gray-500 text-sm text-center border-t border-blue-100">
        © 2025 <span className="font-semibold text-blue-600">ResumeAI</span> | Stay tuned for updates!
      </footer>
    </div>
  );
}

export default ProfilePage;
