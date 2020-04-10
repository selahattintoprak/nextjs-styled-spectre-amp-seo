import sidebarScss from "./sidebar.scss";
import ActiveLink from "../../ActiveLink";
import { AmpIncludeAmpSidebar } from "../../amp/AmpCustomElement";

export default ({ sidebarItems, navbarActions }) => (
  <>
    <AmpIncludeAmpSidebar />
    <amp-sidebar className="app-sidebar" id="app-sidebar" layout="nodisplay" side="left">
      <amp-nested-menu layout="fill">
        <ul>
          {sidebarItems.map(({ title, link, columns, back }, index) => (
            <React.Fragment key={index}>
              {!columns && (
                <li className="menu-item">
                  <ActiveLink activeClassName="active" href={link}>
                    <a className="btn btn-link">{title}</a>
                  </ActiveLink>
                </li>
              )}

              {columns && (
                <>
                  <li className="menu-item">
                    <ActiveLink activeClassName="active" href={link}>
                      <a className="btn btn-link">{title}</a>
                    </ActiveLink>
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
          {navbarActions && <li className="sidebar-actions">{navbarActions}</li>}
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
      <ActiveLink activeClassName="active" href={link}>
        <a href={link}>{title}</a>
      </ActiveLink>
    </li>
  </>
);
