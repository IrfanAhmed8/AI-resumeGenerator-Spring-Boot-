import React from "react";
import { useLocation } from "react-router-dom";

function Resume() {
  const location = useLocation();
  const { resumeResponse } = location.state || {};

  if (!resumeResponse) {
    return <div className="text-center mt-10 text-lg">No Resume Found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">Generated Resume</h1>
      <pre className="whitespace-pre-wrap text-gray-800">
        {resumeResponse}
      </pre>
    </div>
  );
}

export default Resume;
