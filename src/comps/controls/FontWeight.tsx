import React from "react";
import { useDispatch } from "react-redux";
import { updateElementSetting } from "../../store/builderSlice";

interface FontWeightProps {
  label: string;
  elementId: string;
  settingKey: string;
  value: number;
}

const fontWeightMap: { [key: string]: number } = {
  Light: 100,
  Regular: 400,
  Bold: 700,
};

export const FontWeight: React.FC<FontWeightProps> = ({
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
        value: parseInt(e.target.value, 10),
      }),
    );
  };

  return (
    <div className="setting-control">
      <label>{label}</label>
      <div className="font-weight-options">
        {Object.entries(fontWeightMap).map(([weightName, weightValue]) => (
          <label key={weightName}>
            <input
              type="radio"
              name={`${elementId}-${settingKey}`}
              value={weightValue}
              checked={value === weightValue}
              onChange={handleChange}
            />
            {weightName}
          </label>
        ))}
      </div>
    </div>
  );
};
