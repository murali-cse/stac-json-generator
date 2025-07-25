import React from "react";
import type { ColumnWidget } from "../../models/widget.model";
import { renderWidget } from "../renderWidget";

const Column = (widget: ColumnWidget) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: widget.spacing ?? 0,
        height: "100vh",
      }}
      className="relative group/column"
    >
      {/* Label visible on hover */}
      <div className="absolute top-0 left-0 bg-orange-400 text-white text-xs px-1 py-0.5 rounded z-10 pointer-events-none hidden group-hover/column:block">
        column
      </div>

      {/* Outline only on hover */}
      <div className="absolute inset-0 border-2 border-orange-500 rounded z-0 opacity-0 group-hover/column:opacity-100 pointer-events-none"></div>

      {/* Render children */}
      <div className="relative z-10">
        {widget.children?.map((child) => (
          <React.Fragment key={child.id}>{renderWidget(child)}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Column;
