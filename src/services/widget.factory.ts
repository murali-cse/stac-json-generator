import { widgetSchemas } from "../schemas/widget-schemas";
import { v4 as uuid } from "uuid";

export const createWidget = (type: string): unknown => {
  const schema = widgetSchemas[type];
  if (!schema) throw new Error(`Unknown widget type: ${type}`);

  const widget = {
    id: uuid(),
    type,
    ...JSON.parse(JSON.stringify(schema.defaultProps)), // deep copy
  };

  return widget;
};

export const getWidgetSchema = (type: string) => widgetSchemas[type];
