import AdminPage from "../../components/AdminPage/AdminPage";
import { CardsStyles } from "../../ui-styles/styles";

export const config = { amp: true };

export default () => (
  <>
    <AdminPage title="Admin" description="Compare Moving Deals & Quotes">
      <section className="section section-banner">
        <div className="container">
          <h1
            className="text-center"
            style={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              marginTop: "4rem",
            }}
          >
            Moving.Deals 2.0
          </h1>
          <div className="columns">
            <div className="column col-6 col-xs-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-title h5">Inventory</div>
                </div>
                <div className="card-body">Manage the inventory items.</div>
                <div className="card-footer">
                  <a className="btn btn-primary" href="components/accordions.html">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="column col-6 col-xs-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-title h5">Moves</div>
                </div>
                <div className="card-body">View and manage all moves.</div>
                <div className="card-footer">
                  <a className="btn btn-primary" href="components/avatars.html">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-banner">
        <div className="container">
          <h1
            className="text-center"
            style={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              marginTop: "4rem",
            }}
          >
            Moving.Deals 2.0
          </h1>
          <div className="columns">
            <div className="column col-6 col-xs-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-title h5">Inventory</div>
                </div>
                <div className="card-body">Manage the inventory items.</div>
                <div className="card-footer">
                  <a className="btn btn-primary" href="components/accordions.html">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="column col-6 col-xs-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-title h5">Moves</div>
                </div>
                <div className="card-body">View and manage all moves.</div>
                <div className="card-footer">
                  <a className="btn btn-primary" href="components/avatars.html">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminPage>
    <CardsStyles />
    <style jsx global>
      {`
        @media (min-width: 960px) {
          .section-banner .container .columns {
            width: 80%;
            margin-left: auto;
            margin-right: auto;
          }
        }
        .card {
          box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2);
          border: 0;
          height: 100%;
          margin: 2px;
        }
        .column {
          padding: 16px;
        }
      `}
    </style>
  </>
);
