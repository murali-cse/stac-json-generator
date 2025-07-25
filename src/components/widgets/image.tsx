import type { ImageWidget } from "../../models/widget.model";

const Image = (widget: ImageWidget) => {
  return (
    <div className="hover:border-green-600 hover:border-2 relative group/image">
      <div className="bg-green-600 text-white p-1 font-light text-xs absolute invisible  group-hover/image:visible">
        image
      </div>
      <img
        src={widget.src}
        alt="image"
        style={{ width: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default Image;
