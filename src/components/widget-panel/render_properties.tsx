import { useDispatch } from "react-redux";
import type { WidgetSchema } from "../../types/widget-schema";
import BackButton from "../back_button";
import { updateShowProperties } from "../../slices/widget-panel/widget_panel";

const RenderProperties = ({ schema }: { schema: WidgetSchema }) => {
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
      <h2 className="text-xl font-bold capitalize mt-3">
        {schema.type} properties
      </h2>

      <div className="mt-5">
        <label
          htmlFor="first_name"
          className=" mb-2 text-sm font-medium text-gray-900"
        >
          Text
        </label>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={`${schema.defaultProps["data"]}`}
          required
        />
      </div>
    </div>
  );
};

export default RenderProperties;
