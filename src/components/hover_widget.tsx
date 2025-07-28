import {
  type CSSProperties,
  type MouseEventHandler,
  type ReactNode,
} from "react";

interface HoverWidgetType {
  text: string;
  type: "appBar" | "column" | "row" | "text" | "container";
  color: "blue" | "red" | "orange" | "green";
  style?: CSSProperties;
  onClick?: MouseEventHandler;
  children: ReactNode;
}

const HoverWidget = ({
  text,
  type,
  color,
  style,
  onClick,
  children,
}: HoverWidgetType) => {
  const hoverConfig = {
    appBar: {
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

  return (
    <div
      className={`relative ${hoverConfig[type].group} cursor-pointer`}
      style={style}
      onClick={onClick}
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
