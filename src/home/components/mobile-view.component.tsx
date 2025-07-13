/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDroppable } from "@dnd-kit/core";
import { Icon } from "@iconify/react/dist/iconify.js";

function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

const MobileView = ({ droppedWidgets }: { droppedWidgets: any[] }) => {
  return (
    <div className="pt-20 pb-20 bg-gray-200">
      <div className="flex justify-center items-center flex-col h-screen">
        <div className="h-[852px] w-[393px]">
          <div className="flex justify-end mb-2 ">
            <div className="bg-white p-2 rounded-3xl">
              <Icon icon="solar:code-outline" width="24" height="24" />
            </div>
          </div>
          <div className="h-full bg-white rounded-3xl flex justify-center items-center ">
            <Droppable>
              {droppedWidgets.length === 0 ? (
                <p className="text-center text-gray-400 mt-32">
                  Drop widgets here
                </p>
              ) : (
                <div className="space-y-4">
                  {droppedWidgets.map((widget, idx) => (
                    <div
                      key={idx}
                      className="border rounded-lg p-3 shadow-sm flex items-center gap-3"
                    >
                      <Icon icon={widget.icon} width={24} height={24} />
                      <span className="capitalize">{widget.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
