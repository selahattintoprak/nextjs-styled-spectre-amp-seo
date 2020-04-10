import Page from "../Page";
import Layout from "../layout/Layout";
import { menuItems } from "../../src/data/admin/menu_items";
import NavbarActions from "./NavbarActions/NavbarActions";

export default ({ children, title, description }) => (
  <>
    <Page title={title} description={description}>
      <Layout menuItems={menuItems} logoLink="/admin" navbarActions={<NavbarActions />}>
        {children}
      </Layout>
    </Page>
  </>
);
