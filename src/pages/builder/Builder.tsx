import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { selectElement, selectTemplate } from "../../store/builderSlice.ts";
import ElementView from "../../comps/ElementView.tsx";
import "./Builder.css";
import "../../comps/controls/controls.css";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../header/Header.tsx";
import "../header/Header.css";
import { templates } from "../../templates";
import ElementSettings from "../../comps/ElementSettings.tsx";
import PageSettings from "../../comps/PageSettings.tsx";

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

const Builder: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedTemplateId, pageSettings, elements, selectedElementId } =
    useSelector((state: RootState) => state.builder);
  const navigate = useNavigate();
  const { templateId } = useParams<{ templateId: string }>();

  useEffect(() => {
    if (!selectedTemplateId && templateId) {
      const template = templates.find((t) => t.id === templateId);
      if (template) {
        dispatch(selectTemplate(template));
      } else {
        navigate("/");
      }
    } else if (!selectedTemplateId && !templateId) {
      navigate("/");
    }
  }, [selectedTemplateId, templateId, dispatch, navigate]);

  const handleDeselect = () => {
    dispatch(selectElement(null));
  };

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

  if (!selectedTemplateId || !pageSettings) {
    return null;
  }

  const selectedElement = elements.find((e) => e.id === selectedElementId);

  return (
    <div className="builder-page">
      <Header onExport={handleExport} />
      <div className="builder-main-content">
        <div className="canvas" onClick={handleDeselect}>
          <div
            className="page-preview"
            style={{
              backgroundColor: pageSettings?.backgroundColor,
              width: pageSettings?.contentWidth,
            }}
          >
            {elements.map((element) => (
              <ElementView key={element.id} element={element} />
            ))}
          </div>
        </div>
        <div className="settings-panel">
          {selectedElement ? (
            <ElementSettings element={selectedElement} />
          ) : (
            pageSettings && <PageSettings settings={pageSettings} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Builder;
