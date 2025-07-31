import React from "react";
import { useDispatch } from "react-redux";
import { updateElementSetting } from "../../store/builderSlice";

interface TextInputProps {
  label: string;
  elementId: string;
  settingKey: string;
  value: string;
}

export const TextInput: React.FC<TextInputProps> = ({
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
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};
