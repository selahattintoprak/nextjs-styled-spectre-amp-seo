import AdminPage from "../../../components/AdminPage/AdminPage";
import { TablesStyles, TilesStyles } from "../../../ui-styles/styles";
export const config = { amp: true };

export default () => (
  <>
    <AdminPage title="All Inventory" description="Compare Moving Deals & Quotes">
      <section className="section section-categories">
        <div className="container">
          <form method="POST" action-xhr="https://dummy.com" className="form-group">
            <div className="columns">
              <div className="column col-6 col-sm-12">
                <select class="form-select">
                  <option>Filter by Category</option>
                  <option>Slack</option>
                  <option>Skype</option>
                  <option>Hipchat</option>
                </select>
              </div>
              <div className="column col-6 col-sm-12">
                <div className="input-group">
                  <input className="form-input form-inline" type="text" placeholder="Search" />
                  <button className="btn btn-primary input-group-btn">Search</button>
                </div>
              </div>
            </div>
            <div className="columns">
              <div class="column col-4 col-md-4 col-xs-12">
                <div class="tile tile-centered">
                  {true && (
                    <label class="form-checkbox">
                      <input type="checkbox" />
                      <i class="form-icon"></i>
                    </label>
                  )}
                  {false && (
                    <div class="tile-icon">
                      <div class="example-tile-icon">
                        <i class="icon icon-mail centered"></i>
                      </div>
                    </div>
                  )}
                  <div class="tile-content">
                    <div class="tile-title">spectre-docs.pdf</div>
                    <small class="tile-subtitle text-gray">14MB · Public · 1 Jan, 2017</small>
                  </div>
                  <div class="tile-action">
                    <button class="btn btn-link btn-action">
                      <i class="icon icon-more-vert"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </AdminPage>
    <TablesStyles />
    <TilesStyles />
    <style jsx global>
      {``}
    </style>
  </>
);
