import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WidgetSchema } from "../../types/widget-schema";

export interface WidgetPanelState {
  showProperties: boolean;
  selectedWidgetType?: WidgetSchema["type"];
}

interface updatePropertiesPayload {
  showProperties: boolean;
  widgetType?: string;
}

const initialState: WidgetPanelState = {
  showProperties: false,
  selectedWidgetType: undefined,
};

export const widgetPanelSlice = createSlice({
  name: "widget_panel",
  initialState,
  reducers: {
    updateShowProperties: (
      state,
      action: PayloadAction<updatePropertiesPayload>
    ) => {
      state.showProperties = action.payload.showProperties;
      state.selectedWidgetType = action.payload.widgetType;
    },
  },
});

export const { updateShowProperties } = widgetPanelSlice.actions;

export default widgetPanelSlice.reducer;
