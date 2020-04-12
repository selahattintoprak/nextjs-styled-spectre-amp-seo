import brandScss from "./brand.scss";
import { LabelsStyles } from "../../../ui-styles/styles";
import brand from "../../../src/data/brand";
import ActiveLink from "../../ActiveLink";

const { src, title, badge } = brand;
export default ({ logoLink }) => (
  <li className="navbar-brand">
    <div className="app-brand">
      <ActiveLink href={logoLink || "/"}>
        <a className="app-logo">
          <amp-img
            alt="Spectre.css CSS Framework"
            src={"/static/images/" + src}
            height="32"
            width="32"
          />
          {title && <h2>{title}</h2>}
          {badge && <h6 className="label label-secondary text-bold">{badge}</h6>}
        </a>
      </ActiveLink>
    </div>
    <LabelsStyles />
    <style jsx global>
      {brandScss}
    </style>
  </li>
);
