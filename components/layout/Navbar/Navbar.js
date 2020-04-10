import navbarScss from "./navbar.scss";
import Brand from "../Brand/Brand";
import NavbarItems from "../Navbar/NavbarItems";

export default ({ children, navbarItems, navbarActions, logoLink, navbarToggle }) => (
  <>
    <header className="app-header">
      <Brand logoLink={logoLink} />
      {navbarItems && (
        <amp-mega-menu className="app-mega-menu" id="mega-menu" height="55px">
          <nav className="app-navbar" style={{ height: "55px" }}>
            <ul className="nav app-nav" style={{ flexDirection: "row" }}>
              <NavbarItems navbarItems={navbarItems} />
            </ul>
          </nav>
        </amp-mega-menu>
      )}

      {navbarActions && <div className="navbar-actions">{navbarActions}</div>}

      {navbarToggle && <div className="navbar-toggle">{navbarToggle}</div>}
    </header>
    <style jsx global>
      {navbarScss}
    </style>
  </>
);
