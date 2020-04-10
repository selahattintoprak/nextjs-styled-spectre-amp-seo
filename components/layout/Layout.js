import layoutScss from "./layout.scss";
import Sidebar from "./Sidebar/Sidebar";
import Title from "./Title/Title";
import Navbar from "./Navbar/Navbar";
import {
  OffCanvasStyles,
  ButtonsStyles,
  LayoutStyles,
  MenusStyles,
  TypographyStyles,
  IconsStyles,
  NavsStyles,
  NavbarStyles,
} from "../../ui-styles/styles";
export default ({
  navbarActions,
  menuItems,
  logoLink,
  sidebar,
  children,
  footer,
  title,
  anchor,
}) => {
  let classes = sidebar ? "off-canvas-sidebar-show" : "";
  return (
    <>
      <div className={"app-container off-canvas " + classes}>
        <Navbar menuItems={menuItems} navbarActions={navbarActions} logoLink={logoLink} />
        <Sidebar menuItems={menuItems} navbarActions={navbarActions} />

        {sidebar && (
          <div className="app-sidebar">
            <div className="off-canvas-sidebar">{sidebar}</div>
          </div>
        )}
        <div className="off-canvas-content">
          <div className="app-content" id="content">
            <div className="app-content-container" id={anchor}>
              {title && <Title title={title} />}
              {children}
            </div>
            {footer && (
              <div className="page-footer container grid-lg" id="app-footer">
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
      <TypographyStyles />
      <LayoutStyles />
      <MenusStyles />
      <OffCanvasStyles />
      <ButtonsStyles />
      <IconsStyles />
      <NavbarStyles />
      <NavsStyles />
      <style jsx global>
        {layoutScss}
      </style>
    </>
  );
};
