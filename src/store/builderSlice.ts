import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BuilderState, Template } from "../types";

const initialState: BuilderState = {
  selectedTemplateId: null,
  pageSettings: null,
  elements: [],
  selectedElementId: null,
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    selectTemplate: (state, action: PayloadAction<Template>) => {
      state.selectedTemplateId = action.payload.id;
      state.pageSettings = action.payload.pageSettings;
      state.elements = action.payload.elements;
      state.selectedElementId = null;
    },
    updatePageSetting: (
      state,
      action: PayloadAction<{ key: string; value: any }>,
    ) => {
      if (state.pageSettings) {
        (state.pageSettings as any)[action.payload.key] = action.payload.value;
      }
    },
    selectElement: (state, action: PayloadAction<string | null>) => {
      state.selectedElementId = action.payload;
    },
    updateElementSetting: (
      state,
      action: PayloadAction<{ elementId: string; key: string; value: any }>,
    ) => {
      const element = state.elements.find(
        (e) => e.id === action.payload.elementId,
      );
      if (element) {
        element.settings[action.payload.key] = action.payload.value;
      }
    },
  },
});

export const {
  selectTemplate,
  updatePageSetting,
  selectElement,
  updateElementSetting,
} = builderSlice.actions;
export default builderSlice.reducer;
