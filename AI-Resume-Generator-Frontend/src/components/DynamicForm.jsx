import React, { useState } from "react";
import toast, { LoaderIcon } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { generateResume } from "../api/ResumeGenerator";



function DynamicForm({formData,setFormData}) {
  const navigate=useNavigate();
  const [loading,setLoading]=useState(false);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Form Data Submitted:", formData);
     setLoading(true);
  try {
    const resumeResponse = await generateResume(formData);
    toast.success("Resume generated successfully!");
   
    navigate("/Resume", { state: { resumeResponse } });
  } catch (error) {
    console.error("Error generating resume:", error);
    toast.error("Failed to generate resume");
  }
  finally{
    setLoading(false)
  }
};
 const addField = (key, emptyValue) => {
    setFormData((prev) => ({ ...prev, [key]: [...prev[key], emptyValue] }));
  };

  const removeField = (key, index) => {
    const updated = formData[key].filter((_, i) => i !== index);
    setFormData({ ...formData, [key]: updated });
  };


 return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-3xl p-8 border border-blue-100">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
          ✨ Build Your Resume Details
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Info */}
          <fieldset className="border border-blue-200 rounded-2xl p-6">
            <legend className="text-xl font-semibold text-blue-600 px-2">
              👤 Personal Information
            </legend>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input type="text" className="input input-bordered w-full" placeholder="Full Name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} />
              <input type="text" className="input input-bordered w-full" placeholder="Position" value={formData.position} onChange={(e) => handleChange("position", e.target.value)} />
              <input type="email" className="input input-bordered w-full" placeholder="Email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} />
              <input type="text" className="input input-bordered w-full" placeholder="Phone" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} />
              <input type="text" className="input input-bordered w-full" placeholder="LinkedIn" value={formData.linkedin} onChange={(e) => handleChange("linkedin", e.target.value)} />
              <input type="text" className="input input-bordered w-full" placeholder="GitHub" value={formData.github} onChange={(e) => handleChange("github", e.target.value)} />
              <input type="text" className="input input-bordered w-full" placeholder="Portfolio / Codolio" value={formData.portfolio} onChange={(e) => handleChange("portfolio", e.target.value)} />
            </div>
          </fieldset>

          {/* Summary */}
          <fieldset className="border border-blue-200 rounded-2xl p-6">
            <legend className="text-xl font-semibold text-blue-600 px-2">📝 Professional Summary</legend>
            <textarea className="textarea textarea-bordered w-full h-32 mt-4" value={formData.summary} onChange={(e) => handleChange("summary", e.target.value)} />
          </fieldset>

          {/* Skills */}
          <fieldset className="border border-blue-200 rounded-2xl p-6">
            <legend className="text-xl font-semibold text-blue-600 px-2">⚙️ Skills</legend>
            {formData.skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2 mt-3">
                <input type="text" className="input input-bordered w-full" value={skill} onChange={(e) => handleArrayChange("skills", index, e.target.value)} />
                <button type="button" onClick={() => removeField("skills", index)} className="btn btn-error text-white px-3 py-1 rounded-lg">✖</button>
              </div>
            ))}
            <button type="button" className="btn btn-outline btn-primary mt-3" onClick={() => addField("skills", "")}>+ Add Skill</button>
          </fieldset>

          {/* Projects */}
          <fieldset className="border border-blue-200 rounded-2xl p-6">
            <legend className="text-xl font-semibold text-blue-600 px-2">🚀 Projects</legend>
            {formData.projects.map((p, index) => (
              <div key={index} className="space-y-3 mt-4 border border-blue-100 p-4 rounded-xl">
                <input type="text" className="input input-bordered w-full" placeholder="Project Title" value={p.project_title} onChange={(e) => {
                    const updated = [...formData.projects];
                    updated[index].project_title = e.target.value;
                    setFormData({ ...formData, projects: updated });
                  }} />
                <textarea className="textarea textarea-bordered w-full" placeholder="Description" value={p.description} onChange={(e) => {
                    const updated = [...formData.projects];
                    updated[index].description = e.target.value;
                    setFormData({ ...formData, projects: updated });
                  }} />
                <input type="text" className="input input-bordered w-full" placeholder="Technologies (comma separated)" value={p.technologies_used.join(", ")} onChange={(e) => {
                    const updated = [...formData.projects];
                    updated[index].technologies_used = e.target.value.split(",").map((t) => t.trim());
                    setFormData({ ...formData, projects: updated });
                  }} />
                <button type="button" onClick={() => removeField("projects", index)} className="btn btn-error btn-sm mt-2">Remove Project</button>
              </div>
            ))}
            <button type="button" className="btn btn-outline btn-primary mt-3" onClick={() => addField("projects", { project_title: "", description: "", technologies_used: [] })}>+ Add Project</button>
          </fieldset>

          {/* Certifications */}
          <fieldset className="border border-blue-200 rounded-2xl p-6">
            <legend className="text-xl font-semibold text-blue-600 px-2">📜 Certifications</legend>
            {formData.certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2 mt-3">
                <input type="text" className="input input-bordered w-full" value={cert} onChange={(e) => handleArrayChange("certifications", index, e.target.value)} />
                <button type="button" onClick={() => removeField("certifications", index)} className="btn btn-error text-white px-3 py-1 rounded-lg">✖</button>
              </div>
            ))}
            <button type="button" className="btn btn-outline btn-primary mt-3" onClick={() => addField("certifications", "")}>+ Add Certification</button>
          </fieldset>

          {/* Achievements */}
          <fieldset className="border border-blue-200 rounded-2xl p-6">
            <legend className="text-xl font-semibold text-blue-600 px-2">🏆 Achievements</legend>
            {formData.achievements.map((ach, index) => (
              <div key={index} className="flex items-center gap-2 mt-3">
                <input type="text" className="input input-bordered w-full" value={ach} onChange={(e) => handleArrayChange("achievements", index, e.target.value)} />
                <button type="button" onClick={() => removeField("achievements", index)} className="btn btn-error text-white px-3 py-1 rounded-lg">✖</button>
              </div>
            ))}
            <button type="button" className="btn btn-outline btn-primary mt-3" onClick={() => addField("achievements", "")}>+ Add Achievement</button>
          </fieldset>

          {/* Submit */}
          <div className="flex flex-col items-center mt-6">
            <button type="submit" className="btn btn-primary btn-lg rounded-2xl shadow-lg hover:scale-105 transition-transform">
              💾 Save & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DynamicForm;
