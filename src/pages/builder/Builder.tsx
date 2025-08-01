import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { selectElement, selectTemplate } from "../../store/builderSlice.ts";
import ElementView from "../../comps/ElementView.tsx";
import "./Builder.css";
import "../../comps/controls/controls.css";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../header/Header.tsx";
import { templates } from "../../templates";
import ElementSettings from "../../comps/ElementSettings.tsx";
import PageSettings from "../../comps/PageSettings.tsx";

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

  if (!selectedTemplateId || !pageSettings) {
    return null;
  }

  const selectedElement = elements.find((e) => e.id === selectedElementId);

  return (
    <div className="builder-page">
      <Header />
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
