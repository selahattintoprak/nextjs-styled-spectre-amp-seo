import AmpDatePicker from "../amp/AmpDatePicker";
import FormSwitch from "../ui/form-inputs/FormSwitch";
import FormRadio from "../ui/form-inputs/FormRadio";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const storage = [
  {
    id: "move_into_storage",
    name: "storage",
    title: "Move to storage",
    subTitle: "Includes moving in and first month storage"
  },
  {
    id: "storage_in_transit",
    name: "storage",
    title: "Move to storage for a short time (up to 45 days)",
    subTitle: "Includes moving in, storage and moving out"
  }
];
export default () => (
  <div>
    <FormSwitch id="addStorage" title="Would You like to add storage?" />
    <FormRadio hidden data-amp-bind-hidden={`!addStorage`} items={storage} />
    <div
      hidden
      data-amp-bind-hidden={`storage !='storage_in_transit'`}
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center"
      }}
    >
      <p style={{ margin: 0 }}>Out of storage delivery date</p>
      <AmpDatePicker
        id="storage_move_out_date"
        name="storage_move_out_date"
        icon={{ name: faCalendarAlt, side: "left" }}
        placeholder="Select Date"
      />
    </div>
  </div>
);
