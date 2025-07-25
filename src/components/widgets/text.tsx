import React from "react";
import type { TextWidget } from "../../models/widget.model";

const Text = (widget: TextWidget) => {
  return (
    <p
      style={{
        fontSize: widget.style?.fontSize,
        fontWeight: widget.style
          ?.fontWeight as React.CSSProperties["fontWeight"],
        lineHeight: widget.style?.height,
        color: widget.style?.color,
      }}
    >
      {widget.data}
    </p>
  );
};

export default Text;
