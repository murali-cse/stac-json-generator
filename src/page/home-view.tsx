import { DndContext, DragOverlay } from "@dnd-kit/core";
import { useState } from "react";
import type { Widget } from "../models/widget.model";
import { createWidgetByType } from "../utils/create-widget";
import WidgetCard from "../components/widget";
import MobileView from "../sections/home/mobile-section";
import WidgetsBar from "../sections/home/widgets-section";
// import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addWidget } from "../slices/widgets/widget_properties.slice";
import type { RootState } from "../store";

type activeWidgetType = {
  title?: string;
  icon?: string;
  id?: number;
};

const Home = () => {
  const widget = useSelector((state: RootState) => state.widgetProperties.prop);

  const dispatch = useDispatch();

  // const [droppedWidget, setDroppedWidget] = useState<Widget>({
  //   id: uuid(),
  //   type: "scaffold",
  //   appBar: {
  //     id: "1",
  //     title: "New Page",
  //     type: "appbar",
  //   },
  //   body: {
  //     id: "2",
  //     type: "column",
  //     children: [],
  //   },
  // });
  const [activeType, setActiveType] = useState<Widget["type"] | null>(null);
  const [activeWidget, setActiveWidget] = useState<activeWidgetType | null>(
    null
  );

  function handleDragStart(event: unknown) {
    if (!event || typeof event !== "object" || !("active" in event)) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dragEvent = event as { active: any }; // minimal cast
    const type = (
      dragEvent.active?.data?.current?.widget.type as string
    ).toLowerCase() as Widget["type"];

    setActiveWidget({
      title: dragEvent.active?.data?.current?.title,
      icon: dragEvent.active?.data?.current?.icon,
      id: dragEvent.active?.data?.current?.widget?.id,
    });

    if (type) setActiveType(type);
  }

  function handleDragEnd(event: unknown) {
    if (!event || typeof event !== "object" || !("active" in event)) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dragEvent = event as { active: any; over: any };
    const type = (
      dragEvent.active?.data?.current?.widget.type as string
    ).toLowerCase() as Widget["type"];

    // check appbar widget is already existing in the dropped widget
    // const isAppBarExist: boolean = droppedWidget.appBar == "";
    const isAppBarExist: boolean = widget.appBar == "";

    if (dragEvent.over?.id === "droppable" && type) {
      if (!isAppBarExist) {
        // const newWidget = createWidgetByType(type);
        // setDroppedWidget((prev) => {
        //   // insert the new widget into the body of the children
        //   if (
        //     prev.body &&
        //     Array.isArray((prev.body as { children?: unknown[] }).children)
        //   ) {
        //     (prev.body as { children: unknown[] }).children.push(newWidget);
        //   }
        //   return {
        //     ...prev,
        //   };
        // });
      }
      dispatch(addWidget(createWidgetByType(type)));

      console.log(widget);
    }

    setActiveType(null);
    setActiveWidget(null);
  }

  //   function extractJson() {
  //     const json = extractJsonFromWidgets(droppedWidgets);
  //   console.log(JSON.stringify(json, null, 2));
  //   }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="bg-gray-200 h-screen overflow-hidden">
        <div className="flex h-full">
          {/* Mobile Preview */}
          <div className="flex-2 overflow-auto">
            <MobileView droppedWidget={widget} />
          </div>

          {/* Widget Sidebar */}
          <div className="flex-1 bg-white h-screen overflow-auto">
            <WidgetsBar />
          </div>
        </div>
      </div>

      {/* Drag Preview */}
      <DragOverlay>
        {activeType ? (
          <div className="w-[80px]">
            <WidgetCard
              id={activeType}
              title={activeWidget?.title ?? "n/a"}
              icon={activeWidget?.icon ?? ""}
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Home;
