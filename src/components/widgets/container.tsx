import type { ContainerWidget } from "../../models/widget.model";
import { renderWidget } from "../renderWidget";

const Container = (widget: ContainerWidget) => {
  return (
    <div
      className="relative group/container"
      style={{
        width: widget.width ?? "100%",
        height: widget.height ?? "10px",
        borderRadius: widget.decoration?.borderRadius,
      }}
    >
      {/* Label on hover */}
      <div className="absolute top-0 left-0 bg-red-600 text-white text-xs px-1 py-0.5 rounded z-10 pointer-events-none hidden group-hover/container:block">
        Container
      </div>

      {/* Outline on hover */}
      <div className="absolute inset-0 border-2  border-red-600 rounded opacity-0 group-hover/container:opacity-100 pointer-events-none z-0"></div>

      {/* Content */}
      <div
        className="relative z-10"
        style={{
          width: widget.width ?? "100%",
        }}
      >
        {widget.child && renderWidget(widget.child)}
      </div>
    </div>
  );
};

export default Container;
