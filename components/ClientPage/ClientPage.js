import Page from "../Page";
import Layout from "../layout/Layout";
import NavbarActions from "./NavbarActions/NavbarActions";
import { menuItems } from "../../src/data/client/menu_items";
import { NextSeo } from "next-seo";
import Footer from "./Footer/Footer";
import Toggle from "./Toggle/Toggle";
export default ({ children, title, description, seo }) => (
  <>
    <Page title={title} description={description}>
      <Layout
        navbarActions={<NavbarActions divider />}
        navbarToggle={<Toggle />}
        navbarItems={menuItems}
        sidebarItems={menuItems}
        logoLink={"/"}
        footer={<Footer />}
      >
        <NextSeo config={{ ...seo }} />
        {children}
      </Layout>
    </Page>
  </>
);
