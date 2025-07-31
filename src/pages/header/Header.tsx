import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

interface HeaderProps {
  onExport: () => void;
}

const Header: React.FC<HeaderProps> = ({ onExport }) => {
  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">Builder</Link>
      </div>
      <button className="export-button" onClick={onExport}>
        Export
      </button>
    </header>
  );
};

export default Header;
