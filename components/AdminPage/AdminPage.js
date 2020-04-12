import Page from "../Page";
import Layout from "../layout/Layout";
import { menuItems } from "../../src/data/admin/menu_items";
import NavbarActions from "./NavbarActions/NavbarActions";
import Sidebar from "../ui/Sidebar/Sidebar";
import Accordions from "../ui/Accordions/Accordions";
import Toggle from "./Toggle/Toggle";
import Login from "../Login";
export default ({ children, title, titleAnchor, description }) => (
  <>
    <Page title={title} description={description}>
      <Layout
        title={title}
        titleAnchor={titleAnchor || "#"}
        logoLink="/admin"
        navbarActions={<NavbarActions />}
        navbarToggle={<Toggle />}
        sidebar={
          <Sidebar id="app-sidebar">
            <Accordions accordionItems={menuItems} />
          </Sidebar>
        }
        href="#admin-sidebar"
      >
        <Login />
        {children}
      </Layout>
    </Page>
    <style jsx global>
      {``}
    </style>
  </>
);
