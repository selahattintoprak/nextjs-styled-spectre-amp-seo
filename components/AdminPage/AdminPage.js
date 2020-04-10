import Page from "../Page";
import Layout from "../layout/Layout";
import { menuItems } from "../../src/data/admin/menu_items";

export default ({ children, title, description }) => (
  <>
    <Page title={title} description={description}>
      <Layout menuItems={menuItems}>{children}</Layout>
    </Page>
  </>
);
