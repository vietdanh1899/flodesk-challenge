import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const exportStyle = `
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.canvas {
  min-height: 100vh;
  background-color: #f0f2f5;
  overflow-y: auto;
  display: flex;
  justify-content: center;
}

.page-preview {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;}
`;

const handleExport = () => {
  const preview = document.querySelector(".canvas");
  if (preview) {
    // Wrap the preview HTML with the styles
    const html = `<!DOCTYPE html><html><head><style>${exportStyle}</style></head><body>${preview.outerHTML}</body></html>`;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "page.html";
    a.click();
    URL.revokeObjectURL(url);
  }
};

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">Builder</Link>
      </div>
      <button className="export-button" onClick={handleExport}>
        Export
      </button>
    </header>
  );
};

export default Header;
