export interface WidgetBase {
  id: string;
  type: string;
  child?: Widget;
  children?: Widget[];
  [key: string]: unknown;
}

export interface TextWidget extends WidgetBase {
  type: "text";
  data: string;
  style?: {
    fontSize?: number;
    fontWeight?: string;
    height?: number;
    color?: string;
  };
}

export interface ImageWidget extends WidgetBase {
  type: "image";
  src: string;
}

export interface ContainerWidget extends WidgetBase {
  type: "container";
  width?: number;
  height?: number;
  clipBehavior?: "hardEdge" | string;
  decoration?: {
    borderRadius?: number;
  };
  child?: Widget;
}

export interface ColumnWidget extends WidgetBase {
  type: "column";
  spacing?: number;
  children: Widget[];
}

export interface RowWidget extends WidgetBase {
  type: "row";
  spacing?: number;
  children: Widget[];
}

export interface PaddingWidget extends WidgetBase {
  type: "padding";
  padding: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
  child?: Widget;
}

export interface SizedBoxWidget extends WidgetBase {
  type: "sizedBox";
  height?: number;
  width?: number;
}

export interface SpacerWidget extends WidgetBase {
  type: "spacer";
}

export interface ScaffoldWidget extends WidgetBase {
  type: "scaffold";
  body?: Widget;
  appBar?: Widget;
  floatingActionButton?: Widget;
}
export interface ButtonWidget extends WidgetBase {
  type: "button";
  text: string;
  style?: {
    fontSize?: number;
    fontWeight?: string;
    color?: string;
    backgroundColor?: string;
    padding?: string;
    borderRadius?: number;
  };
  onPressed?: string; // Could be an action ID or route
}

export type Widget =
  | TextWidget
  | ImageWidget
  | ContainerWidget
  | ColumnWidget
  | RowWidget
  | PaddingWidget
  | SizedBoxWidget
  | SpacerWidget
  | ScaffoldWidget
  | ButtonWidget;
