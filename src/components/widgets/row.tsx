import React from "react";
import type { RowWidget } from "../../models/widget.model";
import { renderWidget } from "../render_widget";

const Row = (widget: RowWidget) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: widget.spacing ?? 0,
        width: "100%",
      }}
      className="relative group/row"
    >
      {/* Label visible on hover */}
      <div className="absolute top-0 left-0 bg-purple-400 text-white text-xs px-1 py-0.5 rounded z-10 pointer-events-none hidden group-hover/row:block">
        row
      </div>

      {/* Outline only on hover */}
      <div className="absolute inset-0 border-2 border-purple-500 rounded z-0 opacity-0 group-hover/row:opacity-100 pointer-events-none"></div>

      <div className="relative z-10">
        {widget.children?.map((child) => (
          <React.Fragment key={child.id}>{renderWidget(child)}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Row;
