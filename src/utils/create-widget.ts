import { v4 as uuid } from "uuid";
import type { Widget } from "../models/widget.model";

export const createWidgetByType = (type: Widget["type"]): Widget => {
  switch (type) {
    case "text":
      return {
        id: uuid(),
        type: "text",
        data: "New Text",
        style: {
          fontSize: 18,
          fontWeight: "w400",
          height: 1.5,
          color: "#000000",
        },
      };

    case "row":
      return { id: uuid(), type: "row", spacing: 10, children: [] };

    case "column":
      return { id: uuid(), type: "column", spacing: 10, children: [] };

    case "container":
      return {
        id: uuid(),
        type: "container",
        width: 100,
        height: 100,
        decoration: { borderRadius: 12 },
        clipBehavior: "hardEdge",
        child: undefined,
      };

    case "image":
      return {
        id: uuid(),
        type: "image",
        src: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
      };

    case "button":
      return {
        id: uuid(),
        type: "button",
        text: "Click Me",
        style: {
          fontSize: 16,
          fontWeight: "w500",
          backgroundColor: "#007bff",
          color: "#fff",
        },
      };

    case "scaffold":
      return {
        id: uuid(),
        type: "scaffold",
        body: undefined,
        appBar: undefined,
        floatingActionButton: undefined,
      };

    case "padding":
      return {
        id: uuid(),
        type: "padding",
        padding: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
        child: undefined,
      };

    case "sizedBox":
      return {
        id: uuid(),
        type: "sizedBox",
        height: 20,
        width: 100,
      };

    case "spacer":
      return {
        id: uuid(),
        type: "spacer",
      };

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = type; // ✅ this enforces all cases handled
      throw new Error(`Unsupported widget type: ${type}`);
    }
  }
};
