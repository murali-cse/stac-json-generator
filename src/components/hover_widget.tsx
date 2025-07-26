import {
  type CSSProperties,
  type MouseEventHandler,
  type ReactNode,
} from "react";

interface HoverWidgetType {
  text: string;
  color: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler;
  children: ReactNode;
}

const HoverWidget = ({
  text,
  color,
  style,
  onClick,
  children,
}: HoverWidgetType) => {
  const group = text.split(" ").join("_").toLowerCase();

  return (
    <div
      className={`relative group/${group} cursor-pointer`}
      style={style}
      onClick={onClick}
    >
      {/* Label on hover */}
      <div
        className={`absolute top-0 left-0 bg-${color}-600 text-white text-xs px-1 py-0.5 rounded z-20 pointer-events-none hidden group-hover/${group}:block capitalize`}
      >
        {text}
      </div>

      {/* Outline on hover */}
      <div
        className={`absolute inset-0 border-2  border-${color}-600 rounded opacity-0 group-hover/${group}:opacity-100 pointer-events-none z-0`}
      ></div>

      <div className="relative z-10" style={{}}>
        {children}
      </div>
    </div>
  );
};

export default HoverWidget;
