import { Routes, Route } from "react-router-dom";
import Builder from "./pages/builder/Builder.tsx";
import TemplateSelection from "./pages/template-selection/TemplateSelection.tsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TemplateSelection />} />
      <Route path="/builder/:templateId" element={<Builder />} />
    </Routes>
  );
}

export default App;
