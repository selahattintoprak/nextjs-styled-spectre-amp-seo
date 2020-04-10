import AdminPage from "../../../components/AdminPage/AdminPage";

export const config = { amp: true };

export default () => (
  <>
    <AdminPage title="Inventory Categories" description="Compare Moving Deals & Quotes">
      <section className="section section-categories">
        <div className="container">
          <div className="columns">
            <div className="column col-6 col-xs-12">
              <div class="form-group">
                <label class="form-label" for="input-example-1">
                  Name
                </label>
                <input class="form-input" type="text" id="input-example-1" placeholder="Name" />
              </div>
            </div>
            <div className="column col-6 col-xs-12"></div>
          </div>
        </div>
      </section>
    </AdminPage>
  </>
);
