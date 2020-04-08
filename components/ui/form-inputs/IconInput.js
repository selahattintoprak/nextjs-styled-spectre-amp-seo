import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ icon: { name: iconName, side }, placeholder, inputClassName, ...rest }) => {
  return (
    <div className={"my-2 " + (side == "left" ? "has-icon-left" : "has-icon-right")} {...rest}>
      <input
        type="title"
        className={"form-input " + (inputClassName ? inputClassName : "")}
        placeholder={placeholder}
      />
      <FontAwesomeIcon className="form-icon" icon={iconName} />
    </div>
  );
};
