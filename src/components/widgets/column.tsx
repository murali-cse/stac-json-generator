import React from "react";
import type { ColumnWidget } from "../../models/widget.model";
import { renderWidget } from "../render_widget";
import HoverWidget from "../hover_widget";

const Column = (widget: ColumnWidget) => {
  return (
    <HoverWidget id={widget.id} color="orange" type="column" text="column">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: widget.spacing ?? 0,
          height: "100vh",
        }}
      >
        {widget.children?.map((child) => (
          <React.Fragment key={child.id}>{renderWidget(child)}</React.Fragment>
        ))}
      </div>
    </HoverWidget>
  );
};

export default Column;
