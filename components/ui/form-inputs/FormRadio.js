export default ({ label, items, ...rest }) => (
  <div className="form-group" {...rest}>
    {label && <label className="form-label">{label}</label>}
    {items.map(({ id, name, title, subTitle, checked }) => (
      <label className="form-radio" key={id}>
        <input
          type="radio"
          name={name}
          id={id}
          data-amp-bind-checked={`${name} == '${id}'`}
          on={`change:AMP.setState({ ${name}: '${id}' })`}
        />
        <i className="form-icon"></i> {title}
        <p style={{ fontSize: ".6rem", color: "gray", padding: 0, margin: 0 }}>{subTitle}</p>
      </label>
    ))}
  </div>
);
