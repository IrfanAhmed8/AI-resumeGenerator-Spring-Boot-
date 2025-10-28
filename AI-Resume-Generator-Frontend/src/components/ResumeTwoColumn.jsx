import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useForm } from "../context/formContext";
import toast, { Toaster } from "react-hot-toast";

const ResumeTwoColumn = () => {
  const resumeRef = useRef();
  const { formData } = useForm();

 const handlePrint = useReactToPrint({
  contentRef: resumeRef,
  documentTitle: `${formData.name || "My"}_Resume`,
  onAfterPrint: () => {
    toast.success("Resume Downloaded Successfully!");
  },
});


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <button
        onClick={handlePrint}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download Resume
      </button>

      {/* Resume Content */}
      <div
        ref={resumeRef}
        className="bg-white p-8 shadow-lg max-w-5xl mx-auto"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {/* Name and Links */}
        <div className="text-center border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold">{formData.name}</h1>
          <h2 className="text-lg text-gray-700 mb-2">{formData.position}</h2>
          <div>
            {formData.github && (
              <a
                href={formData.github}
                className="text-blue-600 hover:underline mx-2"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}
            {formData.linkedin && (
              <>
                |
                <a
                  href={formData.linkedin}
                  className="text-blue-600 hover:underline mx-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </>
            )}
            {formData.portfolio && (
              <>
                |
                <a
                  href={formData.portfolio}
                  className="text-blue-600 hover:underline mx-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
              </>
            )}
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT COLUMN */}
          <div>
            {/* Summary */}
            <section className="mb-6">
              <h3 className="text-xl font-semibold border-b-2 pb-1 mb-2">
                Professional Summary
              </h3>
              <p>{formData.summary}</p>
            </section>

            {/* Projects */}
            <section className="mb-6">
              <h3 className="text-xl font-semibold border-b-2 pb-1 mb-2">
                Projects
              </h3>
              {formData.projects.map((project, idx) => (
                <div key={idx} className="mb-3">
                  <h4 className="font-semibold">{project.project_title}</h4>
                  <p>{project.description}</p>
                  <p>
                    <strong>Technologies:</strong>{" "}
                    {project.technologies_used.join(", ")}
                  </p>
                  <a
                    href={project.link}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Project Link
                  </a>
                </div>
              ))}
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {/* Education */}
            <section className="mb-6">
              <h3 className="text-xl font-semibold border-b-2 pb-1 mb-2">
                Education
              </h3>
              {formData.education?.map((edu, idx) => (
                <div key={idx} className="mb-3">
                  <p className="font-semibold">{edu.degree}</p>
                  <p>{edu.institution}</p>
                  <p className="text-sm text-gray-600">{edu.year}</p>
                </div>
              ))}
            </section>

            {/* Skills */}
            <section className="mb-6">
              <h3 className="text-xl font-semibold border-b-2 pb-1 mb-2">
                Skills
              </h3>
              <ul className="list-disc list-inside grid grid-cols-2 gap-1">
                {formData.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </section>

            {/* Certifications */}
            {formData.certifications?.length > 0 && (
              <section className="mb-6">
                <h3 className="text-xl font-semibold border-b-2 pb-1 mb-2">
                  Certifications
                </h3>
                <ul className="list-disc list-inside">
                  {formData.certifications.map((cert, idx) => (
                    <li key={idx}>{cert}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Achievements */}
            {formData.achievements?.length > 0 && (
              <section className="mb-6">
                <h3 className="text-xl font-semibold border-b-2 pb-1 mb-2">
                  Achievements
                </h3>
                <ul className="list-disc list-inside">
                  {formData.achievements.map((achieve, idx) => (
                    <li key={idx}>{achieve}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Languages */}
            {formData.languages?.length > 0 && (
              <section className="mb-6">
                <h3 className="text-xl font-semibold border-b-2 pb-1 mb-2">
                  Languages
                </h3>
                <ul className="list-disc list-inside">
                  {formData.languages.map((lang, idx) => (
                    <li key={idx}>{lang}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTwoColumn;
