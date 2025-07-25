import type { WidgetSchema } from "../types/widget-schema";

export const widgetSchemas: Record<string, WidgetSchema> = {
  scaffold: {
    type: "scaffold",
    defaultProps: {
      body: null,
      appBar: null,
      floatingActionButton: null,
    },
    propertySchema: [],
    childType: "single",
    allowedChildrenTypes: ["padding", "column", "container"],
  },

  padding: {
    type: "padding",
    defaultProps: {
      padding: { top: 24, left: 24, right: 24, bottom: 24 },
      child: null,
    },
    propertySchema: [
      { key: "padding.top", label: "Top", type: "number", default: 24 },
      { key: "padding.left", label: "Left", type: "number", default: 24 },
      { key: "padding.right", label: "Right", type: "number", default: 24 },
      { key: "padding.bottom", label: "Bottom", type: "number", default: 24 },
    ],
    childType: "single",
    allowedChildrenTypes: ["column", "row", "text", "container"],
  },

  column: {
    type: "column",
    defaultProps: {
      crossAxisAlignment: "start",
      children: [],
      spacing: 0,
    },
    propertySchema: [
      {
        key: "crossAxisAlignment",
        label: "Cross Axis",
        type: "select",
        default: "start",
        options: ["start", "center", "end"],
      },
      {
        key: "spacing",
        label: "Spacing",
        type: "number",
        default: 0,
      },
    ],
    childType: "multi",
  },

  row: {
    type: "row",
    defaultProps: {
      spacing: 0,
      children: [],
    },
    propertySchema: [
      {
        key: "spacing",
        label: "Spacing",
        type: "number",
        default: 0,
      },
    ],
    childType: "multi",
  },

  container: {
    type: "container",
    defaultProps: {
      width: "56",
      height: "56",
      decoration: { borderRadius: 12 },
      clipBehavior: "hardEdge",
      child: null,
    },
    propertySchema: [
      { key: "width", label: "Width", type: "string", default: "56" },
      { key: "height", label: "Height", type: "string", default: "56" },
      {
        key: "decoration.borderRadius",
        label: "Border Radius",
        type: "number",
        default: 12,
      },
      {
        key: "clipBehavior",
        label: "Clip",
        type: "string",
        default: "hardEdge",
      },
    ],
    childType: "single",
  },

  image: {
    type: "image",
    defaultProps: {
      src: "",
    },
    propertySchema: [
      { key: "src", label: "Image URL", type: "string", default: "" },
    ],
    childType: null,
  },

  text: {
    type: "text",
    defaultProps: {
      data: "Sample Text",
      style: {
        fontSize: 18,
        fontWeight: "w400",
        height: 1.5,
        color: "#000000",
      },
    },
    propertySchema: [
      { key: "data", label: "Text", type: "string", default: "Sample Text" },
      {
        key: "style.fontSize",
        label: "Font Size",
        type: "number",
        default: 18,
      },
      {
        key: "style.fontWeight",
        label: "Weight",
        type: "select",
        default: "w400",
        options: ["w400", "w500", "w600"],
      },
      {
        key: "style.height",
        label: "Line Height",
        type: "number",
        default: 1.5,
      },
      { key: "style.color", label: "Color", type: "color", default: "#000000" },
    ],
    childType: null,
  },

  sizedBox: {
    type: "sizedBox",
    defaultProps: {
      height: 20,
    },
    propertySchema: [
      { key: "height", label: "Height", type: "number", default: 20 },
    ],
    childType: null,
  },

  spacer: {
    type: "spacer",
    defaultProps: {},
    propertySchema: [],
    childType: null,
  },
};
