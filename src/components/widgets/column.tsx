import React from "react";
import type { ColumnWidget } from "../../models/widget.model";
import { renderWidget } from "../render_widget";
import HoverWidget from "../hover_widget";
import { useDispatch } from "react-redux";
import { updateShowProperties } from "../../slices/widget-panel/widget_panel.slice";

const Column = (widget: ColumnWidget) => {
  const dispatch = useDispatch();

  const onTap = () => {
    dispatch(
      updateShowProperties({
        showProperties: true,
        widgetType: widget.type,
        id: widget.id,
      })
    );
  };

  return (
    <HoverWidget
      id={widget.id}
      color="orange"
      type="column"
      text="column"
      onClick={onTap}
    >
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
