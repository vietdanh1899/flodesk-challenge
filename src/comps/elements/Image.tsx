import React from "react";
import type { PageElement } from "../../types";
import { TextInput } from "../controls/TextInput.tsx";

export const ImageView: React.FC<{ element: PageElement }> = ({ element }) => {
  return (
    <img
      src={element.settings.src}
      alt={element.settings.alt}
      style={{ maxWidth: "100%" }}
    />
  );
};

export const ImageSettings: React.FC<{ element: PageElement }> = ({
  element,
}) => {
  return (
    <>
      <TextInput
        label="Image URL"
        elementId={element.id}
        settingKey="src"
        value={element.settings.src}
      />
      <TextInput
        label="Alt Text"
        elementId={element.id}
        settingKey="alt"
        value={element.settings.alt}
      />
    </>
  );
};
