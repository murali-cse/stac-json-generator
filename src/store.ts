import { configureStore } from "@reduxjs/toolkit";
import widgetPanelReducer from "./slices/widget-panel/widget_panel.slice";
import widgetPropertiesReducer from "./slices/widgets/widget_properties.slice";

export const store = configureStore({
  reducer: {
    widgetPanel: widgetPanelReducer,
    widgetProperties: widgetPropertiesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
