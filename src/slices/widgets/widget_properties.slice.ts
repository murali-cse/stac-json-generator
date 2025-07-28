import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  ContainerWidget,
  Widget,
  TextWidget,
} from "../../models/widget.model";
import { v4 as uuid } from "uuid";

const initialState: { prop: Widget } = {
  prop: {
    id: uuid(),
    type: "scaffold",
    appBar: {
      id: "1",
      title: "New Page",
      type: "appbar",
    },
  },
};

export const widgetPropertiesSlice = createSlice({
  name: "widget_properties",
  initialState: initialState,
  reducers: {
    addWidget: (state, action: PayloadAction<Widget>) => {
      if (state.prop.body == null) {
        state.prop.body = action.payload;
      } else {
        // check widget type in body
        if ((state.prop.body as { type: Widget["type"] }).type == "container") {
          const widget: ContainerWidget = state.prop.body as ContainerWidget;

          widget.child = action.payload;
          // widget.height = "auto";
        }
      }
    },
    editWidgetText: (
      state,
      action: PayloadAction<{ id: string; data: string }>
    ) => {
      const id = action.payload.id;
      const widget = state.prop.body as Widget;

      if (widget.type == "text") {
        if (widget.id == id) {
          const textWidget: TextWidget = state.prop.body as TextWidget;
          textWidget.data = action.payload.data;
        }
      }
    },
  },
});

export const { addWidget, editWidgetText } = widgetPropertiesSlice.actions;

export default widgetPropertiesSlice.reducer;
