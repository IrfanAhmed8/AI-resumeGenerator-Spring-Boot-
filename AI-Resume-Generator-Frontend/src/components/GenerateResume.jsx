import React, { useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import heroImg from "../assets/ai_resume_illustration.png"; // make sure this image exists
import { generateResume } from "../api/ResumeGenerator";
import toast from "react-hot-toast";

function GenerateResume() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const HandleGenerateResume = async () => {
    console .log("Generating resume with prompt:", prompt);
    try{
      setLoading (true);
      const response = await generateResume(prompt);
      toast.success("Resume generated successfully!");
    }
    catch(error){
      console.error("Error generating resume:", error);
      toast.error("Failed to generate resume. Please try again.");
    }
    finally{
      setLoading(false);
      setPrompt("");
    }
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-12 max-w-7xl mx-auto">
        {/* Left Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4 leading-tight">
            Describe Yourself. <br />
            <span className="text-blue-500">Let AI Craft Your Resume.</span>
          </h1>

          <p className="text-gray-600 mb-8 text-lg max-w-lg mx-auto md:mx-0">
            Write about your experience, skills, education, and career goals.
            Our AI will extract key details and create your professional resume in seconds.
          </p>

          <div className="bg-white shadow-xl rounded-2xl p-6 border border-blue-100">
          
            <textarea disabled={loading}
              className="textarea textarea-bordered w-full h-44 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="E.g., I am a Java developer with 2 years of experience in Spring Boot and REST APIs..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button disabled={loading || !prompt.trim()}
              className="btn btn-primary mt-6 w-full rounded-2xl flex items-center justify-center gap-2 text-lg"
              onClick={HandleGenerateResume}
            >
              <ArrowRightCircle size={22} /> View Extracted Details
            </button>
          </div>

          {/* Tips Section */}
          <div className="mt-6 text-gray-500 text-sm">
            💡 <b>Tip:</b> Include your <b>skills</b>, <b>achievements</b>, and <b>career goals</b> for best results.
          </div>
        </motion.div>

        {/* Right Section: Illustration */}
        <motion.div
          className="flex-1 hidden md:flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroImg}
            alt="AI Resume Illustration"
            className="w-[420px] max-w-full drop-shadow-lg hover:scale-105 transition-transform"
          />
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-gray-500 text-sm text-center border-t border-blue-100">
        © 2025 <span className="font-semibold text-blue-600">ResumeAI</span> | Crafted with ❤️ to help you shine professionally.
      </footer>
    </div>
  );
}

export default GenerateResume;
