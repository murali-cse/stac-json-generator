import type { AppBarWidget as appbar } from "../../models/widget.model";

const AppBar = (widget: appbar) => {
  return (
    <div
      style={{
        backgroundColor: widget.backgroundColor ?? "#6002ee",
        color: "white",
      }}
      className="rounded-tl-3xl rounded-tr-3xl flex items-center h-[64px] relative hover:border-2 hover:border-blue-500 group"
    >
      <div className="absolute text-xs top-0 left-2 p-1 bg-blue-400 hidden group-hover:block">
        App Bar
      </div>
      <div
        className="h-[48px] w-[48px]"
        style={{ marginRight: "4px", marginLeft: "4px" }}
      ></div>
      <p className="font-roboto">{widget.title ?? "New Page"}</p>
    </div>
  );
};

export default AppBar;
