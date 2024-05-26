import React, { useState } from "react";
import "./Notes.css";

const Notes = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const pdfs = [
    {
      name: "Gifts Differing MBTI",
      file: process.env.PUBLIC_URL + "/MBTI.pdf",
    },
    { name: "Thinking Fast/Slow", file: process.env.PUBLIC_URL + "/THINK.pdf" },
    // Add more PDF objects as needed
  ];

  const handlePdfChange = (event) => {
    const selectedIndex = event.target.value;
    if (selectedIndex === null) {
      setSelectedPdf(null); // Reset selectedPdf if default option is selected
    } else {
      setSelectedPdf(pdfs[selectedIndex].file);
    }
  };

  return (
    <div className="pdf-container">
      <select onChange={handlePdfChange}>
        <option value={null}>Select a PDF</option>
        {pdfs.map((pdf, index) => (
          <option key={index} value={index}>
            {pdf.name}
          </option>
        ))}
      </select>
      {selectedPdf && (
        <iframe
          title="PDF Viewer"
          src={selectedPdf}
          width="100%"
          height="800vh"
          frameBorder="0"
        >
          This browser does not support PDFs. Please download the PDF to view
          it.
        </iframe>
      )}
    </div>
  );
};

export default Notes;
