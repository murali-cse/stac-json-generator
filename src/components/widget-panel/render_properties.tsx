import { useDispatch } from "react-redux";
import type { WidgetSchema } from "../../types/widget-schema";
import BackButton from "../back_button";
import { updateShowProperties } from "../../slices/widget-panel/widget_panel";

const RenderProperties = ({ type }: { type: WidgetSchema["type"] }) => {
  const dispatch = useDispatch();

  const onBackClick = () => {
    dispatch(
      updateShowProperties({
        showProperties: false,
      })
    );
  };

  return (
    <div className="px-5 py-10">
      <BackButton onClick={onBackClick} />
      <h2 className="text-xl font-bold capitalize mt-3">{type} properties</h2>
    </div>
  );
};

export default RenderProperties;
