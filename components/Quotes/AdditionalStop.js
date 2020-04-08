import FormSwitch from "../ui/form-inputs/FormSwitch";
import IconInput from "../ui/form-inputs/IconInput";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

export default ({ id, title }) => (
  <div>
    <FormSwitch id={id} title={title} />
    <IconInput
      hidden
      data-amp-bind-hidden={`!${id}`}
      icon={{ name: faMapPin, side: "left" }}
      inputClassName="input-lg"
      placeholder="Address,city, or zip"
    />
  </div>
);
