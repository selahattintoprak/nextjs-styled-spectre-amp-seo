import { AmpIncludeAmpBind } from "./AmpCustomElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ icon: { name: iconName, side } = {}, id, placeholder, className, name }) => (
  <>
    <AmpIncludeAmpBind />
    <amp-date-picker
      id={id}
      type="single"
      mode="overlay"
      layout="container"
      on={`select:AMP.setState({${name}: event.date, dateType1: event.id})`}
      format="YYYY-MM-DD"
      open-after-select=""
      input-selector={`[name=${name}]`}
      className={`my-2 example-picker space-between ${className || ""} ${
        side == "left" ? "has-icon-left" : side == "right" ? "has-icon-right" : ""
      }`}
    >
      <input className="form-input" name={name} placeholder={placeholder} autoComplete="off" />
      {iconName && <FontAwesomeIcon className="form-icon" icon={iconName} />}
    </amp-date-picker>
    <style jsx global>
      {`
        :root {
          --color-primary: #005af0;
          --color-text-light: #fff;
          --color-bg-light: #fafafc;
          /*--space-2: 1rem; 16px */
          /*--space-1: 0.5rem; 8px */
        }

        .example-picker {
          display: flex;
        }

        .example-picker[mode="overlay"] {
          padding: var(--space-2);
        }

        .example-picker .CalendarMonth_caption {
          color: var(--color-text-light);
        }

        .example-picker [type="range"] .amp-date-picker-selecting {
          border-bottom-color: var(--color-primary);
          color: var(--color-primary);
        }

        .space-between > * + * {
          margin-left: var(--space-2);
        }

        #lb {
          background: var(--color-bg-light);
        }

        #lb .align-content-center {
          height: 100%;
        }

        .icon-picker {
          background-image: url('data:image/svg+xml,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1393.1 1500" style="enable-background:new 0 0 1393.1 1500;" xml:space="preserve"><path d="M107.2,1392.9h241.1v-241.1H107.2V1392.9z M401.9,1392.9h267.9v-241.1H401.9V1392.9z M107.2,1098.2h241.1V830.4H107.2 V1098.2z M401.9,1098.2h267.9V830.4H401.9V1098.2z M107.2,776.8h241.1V535.7H107.2V776.8z M723.4,1392.9h267.9v-241.1H723.4V1392.9z M401.9,776.8h267.9V535.7H401.9V776.8z M1044.8,1392.9H1286v-241.1h-241.1V1392.9z M723.4,1098.2h267.9V830.4H723.4V1098.2z M428.7,375V133.9c0-7.3-2.7-13.5-8-18.8c-5.3-5.3-11.6-8-18.8-8h-53.6c-7.3,0-13.5,2.7-18.8,8c-5.3,5.3-8,11.6-8,18.8V375 c0,7.3,2.7,13.5,8,18.8c5.3,5.3,11.6,8,18.8,8h53.6c7.3,0,13.5-2.7,18.8-8C426,388.5,428.7,382.3,428.7,375z M1044.8,1098.2H1286 V830.4h-241.1V1098.2z M723.4,776.8h267.9V535.7H723.4V776.8z M1044.8,776.8H1286V535.7h-241.1V776.8z M1071.6,375V133.9 c0-7.3-2.7-13.5-8-18.8c-5.3-5.3-11.6-8-18.8-8h-53.6c-7.3,0-13.5,2.7-18.8,8c-5.3,5.3-8,11.6-8,18.8V375c0,7.3,2.7,13.5,8,18.8 c5.3,5.3,11.6,8,18.8,8h53.6c7.3,0,13.5-2.7,18.8-8C1069,388.5,1071.6,382.3,1071.6,375z M1393.1,321.4v1071.4 c0,29-10.6,54.1-31.8,75.3c-21.2,21.2-46.3,31.8-75.3,31.8H107.2c-29,0-54.1-10.6-75.3-31.8C10.6,1447,0,1421.9,0,1392.9V321.4 c0-29,10.6-54.1,31.8-75.3s46.3-31.8,75.3-31.8h107.2v-80.4c0-36.8,13.1-68.4,39.3-94.6S311.4,0,348.3,0h53.6 c36.8,0,68.4,13.1,94.6,39.3c26.2,26.2,39.3,57.8,39.3,94.6v80.4h321.5v-80.4c0-36.8,13.1-68.4,39.3-94.6 C922.9,13.1,954.4,0,991.3,0h53.6c36.8,0,68.4,13.1,94.6,39.3s39.3,57.8,39.3,94.6v80.4H1286c29,0,54.1,10.6,75.3,31.8 C1382.5,267.3,1393.1,292.4,1393.1,321.4z"/></svg>');
          background-repeat: no-repeat;
          flex-shrink: 0;
          height: 28px;
          margin-top: var(--space-1);
          width: 27px;
        }
      `}
    </style>
  </>
);
