import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import jsPDF from "jspdf";

function Resume() {
  const location = useLocation();
  const { resumeResponse } = location.state || {};
  const handleDownload=()=>{
    if(!resumeResponse){
      return;
    }
    const doc=new jsPDF({
      orientation:"portrait",
      unit:"pt",
      format:"a4",
    })
     const marginLeft = 40;
    const marginTop = 50;
    const lineHeight = 20;
    const pageWidth = doc.internal.pageSize.getWidth() - marginLeft * 2;
    const textLines = doc.splitTextToSize(resumeResponse, pageWidth);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(textLines, marginLeft, marginTop, { maxWidth: pageWidth });

    doc.save("Generated_Resume.pdf");
  }

  if (!resumeResponse) {
    return <div className="text-center mt-10 text-lg">No Resume Found</div>;
  }

   return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <Navbar />

      <div className="max-w-5xl mx-auto mt-12 bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Generated Resume
          </h1>
          <button
            onClick={handleDownload}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
          >
            Download PDF
          </button>
        </div>

        <div className="border-t border-gray-300 pt-4">
          <pre className="whitespace-pre-wrap text-gray-800 leading-relaxed font-sans text-base">
            {resumeResponse}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Resume;
