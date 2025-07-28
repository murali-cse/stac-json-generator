import { type CSSProperties, type ReactNode } from "react";
import type { WidgetType } from "../models/widget.model";

interface HoverWidgetType {
  text: string;
  type: WidgetType;
  id: string;
  color: "blue" | "red" | "orange" | "green";
  style?: CSSProperties;
  onClick?: (id: string) => void;
  children: ReactNode;
}

interface HoverConfigProps {
  group: string;
  label: string;
  border: string;
  zIndex?: string;
}

const HoverWidget = ({
  text,
  type,
  color,
  style,
  id,
  onClick,
  children,
}: HoverWidgetType) => {
  const hoverConfig: Record<WidgetType, HoverConfigProps> = {
    appbar: {
      group: "group/appbar",
      label: "hidden group-hover/appbar:block",
      border: "opacity-0 group-hover/appbar:opacity-100",
    },
    column: {
      group: "group/column",
      label: "hidden group-hover/column:block",
      border: "opacity-0 group-hover/column:opacity-100",
      zIndex: "z-10",
    },
    row: {
      group: "group/row",
      label: "hidden group-hover/row:block",
      border: "opacity-0 group-hover/row:opacity-100",
    },
    text: {
      group: "group/text",
      label: "hidden group-hover/text:block",
      border: "opacity-0 group-hover/text:opacity-100",
    },
    container: {
      group: "group/container",
      label: "hidden group-hover/container:block",
      border: "opacity-0 group-hover/container:opacity-100",
    },
    scaffold: {
      group: "group/container",
      label: "hidden group-hover/container:block",
      border: "opacity-0 group-hover/container:opacity-100",
    },
    spacer: {
      group: "group/container",
      label: "hidden group-hover/container:block",
      border: "opacity-0 group-hover/container:opacity-100",
    },
    button: {
      group: "group/container",
      label: "hidden group-hover/container:block",
      border: "opacity-0 group-hover/container:opacity-100",
    },
    image: {
      group: "group/container",
      label: "hidden group-hover/container:block",
      border: "opacity-0 group-hover/container:opacity-100",
    },
    padding: {
      group: "group/container",
      label: "hidden group-hover/container:block",
      border: "opacity-0 group-hover/container:opacity-100",
    },
    sizedBox: {
      group: "group/container",
      label: "hidden group-hover/container:block",
      border: "opacity-0 group-hover/container:opacity-100",
    },
  };

  const labelConfig = {
    blue: "bg-blue-600",
    red: "bg-red-600",
    orange: "bg-orange-600",
    green: "bg-green-600",
  };

  const borderConfig = {
    blue: "border-blue-600",
    red: "border-red-600",
    orange: "border-orange-600",
    green: "border-green-600",
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick?.(id);
  };

  return (
    <div
      className={`relative ${hoverConfig[type].group} cursor-pointer`}
      style={style}
      onClick={handleClick}
      data-id={id}
    >
      {/* Label on hover */}
      <div
        className={`
          ${labelConfig[color]} 
          ${hoverConfig[type].label} 
          ${type == "column" ? hoverConfig[type].zIndex : "z-20"}
          absolute top-0 left-0 text-white text-xs px-1 py-0.5 rounded pointer-events-none  capitalize`}
      >
        {text}
      </div>

      {/* Outline on hover */}
      <div
        className={`absolute inset-0 border-2  ${borderConfig[color]} rounded ${hoverConfig[type].border} pointer-events-none z-0`}
      ></div>

      <div className="relative z-10" style={{}}>
        {children}
      </div>
    </div>
  );
};

export default HoverWidget;
