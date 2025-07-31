import React from "react";
import { useDispatch } from "react-redux";
import { updatePageSetting } from "../store/builderSlice.ts";

const PageSettings: React.FC<{
  settings: { backgroundColor: string; contentWidth: string };
}> = ({ settings }) => {
  const dispatch = useDispatch();

  const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updatePageSetting({ key: "backgroundColor", value: e.target.value }),
    );
  };

  const handleContentWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updatePageSetting({ key: "contentWidth", value: `${e.target.value}px` }),
    );
  };

  return (
    <div>
      <h3>Page Settings</h3>
      <div className="setting-control">
        <label>Background Color</label>
        <input
          type="color"
          value={settings.backgroundColor}
          onChange={handleBgColorChange}
        />
      </div>
      <div className="setting-control">
        <label>Page width</label>
        <input
          type="range"
          min="400"
          max="1200"
          value={settings.contentWidth.replace("px", "")}
          onChange={handleContentWidthChange}
        />
      </div>
    </div>
  );
};

export default PageSettings;
