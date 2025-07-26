import { Icon } from "@iconify/react/dist/iconify.js";
import type React from "react";

const BackButton = ({ onClick }: { onClick?: React.MouseEventHandler }) => {
  return (
    <div className="flex gap-1 items-center cursor-pointer" onClick={onClick}>
      <Icon
        icon="ion:chevron-back"
        width="18"
        height="100%"
        style={{
          color: "oklch(55.1% 0.027 264.364)",
        }}
      />
      <p className="text-gray-500">Back</p>
    </div>
  );
};

export default BackButton;
