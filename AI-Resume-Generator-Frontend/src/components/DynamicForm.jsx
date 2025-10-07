import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { generateResume } from "../api/ResumeGenerator";



function DynamicForm({formData,setFormData}) {
  const navigate=useNavigate();

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Form Data Submitted:", formData);

  try {
    const resumeResponse = await generateResume(formData);
    toast.success("Resume generated successfully!");
    navigate("/Resume", { state: { resumeResponse } });
  } catch (error) {
    console.error("Error generating resume:", error);
    toast.error("Failed to generate resume");
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-3xl p-8 border border-blue-100">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
          ✨ Build Your Resume Details
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <fieldset className="fieldset border border-blue-200 rounded-2xl p-6">
            <legend className="fieldset-legend text-xl font-semibold text-blue-600 px-2">
              👤 Personal Information
            </legend>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Position (e.g. Java Developer)"
                value={formData.position}
                onChange={(e) => handleChange("position", e.target.value)}
              />
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="LinkedIn Profile"
                value={formData.linkedin}
                onChange={(e) => handleChange("linkedin", e.target.value)}
              />
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="GitHub Profile"
                value={formData.github}
                onChange={(e) => handleChange("github", e.target.value)}
              />
            </div>
          </fieldset>

          
          <fieldset className="fieldset border border-blue-200 rounded-2xl p-6">
            <legend className="fieldset-legend text-xl font-semibold text-blue-600 px-2">
              📝 Professional Summary
            </legend>
            <textarea
              className="textarea textarea-bordered w-full h-32 mt-4"
              placeholder="Write a short summary about your career and goals..."
              value={formData.summary}
              onChange={(e) => handleChange("summary", e.target.value)}
            />
          </fieldset>

          {/* Skills */}
          <fieldset className="fieldset border border-blue-200 rounded-2xl p-6">
            <legend className="fieldset-legend text-xl font-semibold text-blue-600 px-2">
              ⚙️ Skills
            </legend>
            <input
              type="text"
              className="input input-bordered w-full mt-4"
              placeholder="Comma-separated skills (e.g. Java, React, Spring Boot)"
              value={formData.skills.join(", ")}
              onChange={(e) =>
                handleChange("skills", e.target.value.split(",").map((s) => s.trim()))
              }
            />
          </fieldset>

          {/* Education */}
          <fieldset className="fieldset border border-blue-200 rounded-2xl p-6">
            <legend className="fieldset-legend text-xl font-semibold text-blue-600 px-2">
              🎓 Education
            </legend>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Institution"
                value={formData.education[0].institution}
                onChange={(e) => {
                  const updated = [...formData.education];
                  updated[0].institution = e.target.value;
                  setFormData({ ...formData, education: updated });
                }}
              />
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Degree"
                value={formData.education[0].degree}
                onChange={(e) => {
                  const updated = [...formData.education];
                  updated[0].degree = e.target.value;
                  setFormData({ ...formData, education: updated });
                }}
              />
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Year of Completion"
                value={formData.education[0].year_of_completion}
                onChange={(e) => {
                  const updated = [...formData.education];
                  updated[0].year_of_completion = e.target.value;
                  setFormData({ ...formData, education: updated });
                }}
              />
            </div>
          </fieldset>

          {/* Experience */}
          <fieldset className="fieldset border border-blue-200 rounded-2xl p-6">
            <legend className="fieldset-legend text-xl font-semibold text-blue-600 px-2">
              💼 Experience
            </legend>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Company Name"
                value={formData.experience[0].company_name}
                onChange={(e) => {
                  const updated = [...formData.experience];
                  updated[0].company_name = e.target.value;
                  setFormData({ ...formData, experience: updated });
                }}
              />
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Role"
                value={formData.experience[0].role}
                onChange={(e) => {
                  const updated = [...formData.experience];
                  updated[0].role = e.target.value;
                  setFormData({ ...formData, experience: updated });
                }}
              />
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Duration"
                value={formData.experience[0].duration}
                onChange={(e) => {
                  const updated = [...formData.experience];
                  updated[0].duration = e.target.value;
                  setFormData({ ...formData, experience: updated });
                }}
              />
              <textarea
                className="textarea textarea-bordered w-full md:col-span-2"
                placeholder="Responsibilities"
                value={formData.experience[0].responsibilities.join(", ")}
                onChange={(e) => {
                  const updated = [...formData.experience];
                  updated[0].responsibilities = e.target.value
                    .split(",")
                    .map((r) => r.trim());
                  setFormData({ ...formData, experience: updated });
                }}
              />
            </div>
          </fieldset>

          {/* Portfolio / Links */}
          <fieldset className="fieldset border border-blue-200 rounded-2xl p-6">
            <legend className="fieldset-legend text-xl font-semibold text-blue-600 px-2">
              🌐 Portfolio & Links
            </legend>
            <input
              type="text"
              className="input input-bordered w-full mt-4"
              placeholder="Portfolio URL"
              value={formData.portfolio}
              onChange={(e) => handleChange("portfolio", e.target.value)}
            />
          </fieldset>

          {/* Submit */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="btn btn-primary btn-lg rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DynamicForm;
