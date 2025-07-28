import { useDispatch } from "react-redux";
import type { ContainerWidget } from "../../models/widget.model";
import { updateShowProperties } from "../../slices/widget-panel/widget_panel.slice";
import HoverWidget from "../hover_widget";
import { renderWidget } from "../render_widget";

const Container = (widget: ContainerWidget) => {
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
      color="green"
      type="container"
      text="Container"
      style={{
        width: widget.width ?? "100%",
        height: widget.height ?? "10px",
        borderRadius: widget.decoration?.borderRadius,
      }}
      onClick={onTap}
    >
      {widget.child && renderWidget(widget.child)}
    </HoverWidget>
  );
};

export default Container;
