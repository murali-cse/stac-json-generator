import { useDraggable } from "@dnd-kit/core";
import Widget from "../../components/widget";
// import Grid from "../../components/grid";
import { v4 as uuid } from "uuid";
import type { WidgetProps } from "../../types/widget-types";
import { createWidgetByType } from "../../utils/create-widget";

// 🧩 Draggable wrapper component
function DraggableWidget({ id, title, icon, widget }: WidgetProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: {
      title,
      icon,
      widget,
    },
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Widget id={id} title={title} icon={icon} widget={widget} />
    </button>
  );
}

// 🧱 Widget definitions
const commonWidgets: WidgetProps[] = [
  {
    id: uuid(),
    title: "Text",
    icon: "fluent:text-t-16-filled",
    widget: createWidgetByType("text"),
  },
  {
    id: uuid(),
    title: "Row",
    icon: "fluent:table-insert-row-24-regular",
    widget: createWidgetByType("row"),
  },
  {
    id: uuid(),
    title: "Column",
    icon: "fluent:table-insert-column-24-regular",
    widget: createWidgetByType("column"),
  },
  {
    id: uuid(),
    title: "Container",
    icon: "mynaui:box",
    widget: createWidgetByType("container"),
  },
  {
    id: uuid(),
    title: "Image",
    icon: "mage:image",
    widget: createWidgetByType("image"),
  },
  {
    id: uuid(),
    title: "Button",
    icon: "mdi:button",
    widget: createWidgetByType("button"),
  },
];

// 📄 You can expand this later
const pageWidget: WidgetProps[] = [
  {
    id: uuid(),
    title: "App Bar",
    icon: "formkit:button",
    widget: {
      id: uuid(),
      type: "appbar",
      title: "New Page",
    },
  },

  {
    id: uuid(),
    title: "FAB",
    icon: "icons8:plus",
    widget: createWidgetByType("button"),
  },
];

const WidgetsBar = () => {
  return (
    <div className="px-5 py-10">
      <h2 className="text-xl font-bold">Widgets</h2>
      <div className="mt-4">
        <p className="mb-2">Commonly Used Widgets</p>
        {/* <Grid cols={3}> */}
        <div className="flex flex-wrap gap-3">
          {commonWidgets.map((widget, index) => (
            <DraggableWidget key={index} {...widget} />
          ))}
        </div>
        {/* </Grid> */}

        <div className="mt-5" />
        <p className="mb-2">Page Layout Widgets</p>
        {/* <Grid cols={3}> */}
        <div className="flex flex-wrap gap-3">
          {pageWidget.map((widget, index) => (
            <DraggableWidget key={index} {...widget} />
          ))}
        </div>
        {/* </Grid> */}
      </div>
    </div>
  );
};

export default WidgetsBar;
