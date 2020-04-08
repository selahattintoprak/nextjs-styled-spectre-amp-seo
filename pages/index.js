import homeScss from "../src/pages/home/home.scss";
import Quotes from "../components/Quotes/Quotes";
import Page from "../components/Page";
import Layout from "../components/layout/Layout";

export const config = { amp: true };
export default () => (
  <>
    <Page title="Moving Deals" description="Compare Moving Deals & Quotes">
      <Layout>
        <section className="section section-quotes" style={{ background: "#3dc2ff" }}>
          <div className="container">
            <div className="columns">
              <div className="column col-md-12 col-5 col-mx-auto">
                <h1
                  className="text-center"
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "bold",
                    color: "white",
                    marginTop: "4rem"
                  }}
                >
                  Book your move online
                </h1>

                <div className="form-group quotes-form">
                  <Quotes extras></Quotes>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Page>
    <style jsx global>
      {homeScss}
    </style>
    <style jsx global>
      {`
        body {
          background: #3dc2ff;
        }
        .quotes-form {
          padding: 16px;
          border-radius: 0.2rem;
          background: #ffffff;
          margin-bottom:4rem;
        }
      `}
    </style>
  </>
);