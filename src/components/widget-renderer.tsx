import { renderWidget } from "./renderWidget";
import type { Widget } from "../models/widget.model";

interface WidgetRendererProps {
  tree: Widget;
}

export const WidgetRenderer: React.FC<WidgetRendererProps> = ({ tree }) => {
  return <>{renderWidget(tree)}</>;
};
