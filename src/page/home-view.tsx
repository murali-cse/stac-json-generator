import { DndContext, DragOverlay } from "@dnd-kit/core";
import { useState } from "react";
import type { Widget } from "../models/widget.model";
import { createWidgetByType } from "../utils/create-widget";
import WidgetCard from "../components/widget";
import MobileView from "../sections/home/mobile-section";
import WidgetsBar from "../sections/home/widgets-section";

const Home = () => {
  const [droppedWidgets, setDroppedWidgets] = useState<Widget[]>([]);
  const [activeType, setActiveType] = useState<Widget["type"] | null>(null);

  function handleDragStart(event: unknown) {
    if (!event || typeof event !== "object" || !("active" in event)) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dragEvent = event as { active: any }; // minimal cast
    const type = (
      dragEvent.active?.data?.current?.widget.type as string
    ).toLowerCase() as Widget["type"];

    if (type) setActiveType(type);
  }

  function handleDragEnd(event: unknown) {
    if (!event || typeof event !== "object" || !("active" in event)) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dragEvent = event as { active: any; over: any };
    const type = (
      dragEvent.active?.data?.current?.widget.type as string
    ).toLowerCase() as Widget["type"];

    if (dragEvent.over?.id === "droppable" && type) {
      const newWidget = createWidgetByType(type);
      setDroppedWidgets((prev) => [...prev, newWidget]);
    }

    setActiveType(null);
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
            <MobileView droppedWidgets={droppedWidgets} />
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
            <WidgetCard id={activeType} title={activeType} icon="" />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Home;
