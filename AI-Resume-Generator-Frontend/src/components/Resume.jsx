import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

// Sample JSON data
const resumeData = {
  name: "Irfan Ahmed",
  position: "Java Developer",
  phone: "9876543210",
  email: "irfan@example.com",
  github: "https://github.com/irfan37",
  linkedin: "https://linkedin.com/in/irfanahmed",
  portfolio: "https://irfanportfolio.com",
  summary:
    "Enthusiastic Java Developer skilled in backend development, REST APIs, and full-stack technologies with a passion for solving complex problems.",
  education: [
    {
      institution: "XYZ University",
      degree: "B.Tech in Computer Science",
      year_of_completion: "2024",
    },
  ],
  skills: [
    "Java",
    "Python",
    "Spring Boot",
    "React",
    "MongoDB",
    "SQL",
    "HTML",
    "CSS",
    "OOP",
    "Operating System",
    "DBMS",
    "Computer Networks",
    "Git",
    "Docker",
  ],
  experience: [
    {
      company: "TechNova",
      role: "Java Developer Intern",
      duration: "June 2023 - Sept 2023",
      responsibilities: [
        "Developed REST APIs for user management and authentication.",
        "Integrated MySQL database with Spring Boot backend.",
        "Collaborated with frontend developers to build React components.",
      ],
    },
  ],
  projects: [
    {
      title: "AI Resume Generator",
      description:
        "Built an AI-powered resume generator using React and Spring Boot that automatically formats resumes based on user-provided data.",
      technologies: ["React", "Spring Boot", "OpenAI API"],
      link: "https://github.com/irfan37/ai-resume-generator",
    },
    {
      title: "Code-Live",
      description:
        "Developed a real-time collaborative code editor using React, Node.js, and WebSockets allowing multiple users to code together.",
      technologies: ["React", "Node.js", "Express", "WebSocket"],
      link: "https://github.com/irfan37/code-live",
    },
  ],
  certifications: [
    {
      title: "Google GenAI Study Jam 2024",
      link: "https://drive.google.com/file/d/example-genai-cert",
    },
    {
      title: "Complete Python Bootcamp",
      link: "https://drive.google.com/file/d/example-python-cert",
    },
  ],
  achievements: [
    "Solved 250+ problems on LeetCode and GeeksforGeeks.",
    "Won 2nd place in college-level hackathon 2024.",
  ],
  languages: ["English", "Hindi"],
};

const Resume = () => {
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: `${resumeData.name}_Resume`,
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <button
        onClick={handlePrint}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download Resume
      </button>

      <div
        ref={resumeRef}
        className="bg-white p-8 shadow-lg max-w-3xl mx-auto"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {/* Name & Position */}
        <h1 className="text-3xl font-bold text-center">{resumeData.name}</h1>
        <h2 className="text-xl text-center text-gray-700 mb-4">
          {resumeData.position}
        </h2>

        {/* Links */}
        <div className="text-center mb-6">
          <a
            href={resumeData.github}
            className="text-blue-600 hover:underline mx-2"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          |
          <a
            href={resumeData.linkedin}
            className="text-blue-600 hover:underline mx-2"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          |
          <a
            href={resumeData.portfolio}
            className="text-blue-600 hover:underline mx-2"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio
          </a>
        </div>

        {/* Professional Summary */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold border-b-2 pb-1 mb-2">
            Professional Summary
          </h3>
          <p>{resumeData.summary}</p>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold border-b-2 pb-1 mb-2">
            Skills
          </h3>
          <ul className="list-disc list-inside grid grid-cols-2 gap-1">
            {resumeData.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold border-b-2 pb-1 mb-2">
            Projects
          </h3>
          {resumeData.projects.map((project, idx) => (
            <div key={idx} className="mb-3">
              <h4 className="font-semibold">{project.title}</h4>
              <p>{project.description}</p>
              <p>
                <strong>Technologies:</strong> {project.technologies.join(", ")}
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

        {/* Certifications */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold border-b-2 pb-1 mb-2">
            Certifications
          </h3>
          <ul className="list-disc list-inside">
            {resumeData.certifications.map((cert, idx) => (
              <li key={idx}>
                <a
                  href={cert.link}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {cert.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold border-b-2 pb-1 mb-2">
            Achievements
          </h3>
          <ul className="list-disc list-inside">
            {resumeData.achievements.map((achieve, idx) => (
              <li key={idx}>{achieve}</li>
            ))}
          </ul>
        </section>

        {/* Languages */}
        <section>
          <h3 className="text-xl font-semibold border-b-2 pb-1 mb-2">
            Languages
          </h3>
          <p>{resumeData.languages.join(", ")}</p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
