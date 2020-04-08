import { menuItems } from "../../../src/data/menu_items";
import navbarItemsScss from "./navbar-items.scss";
import ActiveLink from "../../ActiveLink";

export default prop => (
  <>
    {menuItems.map(({ columns, ...rest }, index) => (
      <React.Fragment key={index}>
        {!columns && <MenuItem columns={columns} {...rest} />}
        {columns && <SubmenuItem columns={columns} {...rest} />}
      </React.Fragment>
    ))}

    <style jsx global>
      {navbarItemsScss}
    </style>
  </>
);
const MenuItem = ({ title, link, index }) => (
  <li key={index} className="menu-item">
    <ActiveLink activeClassName="active" href={link}>
      <a className="btn btn-link">
        {title}
      </a>
    </ActiveLink>
  </li>
);
const SubmenuItem = ({ title, link, columns }) => (
  <>
    <li className="menu-item">
      <a href={link} className="btn btn-link">
        {title}
      </a>
    </li>
    <li className="menu-item">
      <a href="#" className="btn" role="button">
        <i className="icon icon-caret"></i>
      </a>

      <div role="dialog">
        <ul className="menu" style={{ display: "block" }}>
          <div className="columns">
            {columns.map(({ divider, items }, index) => (
              <Column key={index} divider={divider} items={items} index={index} />
            ))}
          </div>
        </ul>
      </div>
    </li>
  </>
);
const Column = ({ items, index, divider }) => (
  <>
    {index != 0 && <div className="divider-vert"></div>}
    <div className="column">
      <li className="divider" data-content={divider}></li>
      {items.map(({ title, ...rest }) => (
        <Item key={title} title={title} {...rest} />
      ))}
    </div>
  </>
);
const Item = ({ title, link, divider }) => (
  <>
    {divider && <li className="divider" data-content={divider}></li>}
    <li className="menu-item">
      <a href={link}>{title}</a>
    </li>
  </>
);
