import AdminPage from "../../../components/AdminPage/AdminPage";
import { AutocompleteStyles, ChipsStyles, IconsStyles } from "../../../ui-styles/styles";
export const config = { amp: true };

export default () => (
  <>
    <AdminPage title="Add New Inventory" description="Compare Moving Deals & Quotes">
      <section className="section section-categories">
        <div className="container">
          <form method="POST" action-xhr="https://dummy.com">
            <div className="columns">
              <div className="column col-6 col-xs-12">
                <div className="form-group">
                  <label className="form-label" for="input-name">
                    Name
                  </label>
                  <input className="form-input" type="text" id="input-name" placeholder="Name" />
                  <label className="form-label" for="input-slug">
                    Slug
                  </label>
                  <input className="form-input" type="text" id="input-slug" placeholder="Slug" />
                  <label className="form-label" for="input-description">
                    Description
                  </label>
                  <textarea
                    className="form-input"
                    id="input-description"
                    placeholder="Description"
                    rows="3"
                  ></textarea>
                  <div className="form-group">
                    <label className="form-checkbox form-inline">
                      <input type="checkbox" name="is_common" />
                      <i className="form-icon"></i> Common
                    </label>
                    <label className="form-checkbox form-inline">
                      <input type="checkbox" checked="" name="is_crating" />
                      <i className="form-icon"></i> Crating
                    </label>
                    <label className="form-checkbox form-inline">
                      <input type="checkbox" checked="" name="is_off_the_wall" />
                      <i className="form-icon"></i> Off the wall
                    </label>
                    <label className="form-checkbox form-inline">
                      <input type="checkbox" checked="" name="is_assembly" />
                      <i className="form-icon"></i> Assembly
                    </label>
                    <label className="form-checkbox form-inline">
                      <input type="checkbox" checked="" name="is_piano" />
                      <i className="form-icon"></i> Piano
                    </label>
                  </div>
                </div>
              </div>
              <div className="column col-6 col-xs-12">
                {/*  <select className="form-select" id="select-parent-category" multiple>
                <option>Choose an option</option>
                <option>Slack</option>
                <option>Skype</option>
                <option>Hipchat</option>
              </select>              
              */}
                <div className="form-group">
                  <label className="form-label" for="input-cubic-feet">
                    Cubic Feet
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="input-cubic-feet"
                    name="cubic_feet"
                    placeholder="Cubic Feet"
                  />
                  <label className="form-label" for="select-parent-category">
                    Category
                  </label>
                  <div className="form-autocomplete">
                    <div className="form-autocomplete-input form-input is-focused">
                      <span className="chip">
                        Bruce Banner
                        <a className="btn btn-clear" href="#" aria-label="Close" role="button"></a>
                      </span>
                      <span className="chip">
                        {/* <img className="avatar avatar-sm" src="../img/avatar-1.png" alt="Thor Odinson" /> */}
                        Thor Odinson
                        <a className="btn btn-clear" href="#" aria-label="Close" role="button"></a>
                      </span>
                      <div className="has-icon-left">
                        <input className="form-input" type="text" placeholder="" value="S" />
                        <i className="form-icon loading"></i>
                      </div>
                    </div>
                    <ul className="menu">
                      <li className="menu-item">
                        <a href="#autocomplete">
                          <div className="tile tile-centered">
                            {/*  <div className="tile-icon">
                            <img
                              className="avatar avatar-sm"
                              src="../img/avatar-4.png"
                              alt="Steve Rogers"
                            />
                          </div> */}
                            <div className="tile-content">
                              <mark>S</mark>teve Roger
                              <mark>s</mark>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="#autocomplete">
                          <div className="tile tile-centered">
                            <div className="tile-icon">
                              <figure
                                className="avatar avatar-sm"
                                data-initial="TS"
                                style={{ backgroundColor: "#5755d9" }}
                              ></figure>
                            </div>
                            <div className="tile-content">
                              Tony
                              <mark>S</mark>tark
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <label className="form-label" for="input-upload-image">
                  Upload / Add Image
                </label>
                <input className="form-input" id="input-upload-image" type="file" />
                <div className="column">
                  <button className="btn btn-primary btn-block">Add New</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </AdminPage>
    <AutocompleteStyles />
    <ChipsStyles />
    <IconsStyles />
    <style jsx global>
      {`
        .btn.btn-clear::before {
          content: "X";
        }
      `}
    </style>
  </>
);
