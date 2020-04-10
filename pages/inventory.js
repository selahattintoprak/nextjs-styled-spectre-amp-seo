import Quotes from "../components/Quotes/Quotes";
import Page from "../components/Page";
import Layout from "../components/layout/Layout";

export const config = { amp: true };
export default () => (
  <>
    <Page title="Moving Deals" description="Compare Moving Deals & Quotes">
      <Layout>
        <section className="quotes">
          <h1>Book your move online</h1>
          <Quotes></Quotes>
        </section>
      </Layout>
    </Page>
  </>
);
