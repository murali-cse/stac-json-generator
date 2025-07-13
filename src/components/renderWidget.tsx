import React from "react";
import type { Widget } from "../models/widget.model";

export const renderWidget = (widget: Widget): React.ReactNode => {
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
      return (
        <img
          src={widget.src}
          alt="image"
          style={{ width: "100%", objectFit: "contain" }}
        />
      );

    case "container":
      return (
        <div
          style={{
            width: widget.width,
            height: widget.height,
            overflow: widget.clipBehavior === "hardEdge" ? "hidden" : "visible",
            borderRadius: widget.decoration?.borderRadius,
          }}
        >
          {widget.child && renderWidget(widget.child)}
        </div>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: widget.spacing ?? 0,
          }}
        >
          {widget.children?.map((child) => (
            <React.Fragment key={child.id}>
              {renderWidget(child)}
            </React.Fragment>
          ))}
        </div>
      );

    case "row":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: widget.spacing ?? 0,
          }}
        >
          {widget.children?.map((child) => (
            <React.Fragment key={child.id}>
              {renderWidget(child)}
            </React.Fragment>
          ))}
        </div>
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
      return (
        <div style={{ padding: "16px" }}>
          {widget.body && renderWidget(widget.body)}
        </div>
      );

    default:
      return <div style={{ border: "1px solid red" }}>Unknown widget</div>;
  }
};
