import { useDispatch } from "react-redux";
import type { AppBarWidget as appbar } from "../../models/widget.model";
import HoverWidget from "../hover_widget";
import { updateShowProperties } from "../../slices/widget-panel/widget_panel.slice";

const AppBar = (widget: appbar) => {
  const dispatch = useDispatch();

  const onTap = () => {
    dispatch(
      updateShowProperties({
        showProperties: true,
        widgetType: widget.type,
        id: widget.id,
      })
    );
  };

  return (
    <HoverWidget
      id={widget.id}
      type={widget.type}
      text="app bar"
      color="blue"
      onClick={onTap}
    >
      <div
        style={{
          backgroundColor: widget.backgroundColor ?? "#6002ee",
          color: "white",
        }}
        className="rounded-tl-3xl rounded-tr-3xl flex items-center h-[64px]"
      >
        <div
          className="h-[48px] w-[48px]"
          style={{ marginRight: "4px", marginLeft: "4px" }}
        ></div>
        <p className="font-roboto">{widget.title ?? "New Page"}</p>
      </div>
    </HoverWidget>
  );
};

export default AppBar;
