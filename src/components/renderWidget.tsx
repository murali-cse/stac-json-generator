import React from "react";
import type { Widget } from "../models/widget.model";
import AppBar from "./widgets/appbar";
import Image from "./widgets/image";
import Container from "./widgets/container";
import Column from "./widgets/column";
import Row from "./widgets/row";

export const renderWidget = (widget: Widget): React.ReactNode => {
  console.log(widget);
  switch (widget.type) {
    case "text":
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

    case "image":
      return <Image src={widget.src} id={widget.id} type={widget.type} />;

    case "container":
      return (
        <Container
          id={widget.id}
          type="container"
          child={widget.child}
          height={widget.height}
          width={widget.width}
        />
      );

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
      return (
        <Column id={widget.id} children={widget.children} type={widget.type} />
      );

    case "row":
      return (
        <Row id={widget.id} children={widget.children} type={widget.type} />
      );

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
      console.log(widget.appBar);
      return (
        <div>
          <div>{widget.appBar && renderWidget(widget.appBar)}</div>
          {widget.body && renderWidget(widget.body)}
        </div>
      );

    case "appbar":
      return <AppBar id={widget.id} type={widget.type} widget={widget} />;

    default:
      return <div style={{ border: "1px solid red" }}>Unknown widget</div>;
  }
};
