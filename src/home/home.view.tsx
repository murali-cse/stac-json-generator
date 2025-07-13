/* eslint-disable @typescript-eslint/no-explicit-any */
import { DndContext, DragOverlay } from "@dnd-kit/core";
import MobileView from "./components/mobile-view.component";
import WidgetsBar from "./components/widgets-view.component";
import { useState } from "react";
import Widget from "./components/widget.component";

const Home = () => {
  const [droppedWidgets, setDroppedWidgets] = useState<any[]>([]);
  const [activeWidget, setActiveWidget] = useState<any>(null);

  function handleDragStart(event: any) {
    const { active } = event;
    setActiveWidget({
      title: active.data?.current?.title,
      icon: active.data?.current?.icon,
    });
  }

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (over?.id === "droppable") {
      setDroppedWidgets((prev) => [
        ...prev,
        {
          id: active.id,
          title: active.data?.current?.title,
          icon: active.data?.current?.icon,
        },
      ]);
    }

    setActiveWidget(null);
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="bg-gray-200 h-screen overflow-hidden">
        <div className="flex h-full">
          <div className="flex-2 overflow-auto">
            <MobileView droppedWidgets={droppedWidgets} />
          </div>
          <div className=" flex-1 bg-white h-screen overflow-auto">
            <WidgetsBar />
          </div>
        </div>
      </div>
      <DragOverlay>
        {activeWidget ? (
          <div className="w-[80px]">
            <Widget title={activeWidget.title} icon={activeWidget.icon} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Home;
