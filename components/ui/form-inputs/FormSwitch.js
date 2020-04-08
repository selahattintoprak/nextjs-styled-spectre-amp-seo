import AmpState from "../../amp/AmpState";

export default ({ id, title }) => (
  <>
    <div className="form-group">
      <label className="form-switch">
        <input type="checkbox" on={`change:AMP.setState({${id}: event.checked})`} />
        <i className="form-icon"></i> {title}
      </label>
    </div>
  </>
);
