import { useSelector } from "react-redux";
import RenderProperties from "../../components/widget-panel/render_properties";
import RenderWidgets from "../../components/widget-panel/render_widgets";
import type { RootState } from "../../store";

const WidgetsBar = () => {
  const { showProperties, selectedWidgetType } = useSelector(
    (state: RootState) => state.widgetPanel
  );

  return showProperties ? (
    <RenderProperties type={selectedWidgetType ?? ""} />
  ) : (
    <RenderWidgets />
  );
};

export default WidgetsBar;
