import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "../../store/builderSlice.ts";
import type { RootState } from "../../store";
import "./ElementWrapper.css";

interface ElementWrapperProps {
  elementId: string;
  children: React.ReactNode;
}

const ElementWrapper: React.FC<ElementWrapperProps> = ({
  elementId,
  children,
}) => {
  const dispatch = useDispatch();
  const { selectedElementId } = useSelector(
    (state: RootState) => state.builder,
  );
  const isSelected = selectedElementId === elementId;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(selectElement(elementId));
  };

  return (
    <div
      className={`element-wrapper ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default ElementWrapper;
