/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDraggable } from "@dnd-kit/core";
import Widget from "./widget.component";
import type { WidgetProps } from "../types";
import Grid from "./grid.component";

function Draggable(props: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    data: {
      title: props.title,
      icon: props.icon,
    },
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}

const commonWidgets: WidgetProps[] = [
  {
    title: "text",
    icon: "fluent:text-t-16-filled",
  },
  {
    title: "row",
    icon: "fluent:table-insert-row-24-regular",
  },
  {
    title: "column",
    icon: "fluent:table-insert-column-24-regular",
  },
  {
    title: "container",
    icon: "mynaui:box",
  },
  {
    title: "image",
    icon: "mage:image",
  },
  {
    title: "button",
    icon: "mdi:button",
  },
];

const pageWidget: WidgetProps[] = [
  {
    title: "app bar",
    icon: "formkit:button",
  },
  {
    title: "FAB",
    icon: "icons8:plus",
  },
  {
    title: "drawer",
    icon: "ic:sharp-menu",
  },
  {
    title: "end drawer",
    icon: "material-symbols:menu-open",
  },
];

const WidgetsBar = () => {
  return (
    <div className="px-5 py-10">
      <h2 className="text-xl font-bold">Widgets</h2>
      <div className="mt-4">
        <p>Commonly Used Widgets</p>
        <Grid cols={3}>
          {commonWidgets.map((widget, index) => (
            <Draggable
              key={index}
              id={index}
              title={widget.title}
              icon={widget.icon}
            >
              <Widget key={index} title={widget.title} icon={widget.icon} />
            </Draggable>
          ))}
        </Grid>
        <div className="mt-5"></div>
        <p>Page Layout Widgets</p>
        <Grid cols={3}>
          {pageWidget.map((widget, index) => (
            <Draggable
              key={index}
              id={index}
              title={widget.title}
              icon={widget.icon}
            >
              <Widget key={index} title={widget.title} icon={widget.icon} />
            </Draggable>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default WidgetsBar;
