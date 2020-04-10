import AdminPage from "../../../components/AdminPage/AdminPage";
import { TablesStyles } from "../../../ui-styles/styles";
export const config = { amp: true };

export default () => (
  <>
    <AdminPage title="Inventory Categories" description="Compare Moving Deals & Quotes">
      <section className="section section-categories">
        <div className="container">
          <div className="columns">
            <div className="column col-6 col-xs-12">
              <h6>Add new category</h6>
              <form method="POST" action-xhr="https://dummy.com" class="form-group">
                <label class="form-label" for="input-name">
                  Name
                </label>
                <input class="form-input" type="text" id="input-name" placeholder="Name" />
                <label class="form-label" for="input-slug">
                  Slug
                </label>
                <input class="form-input" type="text" id="input-slug" placeholder="Slug" />
                <label class="form-label" for="input-description">
                  Message
                </label>
                <textarea
                  class="form-input"
                  id="input-description"
                  placeholder="Textarea"
                  rows="3"
                ></textarea>
                <label class="form-label" for="select-parent-category">
                  Parent Category
                </label>
                <select class="form-select" id="select-parent-category">
                  <option>Choose an option</option>
                  <option>Slack</option>
                  <option>Skype</option>
                  <option>Hipchat</option>
                </select>
                <label class="form-label" for="input-upload-image">
                  Upload / Add Image
                </label>
                <input class="form-input" id="input-upload-image" type="file" />
                <div className="column">
                  <button class="btn btn-primary btn-block">Add New</button>
                </div>
              </form>
            </div>
            <div className="column col-6 col-xs-12">
              <table class="table table-striped table-hover" style={{textAlign:"center"}}>
                <thead>
                  <tr>
                    <th>
                      <label class="form-checkbox">
                        <input id="docs-demo-checkbox" type="checkbox" indeterminate="true" />
                        <i class="form-icon"></i>
                      </label>
                    </th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="active">
                    <td>
                      <label class="form-checkbox form-inline">
                        <input type="checkbox" indeterminate="true" />
                        <i class="form-icon"></i>
                      </label>
                    </td>
                    <td>[]</td>
                    <td>
                      Crime, Drama
                      <div>
                        <a>Edit</a>|<a>Delete</a>
                      </div>
                    </td>
                    <td>14 October 1994</td>
                    <td>14</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </AdminPage>
    <TablesStyles />
  </>
);
