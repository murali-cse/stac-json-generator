import { useDroppable } from "@dnd-kit/core";
import { Icon } from "@iconify/react";
import type { Widget } from "../../models/widget.model";
// import { renderWidget } from "../../components/renderWidget";
// import { extractJsonFromWidgets } from "../../utils/extract-json";
import { WidgetRenderer } from "../../components/widget-renderer";

// Drop area component
function Droppable({ children }: { children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({ id: "droppable" });

  const style = {
    border: isOver ? "2px dashed green" : "2px dashed transparent",
    transition: "border 0.2s ease",
    height: "100%",
    borderRadius: "1rem",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

// Main mobile layout area
const MobileView = ({ droppedWidget }: { droppedWidget: Widget }) => {
  // function extractJson() {
  // const json = extractJsonFromWidgets(droppedWidgets);
  // console.log(JSON.stringify(json, null, 2));
  // }
  return (
    <div className="pt-10 pb-20 bg-gray-200">
      <div className="flex justify-center items-center flex-col h-screen">
        <div className="h-[852px] w-[393px]">
          <div className="flex justify-end mb-2">
            <div className="bg-white p-2 rounded-3xl">
              <Icon icon="solar:code-outline" width="24" height="24" />
            </div>
          </div>

          <div className="h-full bg-white rounded-3xl overflow-y-auto">
            <Droppable>
              {droppedWidget ? (
                <WidgetRenderer tree={droppedWidget} />
              ) : (
                <p className="text-center text-gray-400 mt-20">
                  Drop widgets here
                </p>
              )}
            </Droppable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
