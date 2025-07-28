import React from "react";
import type { TextWidget } from "../../models/widget.model";
import HoverWidget from "../hover_widget";
import { useDispatch } from "react-redux";
import { updateShowProperties } from "../../slices/widget-panel/widget_panel";

const Text = (widget: TextWidget) => {
  const dispatch = useDispatch();

  const onTap = () => {
    dispatch(
      updateShowProperties({
        showProperties: true,
        widgetType: "text",
      })
    );
  };

  return (
    <HoverWidget type="text" color="red" text="text" onClick={onTap}>
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
    </HoverWidget>
  );
};

export default Text;
