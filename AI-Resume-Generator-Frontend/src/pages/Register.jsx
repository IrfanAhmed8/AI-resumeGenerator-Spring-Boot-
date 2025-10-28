import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/ResumeGenerator";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("register Data", formData);

  try {
    const response = await register(formData);
    console.log(response);
    toast.success("Registered successfully!");
    navigate("/");
  } catch (error) {
    console.error("Error storing data:", error);
    toast.error("Could not store data. Please try again.");
  } finally {
    setFormData("");
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Create Account ✨
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2">
              <User className="text-gray-400 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2">
              <Mail className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Password</label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2">
              <Lock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/Login")}
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign in
          </button>
        </p>
      </motion.div>
    </div>
  );
}
