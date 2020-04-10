import navbarScss from "./navbar.scss";
import Brand from "../Brand/Brand";
import NavbarItems from "../Navbar/NavbarItems";
import Toggle from "../Toggle/Toggle";

export default ({ children, menuItems, navbarActions }) => (
  <>
    <header className="app-header">
      <Brand />
      <amp-mega-menu className="app-mega-menu" id="mega-menu" height="55px">
        <nav className="app-navbar" style={{ height: "55px" }}>
          <ul className="nav app-nav" style={{ flexDirection: "row" }}>
            <NavbarItems menuItems={menuItems} />
          </ul>
        </nav>
      </amp-mega-menu>

      {navbarActions && <div className="navbar-actions">{navbarActions}</div>}
      
      <div className="navbar-toggle">
        <Toggle />
      </div>
    </header>
    <style jsx global>
      {navbarScss}
    </style>
  </>
);
