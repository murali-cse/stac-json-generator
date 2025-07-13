import { Icon } from "@iconify/react";
import type { WidgetProps } from "../types";

const Widget = (props: WidgetProps) => {
  const width = props.size ?? 24;
  const height = props.size ?? 24;

  return (
    <>
      <div className="shadow-md p-5 h-full w-full min-h-24 min-w-24 rounded-lg bg-white">
        <div className="flex flex-col justify-between items-center">
          <Icon icon={props.icon} width={width} height={height} />
          <p className="text-sm mt-2 capitalize">{props.title}</p>
        </div>
      </div>
    </>
  );
};

export default Widget;
