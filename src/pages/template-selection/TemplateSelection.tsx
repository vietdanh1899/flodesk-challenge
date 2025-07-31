import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTemplate as selectTemplateAction } from "../../store/builderSlice.ts";
import { templates } from "../../templates";
import type { Template } from "../../types";
import "./TemplateSelection.css";

const TemplateSelection: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectTemplate = (template: Template) => {
    dispatch(selectTemplateAction(template));
    navigate(`/builder/${template.id}`);
  };

  return (
    <div className="template-selection">
      <h2>Choose a template to start</h2>
      <div className="template-list">
        {templates.map((template) => (
          <div
            key={template.id}
            className="template-item"
            onClick={() => handleSelectTemplate(template)}
          >
            <div className="template-item-thumbnail"></div>
            <div className="template-item-name">{template.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelection;
