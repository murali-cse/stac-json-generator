import React from "react";
import type { TextWidget, Widget } from "../../models/widget.model";
import HoverWidget from "../hover_widget";
import { useDispatch, useSelector } from "react-redux";
import { updateShowProperties } from "../../slices/widget-panel/widget_panel.slice";
import type { RootState } from "../../store";

const Text = (widget: TextWidget) => {
  const dispatch = useDispatch();

  const textWidgetProps = useSelector((state: RootState) => {
    const findWidgetById = (current: Widget, id: string): TextWidget | null => {
      if (!current) return null;
      if (current.id === id && current.type === "text") return current;
      if (current.type === "container" && current.child) {
        return findWidgetById(current.child, id);
      }
      return null;
    };

    return findWidgetById(
      state.widgetProperties.prop.body as Widget,
      widget.id
    );
  });

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
      type={widget.type}
      color="red"
      text="text"
      onClick={onTap}
    >
      <p
        style={{
          fontSize: widget.style?.fontSize,
          fontWeight: widget.style
            ?.fontWeight as React.CSSProperties["fontWeight"],
          lineHeight: widget.style?.height,
          color: widget.style?.color,
        }}
      >
        {textWidgetProps?.data}
      </p>
    </HoverWidget>
  );
};

export default Text;
