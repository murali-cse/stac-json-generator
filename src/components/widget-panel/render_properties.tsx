import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../back_button";
import { updateShowProperties } from "../../slices/widget-panel/widget_panel.slice";
import { editWidgetText } from "../../slices/widgets/widget_properties.slice";
// import type { Widget } from "../../models/widget.model";
import type { WidgetSchema } from "../../types/widget-schema";
import type { RootState } from "../../store";
import type {
  ContainerWidget,
  TextWidget,
  Widget,
} from "../../models/widget.model";

const RenderProperties = ({ schema }: { schema: WidgetSchema }) => {
  const id = useSelector((state: RootState) => state.widgetPanel.id);
  const widget = useSelector((state: RootState) => state.widgetProperties.prop);

  const dispatch = useDispatch();

  const onBackClick = () => {
    dispatch(
      updateShowProperties({
        showProperties: false,
      })
    );
  };

  const handleOnType = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("on change : ", e.target.value);
    dispatch(
      editWidgetText({
        id: id,
        data: e.target.value,
      })
    );
  };

  const findWidgetById = useCallback(
    (widget: Widget | undefined, id: string): TextWidget | null => {
      console.log("id : ", id);

      if (!widget) return null;
      if (widget.id === id && widget.type === "text")
        return widget as TextWidget;

      if (widget.type === "container" && "child" in widget) {
        return findWidgetById((widget as ContainerWidget).child, id);
      }

      return null;
    },
    []
  );

  const selectedWidget = useMemo(
    () => findWidgetById(widget, id),
    [widget, id, findWidgetById]
  );

  return (
    <div className="px-5 py-10">
      <BackButton onClick={onBackClick} />
      <h2 className="text-xl font-bold capitalize mt-3">
        {schema.type} properties
      </h2>

      <div className="mt-5">
        {schema.type == "text" ? (
          <>
            <label
              htmlFor="first_name"
              className=" mb-2 text-sm font-medium text-gray-900"
            >
              Text
            </label>

            <input
              type="text"
              id="text"
              value={selectedWidget?.data}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={`${schema.defaultProps.data}`}
              onChange={handleOnType}
              required
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default RenderProperties;
