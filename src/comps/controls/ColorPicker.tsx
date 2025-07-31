import React from "react";
import { useDispatch } from "react-redux";
import { updateElementSetting } from "../../store/builderSlice";

interface ColorPickerProps {
  label: string;
  elementId: string;
  settingKey: string;
  value: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
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
        value: e.target.value,
      }),
    );
  };

  return (
    <div className="setting-control">
      <label>{label}</label>
      <input type="color" value={value} onChange={handleChange} />
    </div>
  );
};
