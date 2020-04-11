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
  FormsStyles,
  CardsStyles,
} from "../../ui-styles/styles";

export default ({
  navbarActions,
  navbarItems,
  sidebarItems,
  logoLink,
  sidebar,
  children,
  footer,
  title,
  titleAnchor,
  navbarToggle,
}) => {
  let classes = sidebar ? "off-canvas-sidebar-show" : "";
  return (
    <>
      <div className={"app-container off-canvas " + classes}>
        <Navbar
          navbarItems={navbarItems}
          navbarActions={navbarActions}
          navbarToggle={navbarToggle}
          logoLink={logoLink}
        />

        {sidebarItems && <Sidebar sidebarItems={sidebarItems} navbarActions={navbarActions} />}

        {sidebar}

        <div className="off-canvas-content">
          <div className="app-content" id="content">
            <div className="app-content-container" id={titleAnchor}>
              {title && <Title title={title} titleAnchor={titleAnchor} />}
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
      <FormsStyles />
      <CardsStyles />
      <style jsx global>
        {layoutScss}
      </style>
    </>
  );
};
