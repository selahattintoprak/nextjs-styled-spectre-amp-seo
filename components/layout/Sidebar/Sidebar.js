import sidebarScss from "./sidebar.scss";
import { AmpIncludeAmpSidebar } from "../../amp/AmpCustomElement";
import { menuItems } from "../../../src/data/menu_items";
import NavbarActions from "../Navbar/NavbarActions";
export default () => (
  <>
    <AmpIncludeAmpSidebar />
    <amp-sidebar className="app-sidebar" id="app-sidebar" layout="nodisplay" side="left">
      <amp-nested-menu layout="fill">
        <ul>
          {menuItems.map(({ title, link, columns, back }, index) => (
            <React.Fragment key={index}>
              {!columns && (
                <li className="menu-item">
                  <a href={link} className="btn btn-link">
                    {title}
                  </a>
                </li>
              )}

              {columns && (
                <>
                  <li className="menu-item">
                    <a href={link} className="btn btn-link">
                      {title}
                    </a>
                    <h4 className="btn" amp-nested-submenu-open="">
                      <i className="icon icon-caret"></i>
                    </h4>
                    <div amp-nested-submenu="">
                      <ul className="menu" style={{ display: "block" }}>
                        {back && (
                          <li className="menu-item">
                            <h6
                              amp-nested-submenu-close=""
                              className="btn btn-link"
                              style={{ margin: 0 }}
                            >
                              <i className="icon icon-arrow-left"></i>
                              {back}
                            </h6>
                          </li>
                        )}
                        <div className="columns" style={{ flexDirection: "column" }}>
                          {columns.map(({ divider, items }, index) => (
                            <Column key={index} divider={divider} items={items} index={index} />
                          ))}
                        </div>
                      </ul>
                    </div>
                  </li>
                </>
              )}
            </React.Fragment>
          ))}
          <li className="sidebar-actions">
            <NavbarActions />
          </li>
        </ul>
      </amp-nested-menu>
    </amp-sidebar>
    <style jsx global>
      {sidebarScss}
    </style>
  </>
);
const Column = ({ items, index, divider }) => (
  <>
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