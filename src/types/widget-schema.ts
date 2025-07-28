export type WidgetPropertyType =
  | "string"
  | "number"
  | "boolean"
  | "color"
  | "select";

export interface WidgetPropertyConfig {
  key: string;
  label: string;
  type: WidgetPropertyType;
  default: unknown;
  options?: string[]; // for select
}

export interface WidgetSchema {
  type: string;
  defaultProps: Record<string, unknown>;
  propertySchema: WidgetPropertyConfig[];
  childType: "single" | "multi" | null;
  hasText: boolean;
  allowedChildrenTypes?: string[];
}
