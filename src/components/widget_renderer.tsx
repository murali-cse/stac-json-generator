import { renderWidget } from "./render_widget";
import type { Widget } from "../models/widget.model";

interface WidgetRendererProps {
  tree: Widget;
}

export const WidgetRenderer: React.FC<WidgetRendererProps> = ({ tree }) => {
  return <>{renderWidget(tree)}</>;
};
