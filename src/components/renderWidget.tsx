import React from "react";
import type { Widget } from "../models/widget.model";
import AppBar from "./widgets/appbar";

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
      return (
        <div className="hover:border-green-600 hover:border-2 relative group/image">
          <div className="bg-green-600 text-white p-1 font-light text-xs absolute invisible  group-hover/image:visible">
            image
          </div>
          <img
            src={widget.src}
            alt="image"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
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
            height: "100vh",
          }}
          className="hover:border-orange-500 hover:border-2 relative group/column"
        >
          <div className="absolute text-xs top-0 p-1 bg-orange-400 hidden group-hover/column:block z-10">
            <p className="text-white text-xs">column</p>
          </div>
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
