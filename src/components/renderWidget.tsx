import React from "react";
import type { Widget } from "../models/widget.model";
import AppBar from "./widgets/appbar";
import Image from "./widgets/image";
import Container from "./widgets/container";
import Column from "./widgets/column";
import Row from "./widgets/row";
import Text from "./widgets/text";

export const renderWidget = (widget: Widget): React.ReactNode => {
  console.log(widget);
  switch (widget.type) {
    case "text":
      return <Text {...widget} />;

    case "image":
      return <Image {...widget} />;

    case "container":
      return <Container {...widget} />;

    case "padding":
      return (
        <div
          style={{
            paddingTop: widget.padding.top,
            paddingLeft: widget.padding.left,
            paddingRight: widget.padding.right,
            paddingBottom: widget.padding.bottom,
          }}
        >
          {widget.child && renderWidget(widget.child)}
        </div>
      );

    case "column":
      return <Column {...widget} />;

    case "row":
      return <Row {...widget} />;

    case "sizedBox":
      return (
        <div
          style={{
            height: widget.height,
            width: widget.width ?? "100%",
          }}
        />
      );

    case "spacer":
      return <div style={{ flexGrow: 1 }} />;

    case "scaffold":
      return (
        <div>
          <div>{widget.appBar && renderWidget(widget.appBar)}</div>
          {widget.body && renderWidget(widget.body)}
        </div>
      );

    case "appbar":
      return <AppBar {...widget} />;

    default:
      return <div style={{ border: "1px solid red" }}>Unknown widget</div>;
  }
};
