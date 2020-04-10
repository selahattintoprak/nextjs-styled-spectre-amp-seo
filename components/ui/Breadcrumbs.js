import ActiveLink from "../ActiveLink";
import { BreadcrumbsStyles } from "../../ui-styles/styles";
export default ({ items }) => (
  <>
    <ul class="breadcrumb">
      {items.map((item, index) => (
        <MenuItem {...item} key={index} />
      ))}
    </ul>
    <BreadcrumbsStyles />
  </>
);
const MenuItem = ({ title, link, index }) => (
  <li key={index} className="breadcrumb-item">
    <ActiveLink activeClassName="active" href={link}>
      <a className="btn btn-link">{title}</a>
    </ActiveLink>
  </li>
);
