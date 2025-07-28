import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WidgetType } from "../../models/widget.model";

// ============ interfaces ------------------
interface WidgetPanelState {
  showProperties: boolean;
  selectedWidgetType?: WidgetType;
  id: string;
}

interface updatePropertiesPayload {
  id?: string;
  showProperties: boolean;
  widgetType?: WidgetType;
}

// ===========================================

const initialState: WidgetPanelState = {
  showProperties: false,
  selectedWidgetType: undefined,
  id: "",
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
