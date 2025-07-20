/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Widget } from "../models/widget.model";

/**
 * Recursively converts a widget object into pure JSON format
 * by stripping internal IDs or React-specific properties.
 */
export function extractJsonFromWidgets(widgets: Widget[]): unknown[] {
  return widgets.map(serializeWidget);
}

function serializeWidget(widget: Widget): unknown {
  const base = { ...widget };
  delete (base as any).id;

  switch (widget.type) {
    case "appbar":
    case "text":
    case "image":
    case "spacer":
    case "sizedBox":
    case "button":
      return base;

    case "container":
      return {
        ...base,
        child: widget.child ? serializeWidget(widget.child) : undefined,
      };

    case "padding":
      return {
        ...base,
        child: widget.child ? serializeWidget(widget.child) : undefined,
      };

    case "row":
    case "column":
      return {
        ...base,
        children: widget.children.map(serializeWidget),
      };

    case "scaffold":
      return {
        ...base,
        body: widget.body ? serializeWidget(widget.body) : undefined,
        appBar: widget.appBar,
        floatingActionButton: widget.floatingActionButton,
      };

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = widget;
      throw new Error(`Unhandled widget type: ${(widget as any).type}`);
    }
  }
}
