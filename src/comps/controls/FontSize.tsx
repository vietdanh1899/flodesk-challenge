import React from "react";
import { useDispatch } from "react-redux";
import { updateElementSetting } from "../../store/builderSlice";

interface FontSizeProps {
  label: string;
  elementId: string;
  settingKey: string;
  value: string;
}

export const FontSize: React.FC<FontSizeProps> = ({
  label,
  elementId,
  settingKey,
  value,
}) => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateElementSetting({
        elementId,
        key: settingKey,
        value: `${e.target.value}px`,
      }),
    );
  };

  return (
    <div className="setting-control">
      <label>{label}</label>
      <input
        type="range"
        min="10"
        max="100"
        value={value.replace("px", "")}
        onChange={handleChange}
      />
    </div>
  );
};
