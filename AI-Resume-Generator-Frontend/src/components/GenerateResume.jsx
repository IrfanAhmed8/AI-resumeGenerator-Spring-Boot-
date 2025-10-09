import React, { useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import heroImg from "../assets/ai_resume_illustration.png"; // make sure this image exists
import { generateFormData} from "../api/ResumeGenerator";
import toast from "react-hot-toast";
import DynamicForm from "./DynamicForm";
import { useFormData } from "./formData";
const initialData = {
     name: "Irfan Ahmed",
    position: "Java Developer",
    email: "jafriirfan37@gmail.com",
    phone: "+91 8424097584",
    linkedin: "https://www.linkedin.com/in/irfan37/",
    github: "https://github.com/IrfanAhmed8",
    portfolio: "https://codolio.com/profile/Irfan66",
    summary:
      "Detail-oriented Java Developer with a strong foundation in DSA and hands-on experience in Spring Boot, Microservices, and Full-Stack Development.",
    education: [
      {
        institution: "Don Bosco Institute of Technology, University of Mumbai",
        degree: "Bachelor of Engineering in Computer Science",
        duration: "Aug 2022 – May 2026 (Expected)",
        cgpa: "8.56 (up to 4th semester)",
      },
    ],
    skills: [
      "Java",
      "Python",
      "C++",
      "JavaScript",
      "Spring Boot",
      "React.js",
      "MongoDB",
      "MySQL",
      "Docker",
      "Git",
    ],
    projects: [
      {
        project_title: "NEWS-Mail",
        description:
          "Automated news summarization system using Flask and Hugging Face Transformers.",
        technologies_used: ["Python", "Flask", "Hugging Face", "JavaScript"],
      },
    ],
    certifications: [
      "Google GenAI Study Jam 2024 — Completed Generative AI Fundamentals",
    ],
    achievements: [
      "Solved 220+ DSA problems across LeetCode, GFG, Codeforces, and CodeChef",
      "Built a Unity game for TEKNACK Game Development Competition (2024)",
    ],

};
function GenerateResume() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const {formData, updateFormData} = useFormData();
  const [displayFrom,setDisplayFrom]=useState(false);


  const HandleGenerateResume = async () => {
    console .log("Generating resume with prompt:", prompt);
    try{
      setLoading (true);
      const response = await generateFormData(prompt);
      console.log(response);
      updateFormData(response);
      toast.success("Resume generated successfully!");
      setDisplayFrom(true);
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
      
      {displayFrom &&(<DynamicForm formData={formData} updateFormData={updateFormData} /> )} 
     
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
            <div className="flex flex-col items-center mt-6">
    {loading && (
      <div className="loading-bars border-4 border-t-transparent border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
    )}

    <button
      disabled={loading || !prompt.trim()}
      className={`btn btn-primary mt-6 w-full rounded-2xl flex items-center justify-center gap-2 text-lg ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={HandleGenerateResume}
    >
      {loading ? "Generating..." : "View Extracted Details"}
      {!loading && <ArrowRightCircle size={22} />}
    </button>
  </div>
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
