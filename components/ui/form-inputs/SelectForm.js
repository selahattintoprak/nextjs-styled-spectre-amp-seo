export default ({ items, chooseName, id, ...rest }) => (
  <select
    className="form-select"
    id={id}
    on={`change:AMP.setState({ ${id}: event.value })`}
    {...rest}
  >
    <option>{chooseName}</option>
    {items.map(({ value, title }) => (
      <option key={value} value={value}>
        {title}
      </option>
    ))}
  </select>
);
