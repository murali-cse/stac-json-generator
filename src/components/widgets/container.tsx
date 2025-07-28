import type { ContainerWidget } from "../../models/widget.model";
import HoverWidget from "../hover_widget";
import { renderWidget } from "../render_widget";

const Container = (widget: ContainerWidget) => {
  return (
    <HoverWidget
      color="green"
      type="container"
      text="Container"
      style={{
        width: widget.width ?? "100%",
        height: widget.height ?? "10px",
        borderRadius: widget.decoration?.borderRadius,
      }}
    >
      {widget.child && renderWidget(widget.child)}
    </HoverWidget>
  );
};

export default Container;
