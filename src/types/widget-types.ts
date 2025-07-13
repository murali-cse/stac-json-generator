import type { Widget } from "../models/widget.model";

export interface WidgetProps {
  id: string; // Unique identifier for DnD
  title: string; // Display name (e.g., "Text", "Column")
  icon: string; // Icon name (e.g., fluent:text-t-16-filled)
  size?: number;
  widget?: Widget; // Actual JSON object for the widget
}
