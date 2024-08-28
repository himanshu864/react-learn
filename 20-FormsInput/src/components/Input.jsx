export default function Input({ type, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={type}>{type}</label>
      <input id={type} type={type} name={type} {...props} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
