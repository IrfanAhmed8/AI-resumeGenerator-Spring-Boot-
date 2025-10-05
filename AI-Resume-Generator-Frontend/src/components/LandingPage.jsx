import React from "react";
import { motion } from "framer-motion";
import { Sparkles, FileText, Rocket, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate=useNavigate();
    const RedirectToGeneratePage=()=>{
        navigate("/GenerateResume");
    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-blue-700"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Build Your Dream Resume <br />
          <span className="text-blue-500">in Seconds</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Powered by AI — Generate a professional, personalized resume instantly.
          Save time, impress recruiters, and land your next big opportunity.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button onClick={RedirectToGeneratePage} className="btn btn-primary btn-lg rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <Rocket className="inline mr-2" /> Generate My Resume
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Why Choose Our Resume Generator?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <Sparkles size={40} className="text-blue-500" />,
              title: "AI-Powered Customization",
              desc: "Our AI tailors your resume based on your skills and experience — no templates, only uniqueness.",
            },
            {
              icon: <FileText size={40} className="text-blue-500" />,
              title: "ATS Friendly Format",
              desc: "Optimized layouts that pass Applicant Tracking Systems used by recruiters.",
            },
            {
              icon: <Star size={40} className="text-blue-500" />,
              title: "Beautifully Designed",
              desc: "Choose from modern, elegant, and minimalist templates that make you stand out.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-all border border-blue-100 rounded-2xl"
            >
              <div className="card-body text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          What Our Users Say
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            {
              name: "Ayesha Khan",
              quote:
                "This tool helped me build a stunning resume in minutes! Landed two interviews already.",
            },
            {
              name: "Rahul Mehta",
              quote:
                "Super clean design and easy to use. The AI suggestions saved me hours!",
            },
            {
              name: "Sneha Patel",
              quote:
                "I never thought making a resume could be this quick. Totally recommend it.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="card bg-white shadow-md hover:shadow-lg transition-all text-center p-6 rounded-2xl"
            >
              <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
              <h4 className="text-blue-700 font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="text-center py-16 bg-blue-700 text-white">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Create Your Perfect Resume?
        </h3>
        <button className="btn bg-white text-blue-700 px-8 py-3 rounded-2xl text-lg hover:bg-gray-200">
          Start Now
        </button>
        <p className="mt-6 text-blue-100">
          © 2025 ResumeAI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
