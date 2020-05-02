import Quotes from "../components/Quotes/Quotes";
import SinglePage from "../components/SinglePage/SinglePage";

export const config = { amp: true };

export default () => (
  <>
    <SinglePage title="Moving Deals" description="Compare Moving Deals & Quotes">
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
                  marginTop: "4rem",
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
    </SinglePage>
    <style jsx global>
      {`
        .app-content {
          flex: 1 1 auto;
          padding: 0 0;
        }
        body {
          background: #3dc2ff;
        }
        .quotes-form {
          padding: 16px;
          border-radius: 0.2rem;
          background: #ffffff;
          margin-bottom: 4rem;
        }
        .section-quotes {
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </>
);
