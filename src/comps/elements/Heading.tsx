import React from "react";
import type { PageElement } from "../../types";
import { ColorPicker } from "../controls/ColorPicker";
import { TextInput } from "../controls/TextInput";
import { FontSize } from "../controls/FontSize";
import { FontWeight } from "../controls/FontWeight";

export const HeadingView: React.FC<{ element: PageElement }> = ({
  element,
}) => {
  return (
    <h1
      style={{
        color: element.settings.color,
        fontSize: element.settings.fontSize,
        fontWeight: element.settings.fontWeight,
      }}
    >
      {element.settings.text}
    </h1>
  );
};

export const HeadingSettings: React.FC<{ element: PageElement }> = ({
  element,
}) => {
  return (
    <>
      <TextInput
        label="Text"
        elementId={element.id}
        settingKey="text"
        value={element.settings.text}
      />
      <ColorPicker
        label="Color"
        elementId={element.id}
        settingKey="color"
        value={element.settings.color}
      />
      <FontSize
        label="Font Size"
        elementId={element.id}
        settingKey="fontSize"
        value={element.settings.fontSize}
      />
      <FontWeight
        label="Font Weight"
        elementId={element.id}
        settingKey="fontWeight"
        value={element.settings.fontWeight}
      />
    </>
  );
};
