import React, { useState,useContext } from "react";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api/ResumeGenerator";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { setUserName } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await signIn(formData);
    const name = response?.name || response?.user?.name || response?.data?.name || "User";
   if ( name === "Invalid email or password" ||response?.status === 401 ||response?.message === "Invalid email or password"
    ) {
      toast.error("Invalid email or password. Please try again.");
      setFormData({ email: "", password: "" });
      return; 
    }
    else{
      setUserName(name);
    toast.success("Logged in successfully!");
    navigate("/");
    }
    
  } catch (error) {
    console.error("Error logging in:", error);
    toast.error("Could not log in. Please try again.");
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
          Welcome Back 
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
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
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-600 font-semibold hover:underline"
          >
            Create one
          </button>
        </p>
      </motion.div>
    </div>
  );
}
